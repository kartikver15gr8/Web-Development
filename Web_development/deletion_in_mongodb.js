show dbs
use kartikkart
show collections

db.items.find({price:139000})

// deleting items from the MongoDB database
// Here the deleteOne will delete the first matching entry in our collections of elements or items in database
db.items.deleteOne({price:139000})

// And if we want to delete every matching entry that exist multiple times in our database then we can use the below query
db.items.deleteMany({price:139000})
