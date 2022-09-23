const {Schema, model, Types} = require('mongoose');

const commentsSchema = new Schema({
    
    commentText: {
        type: String,
        required: true,
        minLength: 1,
        maxLength: 280
    },

    createdAt: {
        type: Date,
        default: Date.now,
        get: (timeStamp) => timeStamp.toLocaleString()
    }, 

    username: {
        type: String, 
        required: true,
    },
    
    reactions: [reactionSchema],
},

{
    toJSON: {
        getters: true
    }
}
);


const Comments = model('Comments', commentsSchema);

module.exports = Comments;