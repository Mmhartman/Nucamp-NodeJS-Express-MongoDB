


// CRUD OPERATIONS 

exports.insertDocument = (db, document, collection, ) => {
    const coll = db.collection(collection);
    return coll.insertOne(document);
};

//we get access to this collection from mongodb into this const called coll
exports.findDocuments = (db, collection, ) => {
    const coll = db.collection(collection);
    return coll.find().toArray();
};


exports.removeDocument = (db, document, collection, ) => {
    const coll = db.collection(collection);
    return coll.deleteOne(document);
};

exports.updateDocument = (db, document, update, collection, ) => {
    const coll = db.collection(collection);
    return coll.updateOne(document);
};