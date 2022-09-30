const router = require('express').Router();

const {
    getComments,
    getSingleComments,
    createComments,
    updateComments,
    deleteComments
} = require ('../../controllers/comments-controller');

router.route('/').get(getComments).post(createComments);

router.route('/:id').get(getSingleComments).put(updateComments).delete(deleteComments);

module.exports = router;