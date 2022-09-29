const { Users, Comments, Events } = require("../models");

module.exports = {
    getComments(req, res) {
        Comments.find({})
            .then((comments) => res.json(comments))
            .catch((err) => res.status(500).json(err));
    },

    getSingleComments(req, res) {
        Comments.findOne({ _id: req.params.commentsId })
            .select("-__v")
            .then((comments) =>
                !comments
                ? res.status(404).json({ message: "Can't find comment with this ID" })
                : res.json(comments)
            )
            .catch((err) => res.status(500).json(err));
    },

    
    createComments(req, res) {
        Comments.create(req.body)
            .then(({ _id }) => {
                return Users.findOneAndUpdate(
                    { _id: req.body.usersId },
                    { $push: { comments: _id } },
                    { new: true }
                );
            })
            .then((comments) => 
                !thought
                ? res.status(404).json({ message: "No user found with this ID" })
                : res.json(comments)
            )
            .catch((err) => res.status(500).json(err));
    },

    updateComments(req, res) {
        Comments.findOneAndUpdate(
            { _id: req.params.commentsId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
            .then((user) =>
                !users
                    ? res.status(404).json({ message: "No comment found with this ID" })
                    : res.json(user)
                    )
            .catch((err) => res.status(500).json(err));
    },
    
    deleteComments(req, res) {
        Comments.findOneAndDelete({ _id: req.params.commentsId })
            .then((comments) =>
                !comments
                ? res.status(404).json({ message: "No comment found with this ID" })
                : Users.findOneAndUpdate(
                    { comments: req.params.commentsId},
                    { $pull: { comments: req.params.commentsId } },
                    { new: true }
                )
            )
            .then((users) =>
                !users
                    ? res.status(404).json({ message: "No comment found with this ID" })
                    : res.json({ message: "Comment successfully deleted" })
            )
            .catch((err) => res.status(500).json(err));
    }
}