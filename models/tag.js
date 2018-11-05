import mongoose from 'mongoose'

var tagSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String
  }
});

var Tag = mongoose.model('tag', tagSchema);
export default Tag;
