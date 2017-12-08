'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');
var jwt = require('jsonwebtoken');
var datejs = require('date.js');


var UserSchema = new Schema({
  username: {
    type: String,
    lowercase: true,
    unique: true,
    required: true
  },
  hash: String,
  salt: String,
  role: {
    type: String,
    enum: ['leader', 'member'],
    default: 'member'
  },
  firstname: {
    type: String,
    required: true
  },
  lastname: {
    type: String,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  phoneNumber: {
    type: String,
    required: true
  },
  birthday: {
    type: Date,
    required: true
  }
}, {
  timestamps: true
});

UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(32).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('hex');
}

UserSchema.methods.validPassword = function (password) {
  let hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('hex');
  return this.hash === hash;
}

UserSchema.methods.generateJWT = function () {
  var today = new Date();
  var exp = datejs('in 2 weeks');
  return jwt.sign({
    _id: this._id,
    username: this.username,
    exp: parseInt(exp.getTime() / 1000)
  }, process.env.NUCLEAR_LAUNCH_CODES);
}

module.exports = mongoose.model('User', UserSchema);
