import Note from '../models/note';

export const getNotes = (req, res, next) => {
    Note.find()
        .then(data => {
            return res.send(data);
        })
        .catch(({message}) => {
            return next({
                status: 500,
                message
            });
        })
};

export const addNote = (req, res, next) => {
    const data = req.body;

    Note.create(data)
        .then(data => {
            return res.send(data);
        })
        .catch(({message}) => {
            return next({
                status: 500,
                message
            });
        })
};

export const deleteNote = (req, res, next) => {
    const _id = req.params.id;

    Note.findOne({_id})
        .then(entry => {
            entry.remove();
            return res.send(entry);
        })
        .catch(({message}) => {
            return next({
                status: 500,
                message
            })
        })
};

export const updateNote = (req, res, next) => {
    const _id = req.params.id;
    const newData = req.body;

    Note.findOne({_id})
        .then(entry => {
            Note.update(entry, {$set: newData});
            return res.send(entry);
        })
        .catch(({message}) => {
            return next({
                status: 500,
                message
            })
        })
};