//const MongoClient = require('mongodb').MongoClient;
const {MongoClient, ObjectID} = require('mongodb');

MongoClient.connect('mongodb://localhost:27017/ToDoApp', (err, db) => {
	if (err) {
		return console.log('Unable to connect to MongoDB server.');
	}
	console.log('Connected.');

	// db.collection('ToDos').find({
	// 		_id: new ObjectID('58d4290267d64518bc47da58')
	// 	}).toArray().then((docs) => {
	// 		console.log('ToDos');
	// 		console.log(JSON.stringify(docs, undefined, 2));
	// }, (err) => {
	// 	console.log('Unable to fetch todos.', err);
	// });

	db.collection('ToDos').find().count().then((count) => {
			console.log(`ToDos count: ${count}`);
	}, (err) => {
		console.log('Unable to fetch todos.', err);
	});

	//db.close();
});