import mongoose from 'mongoose'
import tagSchema from 'tag'
import postSchema from 'post'

var userSchema = mongoose.Schema({
  userid: {
    type: String,
    required: true
  },

  passwd: {
    type: String,
    required: true
  },

  email: {
    type: String,
  },

  tags: [{
    type: tagSchema,
    required: true
  }],

  posts: [{
    type: postSchema,
  }],

  username: {
    type: String,
    required: true
  }
});


module.exports = mongoose.model('Post', postSchema);

