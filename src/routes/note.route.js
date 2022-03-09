import express from 'express';
import * as noteController from '../controllers/note.controller';
import { userAuth } from '../middlewares/auth.middleware';
import { userAuthorization } from '../middlewares/auth.middleware';
import { redisCheck } from '../middlewares/redis.middleware';

const router = express.Router();

//route to add new note
router.post('/addnote', userAuthorization, noteController.addNote );

//route to get all notes
router.get('/getAllNotes',userAuthorization, redisCheck, noteController.getAllNotes);

//route to update a note
router.put('/updateNote',userAuthorization, noteController.updateNotes);

//route to get a note
router.get('/getNote/:_noteId',userAuthorization,noteController.getNote);

//router to trash a note
router.put('/trashNote',userAuthorization, noteController.trashNote);

//router to archive a note
router.put('/archiveNote',userAuthorization, noteController.archiveNote);

//router to delete a note
router.delete('/deleteNote', userAuthorization, noteController.deleteNote);

//route rto get trash notes list
router.get('/getTrashNotes', userAuthorization, noteController.getTrashNotesList);

//router to get archive notes list
router.get('/getArchiveNotes', userAuthorization, noteController.getArchiveNotesList);

//router to add color
router.put('/colorNotes', userAuthorization, noteController.colorNotes);


export default router;