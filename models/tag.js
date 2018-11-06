const mongoose = require('mongoose');

var tagSchema = mongoose.Schema({
  name: {
    type: String,
    required: true
  },

  description: {
    type: String
  }
});

tagSchema.statics.create = function (payload) {
  // this === Model
  const tag = new this(payload);
  // return promise
  return tag.save();
};

tagSchema.statics.findAll = function () {
    return this.find({});
};
module.exports = tagSchema;
