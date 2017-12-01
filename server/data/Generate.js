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
      title: 'Zwemmen',
      description: 'We gaan eens gaan zwemmen. Hoera, feest, dansen dansen!'
    }),
    new Activity({
      title: 'Bosspel',
      description: 'Een spel in het bos'
    }),
    new Activity({
      title: 'Het kip',
      description: 'Mooi'
    }),
    new Activity({
      title: 'Nog een activiteit',
      description: 'Jaja, er komt er nog eentje bij'
    }),
    new Activity({
      title: 'Herman Van Veen',
      description: 'Als het ware een optreden van de enige echte Herman'
    }),
    new Activity({
      title: 'Moddertocht',
      description: 'Modder modder modder modder modder modder modder modder'
    }),
    new Activity({
      title: 'Activiteit',
      description: 'Lorem ipsum dolor en heel dienen bazaar'
    }),
    new Activity({
      title: 'Rick Ashtley',
      description: 'We\'re no strangers to love. You know the rules, and so do I'
    }),
    new Activity({
      title: 'End my sorrow',
      description: 'Wake me up inside'
    }),
    new Activity({
      title: 'Spicy meme night',
      description: 'Avondje alleen maar de beste van de beste memes'
    })
  ];

  var users = [];
  var user1 = new User({
    firstname: 'Nicolas',
    lastname: 'Loots',
    username: 'nicolas.loots@outlook.be',
    role: 'leader'
  });
  user1.setPassword('HermanVanVeen');
  users.push(user1);

  var user2 = new User({
    firstname: 'Jef',
    lastname: 'Malfliet',
    username: 'jef.malfliet@kljhamme.be',
    role: 'member'
  });
  user2.setPassword('HetKipMooi');
  users.push(user2);

  Activity.collection.insert(activities);
  User.collection.insert(users);
}
