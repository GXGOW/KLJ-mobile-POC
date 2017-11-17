'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var UserSchema = new Schema({
  email: {
    type: String,
    required: true,
    validate: {
      validator: function (v) {
        return '/^[a-z0-9_\-\.]{2,}@[a-z0-9_\-\.]{2,}\.[a-z]{2,}$/i'.test(v);
      },
      message: 'Ongeldig e-mailadres'
    }
  },
  password: {
    type: String,
    required: true
  },
  role: {
    type: String,
    enum: ['leider', 'lid', 'admin']
  },
  address: {
    street: {
      type: String
    },
    number: {
      type: String
    },
    postalCode: {
      type: Number
    },
    City: {
      type: String
    }
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

module.exports = mongoose.model('User', UserSchema);
