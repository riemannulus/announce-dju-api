import mongoose from 'mongoose'
import tagSchema from 'tag'

var postSchema = mongoose.Schema({
  title: {
    type: String,
    required: true
  },

  startDate: {
    type: String,
    required: true
  },

  endDate: {
    type: String,
    required: true
  },

  tags: [{
    type: tagSchema,
    required: true
  }],

  content: {
    type: String,
    required: true
  },

  authorName: {
    type: String,
    required: true
  }

});

var Post = mongoose.model('post', postSchema);
export default Post;
