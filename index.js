const MongoClient = require('mongodb').MongoClient; // act as a client for the mongol server
const assert = require('assert').strict;
const dboper = require('./operations'); // dboper - database operations


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
        console.log('Dropped Collection:', result);

        

        //INSERT the document into this collection.
        // Remember: calling a function - you are actually writing the code inside it // 
        //defining that function- this is function will do when it's called.
        dboper.insertDocument(db, { name: "Breadcrumb Trail Campground", description: "Test"},
        'campsites', result => {
        console.log('Insert Document:', result.ops);

        dboper.findDocuments(db, 'campsites', docs => {
            console.log('Found Documents:', docs);

            dboper.updateDocument(db, { name: "Breadcrumb Trail Campground" },
                { description: "Updated Test Description" }, 'campsites',
                result => {
                    console.log('Updated Document Count:', result.result.nModified);

                    dboper.findDocuments(db, 'campsites', docs => {
                        console.log('Found Documents:', docs);
                        
                        dboper.removeDocument(db, { name: "Breadcrumb Trail Campground" },
                            'campsites', result => {
                                console.log('Deleted Document Count:', result.deletedCount);

                                client.close();
                            }
                        );
                    });
                }
            );
        });
    });
 });
});