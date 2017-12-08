'use strict'
var mongoose = require('mongoose');
var Schema = mongoose.Schema;

var ActivitySchema = new Schema({
  title: {
    type: String,
    required: true
  },
  description: {
    type: String,
    required: true
  },
  organisedBy: {
    type: Schema.Types.ObjectId,
    ref: 'User'
  },
  date: {
    type: Date,
    default: new Date(new Date().setDate(new Date().getDate()+1))
  },
  location: {
    type: String,
    default: 'KLJ lokaal',
  },
  image: {
    data: String,
    fileType: String
  },
  attendees: [{
    type: Schema.Types.ObjectId,
    ref: 'User',
    default: []
  }]
});

module.exports = mongoose.model('Activity', ActivitySchema);
