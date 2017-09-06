import express from 'express';

//database controllers
import db from '../controllers/dbUtils';

const router = express.Router();

router.get('/', (req, res) => {
    db.listNotes().then(data => res.send(data)).catch(err => console.log(err));
});

router.post('/', (req, res) => {
    if (req.body.id){
        db.updateNote(req.body).then(data => res.send(data)).catch(err => console.log(err));
    } else {
        db.createNote(req.body).then(data => res.send(data)).catch(err => console.log(err));
    }
});

router.delete('/:id', (req, res) => {
    db.deleteNote(req.params.id).then(data => res.send(data)).catch(err => console.log(err));
});

router.put('/:id', (req, res) => {
    db.updateNote(req.params.id, req.body).then(data => res.send(data)).catch(err => console.log(err));
});

export default router;