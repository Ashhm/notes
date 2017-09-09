import express from 'express';
import * as NotesContentController from '../controllers/note';

const router = express.Router();

router.get('/', NotesContentController.getNotes);
router.post('/', NotesContentController.addNote);
router.put('/:id', NotesContentController.updateNote);
router.delete('/:id', NotesContentController.deleteNote);

export default router;