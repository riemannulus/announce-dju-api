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

tagSchema.statics.findOneByTagId = function (_id) {
    return this.find({_id: _id});
};

tagSchema.statics.findOneByTagName = function(name) {
    return this.find({name: name});
}

tagSchema.statics.updateByTagId = function (_id, payload) {
  // { new: true }: return the modified document rather than the original. defaults to false
    return this.findOneAndUpdate({_id: _id}, payload, { new: true });
};

tagSchema.statics.deleteByTagId = function (_id) {
    return this.remove({ _id });
};

module.exports = tagSchema;
