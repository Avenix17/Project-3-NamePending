const {Schema, model, Types} = require('mongoose');

const reactionSchema = new Schema ({
    reactionId: {
        type: Schema.Types.ObjectId,
        default: () => new Types.ObjectId(),
    },
    reactionLike: {
        type: Boolean,
        default: false
    },
    reactionDislike: {
        type: Boolean,
        default: false
    },
}, 
    {
        toJSON: {
            getters: true,
            virtuals: true
        },
    }
);

const eventsSchema = new Schema ({
    eventname: {
        type: String,
        required: true,
        trim: true
    },

    description: {
        type: String,
        required: true,
    },

    date: {
        
    },
    reactions: [reactionSchema]
},
    {
        toJSON: {
            getters: true
        },
    },
);

const Events = model('Events', eventsSchema);

module.exports = Events;