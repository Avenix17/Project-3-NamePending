const mongoose = require('mongoose');

const { Schema, model } = mongoose;
const bcrypt = require('bcrypt');

const usersSchema = new Schema ({
    username: {
        type: String,
        unique: true,
        required: true,
        trim: true,
    },
    email: {
        type: String,
        required: true,
        unique: true,
    },
    password: {
        type: String,
        required: true,
        minlength: 5,
    },
    comments: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Comments',
        },
    ],
    events: [
        {
            type: Schema.Types.ObjectId,
            ref: 'Events'
        },
    ],
});
// Set up pre-save middleware to create password
usersSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
      const saltRounds = 10;
      this.password = await bcrypt.hash(this.password, saltRounds);
    }
  
    next();
  });
  
  // Compare the incoming password with the hashed password
  usersSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
  };

  const Users = model('Users', usersSchema);

  module.exports = Users;

