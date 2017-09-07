const {MongoClient, ObjectID} = require('mongodb'); //Same as: const MongoClient = require('mongodb').MongoClient;

MongoClient.connect('mongodb://localhost:27017/TodoApp', (err, db) => {
  if (err) {
    return console.log('Unable to connect to MongoDB server');
  }
  console.log('Connected to MongoDB server');

  /*db.collection('Todos').find({
    _id: new ObjectID('59b1a63516f2d07da8772e33')
  }).toArray().then((docs) => {
    console.log('Todos');
    console.log(JSON.stringify(docs, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch todos', err);
  });

  db.collection('Todos').find().count().then((count) => {
    console.log(`Todos count: ${count}`);
  }, (err) => {
    console.log('Unable to fetch todos count', err);
  }); */

  db.collection('Users').find({name: "Manuel"}).toArray().then((users) => {
    console.log('Users called Manuel:');
    console.log(JSON.stringify(users, undefined, 2));
  }, (err) => {
    console.log('Unable to fetch users');
  });

  db.close();
});