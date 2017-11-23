'use strict'

var mongoose = require('mongoose'),
  User = mongoose.model('User'),
  Activity = mongoose.model('Activity');

exports.dummies = function () {
  User.remove({}, function (err) {
    console.log('Truncate table User');
  });
  Activity.remove({}, function (err) {
    console.log('Truncate table Activity');
  });

  var activities = [
    new Activity({
      name: 'Zwemmen',
      description: 'We gaan eens gaan zwemmen. Hoera, feest, dansen dansen!'
    }),
    new Activity({
      name: 'Bosspel',
      description: 'Een spel in het bos'
    }),
    new Activity({
      name: 'Het kip',
      description: 'Mooi'
    }),
    new Activity({
      name: 'Nog een activiteit',
      description: 'Jaja, er komt er nog eentje bij'
    }),
    new Activity({
      name: 'Herman Van Veen',
      description: 'Als het ware een optreden van de enige echte Herman'
    }),
    new Activity({
      name: 'Moddertocht',
      description: 'Modder modder modder modder modder modder modder modder'
    }),
    new Activity({
      name: 'Activiteit',
      description: 'Lorem ipsum dolor en heel dienen bazaar'
    }),
    new Activity({
      name: 'Rick Ashtley',
      description: 'We\'re no strangers to love. You know the rules, and so do I'
    }),
    new Activity({
      name: 'End my sorrow',
      description: 'Wake me up inside'
    }),
    new Activity({
      name: 'Spicy meme night',
      description: 'Avondje alleen maar de beste van de beste memes'
    })
  ];

  Activity.collection.insert(activities);
}
