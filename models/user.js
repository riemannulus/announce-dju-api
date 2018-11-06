import mongoose from 'mongoose'
import userSchema from 'tag'
import userSchema from 'post'

var userSchema = mongoose.Schema({
  userid: {
    type: String,
    required: true
  },

  password: {
    type: String,
    required: true
  },

  email: {
    type: String,
  },

  tags: [{
    type: userSchema,
    required: true
  }],

  posts: [{
    type: userSchema,
  }],

  username: {
    type: String,
    required: true
  }
});
userSchema.statics.create = function (payload) {
  // this === Model
  const user = new this(payload);
  // return promise
  return user.save();
};

userSchema.statics.findAll = function () {
    return this.find({});
};

userSchema.statics.findOneByUserId = function (_id) {
    return this.find({_id});
};

userSchema.statics.updateByUserId = function (_id, payload) {
  // { new: true }: return the modified document rather than the original. defaults to false
    return this.findOneAndUpdate({_id}, payload, { new: true });
};

userSchema.statics.deleteByUserId = function (_id) {
    return this.remove({ _id });
};

module.exports = mongoose.model('User', userSchema);

