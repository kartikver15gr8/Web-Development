// searching for data in MongoDB
use kartikkart

// This query will return all the objects with rating 4.7
db.items.find({rating:4.7})

// If i want to get all the elements of database having rating greater than or equal to "4.7" then i will use the below query in which "gte" stands for "greater than equal to"
db.items.find({rating:{$gte: 4.7}})

// If i want to get all the elements of database having rating lesser than or equal to "4.7" then i will use the below query in which "gte" stands for "lesser than equal to"
db.items.find({rating:{$lte: 4.7}})

// Using "And" opertator to give more than one parameter for finding elements in database according to our desire
db.items.find({rating:{$gt: 4.0}, price:{$gt:100000}})


// Using "OR" operator in query
db.items.find({$or:[{price:{$gt:100000}},{rating:{$gt: 4.0}}]})