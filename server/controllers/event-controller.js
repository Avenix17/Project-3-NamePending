const {Events, Users} = require('../models');

module.exports = {
    //get all the events 
    getAllEvents(req, res) {
        Events.find({})
            .populate({
                path: 'reactions',
                select: '-__v'
            })
            .select('-__v')
            .then((eventsDB) => res.json(eventsDB))
            .catch((err) => res.status(500).json(err));
    },
    //get single event
    getSingleEvents(req, res) {
        Events.findOne({_id: req.params.id})
        .populate({
            path: 'reactions',
            select: '-__v'
        })
        .select('-__v')
        .then((eventsDB) =>
            !eventsDB
                ? res.status(404).json({message: 'No event with that id'})
                : res.json(eventsDB)
        )
        .catch((err) => res.status(500).json(err));
    },
    //create event
    createEvents(req, res) {
        Events.create(req.body)
            .then(({username, _id}) => {
                return Users.findOneAndUpdate(
                    {username: username},
                    {$push: {events: _id}},
                    {new: true, runValidators: true}
                );
            })
        .then((eventsDB) => res.json(eventsDB))
        .catch((err) => {
            console.log(err);
            return res.status(500).json(err);
        });
    },
    // update events by id
    updateEvents (req, res) {
        Events.findOneAndUpdate(
           {_id: req.params.id},
           {$set: req.body},
           {runValidators: true, new: true} 
        )
        .then((eventsDB) =>
            !eventsDB
                ? res.status(404).json({message: 'No event with that id'})
                : res.json(eventsDB)
                )
                .catch((err) => res.status(500).json(err));
                
    },
    //delete event
    // remove event id from users events fields
    deleteEvents (req, res) {
        Events.findOneAndDelete({_id: req.params.id})
            .then(({username}) => {
                return Users.findOneAndUpdate(
                    {username: username},
                    {$pull: {events: req.params.id}},
                    {new: true}
                )
            })
            .then(userDB => {
                if (userDB) {
                    res.status(404).json({message:'No user found with that id'});
                    return;
                }
                res.json(userDB);
            })
            .catch(err => {
                console.log(err);
                res.status(400).json(err);
            })
    },
    //add reaction
    addReaction (req, res) {
        Events.findOneAndUpdate(
            { _id: req.params.eventsId },
            { $addToSet: { reactions: req.body }},
            { runValidators: true, new: true }
          )
            .then((eventsDB) =>
              !eventsDB
                ? res.status(404).json({ message: 'NO THOUGHT FOUND WITH THAT ID'})
                : res.json(eventsDB)
            )
            .catch((err) => res.status(500).json(err));
    },
    // delete reaction
    deleteReaction(req, res) {
        Events.findOneAndUpdate(
          { _id: req.params.eventsId },
          { $pull: { reactions: { reactionId: req.params.reactionId }}},
          { runValidators: true, new: true }
        )
          .then((eventsDB) =>
            !eventsDB
              ? res.status(404).json({ message: 'NO THOUGHT FOUND WITH THAT ID' })
              : res.json(eventsDB)
          )
          .catch((err) => res.status(500).json(err));
      },
};