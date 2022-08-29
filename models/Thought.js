const { Schema, model } = require('mongoose');
const moment = require('moment');

const Reaction = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            maxlength: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now,
            //from Moment
            get: (createdAtVal) => moment(createdAtVal).format('MMM DD, YYYY [at] hh:mm a'),
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [Reaction],
        timestamps: true,
        toJSON: {
            virtuals: true,
        },
        id: false,
    });

//Create a virtual called reactionCount that retrieves the length of the thought's reactions array field on query.
thoughtSchema.virtual('reactionCount').get(function () {
    return this.reactions.length;
});

// Create the Thoughts model using the Thoughts Schema
const Thoughts = model('Thought', thoughtSchema);

//Export module
module.exports = Thoughts;