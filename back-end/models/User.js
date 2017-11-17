'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;
var crypto = require('crypto');

var UserSchema = new Schema({
  email: {
    type: String,
    lowercase: true,
    unique: true,
    required: true,
    validate: {
      validator: function (v) {
        return '/^[a-z0-9_\-\.]{2,}@[a-z0-9_\-\.]{2,}\.[a-z]{2,}$/i'.test(v);
      },
      message: 'Ongeldig e-mailadres'
    }
  },
  hash: String,
  salt: String,
  role: {
    type: String,
    enum: ['leider', 'lid', 'admin']
  },
  address: {
    street: String,
    number: String,
    postalCode: Number,
    city: String
  },
  phoneNumber: {
    type: String,
    validate: {
      vaildator: function (v) {
        return '/[0-9]{10}/'.test(v);
      }
    }
  },
  birthday: {
    type: Date,
    required: true
  }
});

UserSchema.methods.setPassword = function (password) {
  this.salt = crypto.randomBytes(32).toString('hex');
  this.hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('hex');
}

UserSchema.methods.validPassword = function (password) {
  let hash = crypto.pbkdf2Sync(password, this.salt, 10000, 64, 'sha512').toString('hex');
  return this.hash === hash;
}

module.exports = mongoose.model('User', UserSchema);
