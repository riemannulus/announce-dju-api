const mongoose = require('mongoose');
var tag = require('./tag');

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
    type: tag,
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
},{ timestamp: true }
);

postSchema.statics.create = function (payload) {
  // this === Model
  const todo = new this(payload);
  // return promise
  return todo.save();
};

postSchema.statics.findAll = function () {
    return this.find({});
};

postSchema.statics.findOneByPostId = function (_id) {
    return this.find({_id});
};

postSchema.statics.updateByPostId = function (_id, payload) {
  // { new: true }: return the modified document rather than the original. defaults to false
    return this.findOneAndUpdate({_id}, payload, { new: true });
};

postSchema.statics.deleteByPostId = function (_id) {
    return this.remove({ _id });
};

module.exports = mongoose.model('Post', postSchema);
