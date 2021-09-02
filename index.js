const MongoClient = require('mongodb').MongoClient; // act as a client for the mongol server
const assert = require('assert').strict;

const url = 'mongodb://localhost:27017/'; // where mongodb can be accessed
const dbname = 'nucampsite'; // new campsite database

MongoClient.connect(url, { useUnifiedTopology: true }, (err, client) => { //client - const db = client.db(dbname); to access database

    assert.strictEqual(err, null);
    // it allow us to perform various checks and values. err is actual value.
    // null is expected value that we're checking against.

    console.log('Connected correctly to server');

    const db = client.db(dbname);

    //dropping a collection - delete or remove. serious operation
    db.dropCollection('campsites', (err, result) => { 
        assert.strictEqual(err, null);// assert that error is not null 

        //if that's TRUE continue on and console.log that we drop the collection and print the result
        console.log('Dropped Collection', result);

        //recreate the campsites collection and get access thru it
        const collection = db.collection('campsites');

        //INSERT the document into this collection
        collection.insertOne({name: "Breadcrumb Trail Campground", description: "Test"},

        //callback pattern with the error handling convention
        (err,result) => { 
            assert.strictEqual(err,null); // check if any error has occurred
            console.log('Insert Document:', result.ops); 

            //print to the console all the docs that are now in this collection
            collection.find().toArray((err, docs) => { 
                assert.strictEqual(err, null); // to check for an error
                console.log('Found Documents:', docs);

                client.close(); 
                // will immediately close the client's connection to the mongodb server
            });
        });
    });
});