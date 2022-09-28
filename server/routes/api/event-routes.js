const router = require('express').Router();

const {
    getAllEvents,
    getSingleEvents,
    createEvents,
    updateEvents,
    deleteEvents,
    addReaction,
    deleteReaction,
} = require('../../controllers/event-controller');

router.route('/').get(getAllEvents).post(createEvents);

router.route('/:id').get(getSingleEvents).put(updateEvents).delete(deleteEvents);

router.route('/:commentsId/reactions').post(addReaction);

router.route('/:commentsId/reactions/:reactionId').delete(deleteReaction);

module.exports = router;