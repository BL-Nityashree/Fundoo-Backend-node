import { string } from "@hapi/joi";
import { Schema, model } from "mongoose";

const noteSchema = new Schema({
    title: {
        type: String,
        required: true,
    },
    description: {
        type: String,
        required: true,
    },
    color: {
        type: String,
    },
    isArchived: {
        type: Boolean,

    },
    isDeleted: {
        type: Boolean,

    },
    UserId: {
        type: String
    },
    noteId: {
        type: String
    }
},
    {
        timestamps: true
    }

);

export default model('Note', noteSchema)