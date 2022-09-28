const { Users, Comments, Events } = require('../models');

module.exports = {
    getAllUsers(req, res) {
        Users.find({})
            .then((users) => res.json(users))
            .catch((err) => res.status(500).json(err));
    },

    getUsersById(req, res) {
        Users.findOne({ _id: req.params.usersId })
        .populate("comments")
        .populate("events")
        .select("-__v")
        .then((users) =>
            !users
                ? res.status(404).json({ message: "Can't find User with this ID" })
                : res.json(users)
                )
        .catch((err) => res.status(500).json(err));
    },

    createUsers(req, res) {
        Users.create(req.body)
        .then((users) => res.json(users))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },

    updateUsers(req, res) {
        Users.findOneAndUpdate(
            { _id: req.params.usersId },
            { $set: req.body },
            { runValidators: true, new: true }
        )
        .then((users) => 
            !users
                ? res.status(404).json({ message: "Can't find user with this ID"}) 
                : res.json(users)
                )
        .catch((err) => res.status(500).json(err));
    },

    deleteUsers(req, res) {
        Users.findOneAndDelete({ _id: req.params.usersId })
            .then((users) =>
                !users
                    ? res.status(404).json({ message: "No user found" })
                    : Comments.deleteMany({ _id: { $in: users.comments } }),
                    Events.deleteMany({ _id: { $in: users.events } })
            )
            .then(() => res.json({ message: "User successfully deleted" }))
            .catch((err) => res.status(500).json(err));
    }
}


    
    
    