import Note from '../models/note.model';
import { client } from '../config/redis';

//add a note
export const addNoteService = async (body) => {
    // console.log("note body =========", body);
    await client.del('getData');
    const data = await Note.create(body);
    return data;
}

//get all notes
export const getAllNotesService = async (id) => {
    // console.log("req body get all notes=========", id);
    const data = await Note.find({ UserId: id, isDeleted: false, isArchived: false });
    await client.set('getData',JSON.stringify(data));
    return data;
}

//update a note
export const updateNoteService = async (body) => {
    const _id = body.noteId;
    const UserId = body.data.id;
    let bodydata = {
        "title": body.title,
        "description": body.description
    }
    //    const notedata =  await Note.find({UserId: body.data.id});
    // console.log("note data ++++", body);
    const data = await Note.findByIdAndUpdate(
        {
            _id, UserId
        },
        bodydata,
        {
            new: true
        }
    );
    return data;
}

//get single note
export const getNoteService = async (id, UserId) => {
   
    const data = await Note.findById({ _id: id, UserId: UserId });
    // console.log("response data", data, id)
    return data
}

//trash single note
export const trashNoteService = async (body) => {
    const _id = body.noteId;
    const UserId = body.data.id;
    const bodydata = {
        "isDeleted": body.isDeleted
    }
    const data = await Note.findByIdAndUpdate(
        {
            _id, UserId
        },

        bodydata,
        {
            new: true
        }
    );
    return data
}

//archive single note
export const archiveNoteService = async (body) => {
    const _id = body.noteId;
    const UserId = body.data.id;
    const bodydata = {
        "isArchived": body.isArchived
    }
    const data = await Note.findByIdAndUpdate(
        {
            _id, UserId
        },

        bodydata,
        {
            new: true
        }
    );
    return data
}

//delete single note
export const deleteNoteService = async (body) => {
    const data = await Note.findByIdAndDelete({ _id: body.noteId, UserId: body.data.id });
    return data
}

//get trash notes list
export const getTrashNotesService = async (id) => {
    const data = await Note.find({ UserId: id, isDeleted: true });
    return data;
}

//get archive notes list
export const getArchiveNotesService = async (id) => {
    const data = await Note.find({ UserId: id, isArchived: true });
    return data;
}

//update color 
export const colorNotesService = async (body) => {
    const _id = body.noteId;
    const UserId = body.data.id;
    // let bodydata = {
    //     "color": body.color,
    // }
    //    const notedata =  await Note.find({UserId: body.data.id});
    // console.log("note data ++++", body);
    const data = await Note.findByIdAndUpdate(
        {
            _id:body.noteId, UserId:body.data.id
        },
        {
            $set:
                {"color": body.color}
        },
        {
            new: true
        }
    );
    // data,{
    //     upsert:true
    // }
   
return data;
}