import HttpStatus from 'http-status-codes';
import * as noteService from '../services/note.service'


/**
 * Controller to create a new user
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const addNote = async (req, res, next) => {
  try {
      let UserId = req.body.data.id;
    req.body.UserId = req.body.data.id;
     console.log("req body=========", req.body);
    const data = await noteService.addNoteService(req.body);
    res.status(HttpStatus.CREATED).json({
      code: HttpStatus.CREATED,
      data: data,
      message: 'Note added successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
* Controller to get all notes
* @param  {object} req - request object
* @param {object} res - response object
* @param {Function} next
*/
export const getAllNotes = async (req, res, next) => {
  try {
    // console.log("req body get all notes=========", req.body.data.id);
    const data = await noteService.getAllNotesService(req.body.data.id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All notes fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
* Controller to update a note
* @param  {object} req - request object
* @param {object} res - response object
* @param {Function} next
*/
export const updateNotes = async (req, res, next) => {
  try {
    const data = await noteService.updateNoteService(req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'Note updated successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get a single note
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getNote = async (req, res, next) => {
  // console.log("param id", req);
  try {
    const data = await noteService.getNoteService(req.params._noteId, req.body.data.id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Note fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
* Controller to trash a note
* @param  {object} req - request object
* @param {object} res - response object
* @param {Function} next
*/
export const trashNote = async (req, res, next) => {
  try {
    // console.log("trash ====", req.body.isDeleted);
    if (req.body.isDeleted === "true") {
      const data = await noteService.trashNoteService(req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note trashed successfully'
      });
    } else {
      const data = await noteService.trashNoteService(req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note untrashed successfully'
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
* Controller to archive a note
* @param  {object} req - request object
* @param {object} res - response object
* @param {Function} next
*/
export const archiveNote = async (req, res, next) => {
  try {
    if (req.body.isArchived === "true") {
      const data = await noteService.archiveNoteService(req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note archived successfully'
      });
    } else {
      const data = await noteService.archiveNoteService(req.body);
      res.status(HttpStatus.OK).json({
        code: HttpStatus.OK,
        data: data,
        message: 'Note unarchived successfully'
      });
    }
  } catch (error) {
    next(error);
  }
};

/**
* Controller to delete a note
* @param  {object} req - request object
* @param {object} res - response object
* @param {Function} next
*/
export const deleteNote = async (req, res, next) => {
  try {
    // console.log("req delete====", req.body);
    const data = await noteService.deleteNoteService(req.body);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'Note deleted successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
* Controller to get trash notes list
* @param  {object} req - request object
* @param {object} res - response object
* @param {Function} next
*/
export const getTrashNotesList = async (req, res, next) => {
  try {
    // console.log("req body get all notes=========", req.body.data.id);
    const data = await noteService.getTrashNotesService(req.body.data.id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All trashed notes fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
 * Controller to get archive notes list
 * @param  {object} req - request object
 * @param {object} res - response object
 * @param {Function} next
 */
export const getArchiveNotesList = async (req, res, next) => {
  try {
    // console.log("req body get all notes=========", req.body.data.id);
    const data = await noteService.getArchiveNotesService(req.body.data.id);
    res.status(HttpStatus.OK).json({
      code: HttpStatus.OK,
      data: data,
      message: 'All archived notes fetched successfully'
    });
  } catch (error) {
    next(error);
  }
};

/**
* Controller to color notes 
* @param  {object} req - request object
* @param {object} res - response object
* @param {Function} next
*/
export const colorNotes = async (req, res, next) => {
  try {
    // console.log("req body get all notes=========", req.body.data.id);
    const data = await noteService.colorNotesService(req.body);
    res.status(HttpStatus.ACCEPTED).json({
      code: HttpStatus.ACCEPTED,
      data: data,
      message: 'color updated successfully'
    });
  } catch (error) {
    next(error);
  }
};