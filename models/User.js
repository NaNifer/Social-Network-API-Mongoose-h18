const { Schema, model } = require('mongoose');

// Creates the blueprint for our collection
const userSchema = new Schema({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        unique: true,
        required: true,
        validate: [validateEmail, "Please fill a valid email address"],
        match: [
            /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3})+$/,
            "Please fill a valid email address",
        ],
    },
    thoughts: [
       { type: Schema.Types.ObjectId,
        ref: 'Thought',
        default: [],
    },
    ],
    friends: [
        {
            type: Schema.Types.ObjectId,
            ref: 'User',
            default: [],
        }
    ],
    timestamps: true,
    toJSON: {
        virtuals: true,
    },
    id: false,
});