import mongoose, {Schema} from 'mongoose';

const NoteSchema = new Schema({
    title: {type: String},
    text: {type: String, required: true},
    color: {type: String},
    createdAt: {type: Date}
});

const Note = mongoose.model('Note', NoteSchema);