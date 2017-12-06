'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String
  },
  organisedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: Date,
    default: Date.now
  },
  location: {
    type: String,
    default: 'KLJ lokaal'
  },
  image: {
    data: Buffer,
    fileType: String
  },
  attendees: [{
    type: Schema.Types.ObjectId,
    ref: 'User'
  }]
});

module.exports = mongoose.model('Activity', ActivitySchema);
