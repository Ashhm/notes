import mongoose from 'mongoose';
import bluebird from 'bluebird';

//model
import '../models/note';

import config from '../etc/config.json';

mongoose.Promise = bluebird;

const Note = mongoose.model('Note');

const dbUtils = {

    setUpConnection: () => {
        mongoose.connect(`mongodb://${config.db.host}:${config.db.port}/${config.db.name}`, {useMongoClient: true})
            .then(() =>
                console.log(`Mongo database: ${config.db.host}:${config.db.port}/${config.db.name} is connected`))
            .catch(err => console.log(err))
        ;
    },

    listNotes: () => {
        return Note.find();
    },

    createNote: (data) => {
        const note = new Note({
            title: data.title,
            text: data.text,
            color: data.color,
            createdAt: new Date()
        });

        return note.save();
    },

    deleteNote: (id) => {
        return Note.findById(id).remove();
    },

    //for mongo _id = Object(id). $set gonna modify only matched fields
    updateNote: (data) => {
        return Note.update({_id: Object(data.id)},{$set: data});
    }
};

export default dbUtils;