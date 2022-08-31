
// So basically the query that we need to update only one item in our database is given below

db.items.updateOne({name:"apple airpods max"},{$set: {price: 54999}})   // In this query there are two parameters, first parameter is the identifier that identifies the item that is to be updated, and second parameter is that which is to be updated 


// If we want to update more than one item in our database then we will use the following query that is given below

db.items.updateMany({name:"apple watch series 7"}, {$set:{price:49990, rating:4.9}})

db.items.updateMany({name:"Iphone13promax"}, {$set:{name:"Iphone 13 pro max", price:129000, rating: 4.9}})