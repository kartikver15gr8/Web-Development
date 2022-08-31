// Inserting data in mongodb

// use kartikkart
db.items.insertOne({name:"Iphone13promax", price:139000,rating:4.7, qty:5, bought:5})

db.items.insertMany([{name:"Iphone13promax", price:139000,rating:4.7, qty:5, bought:5},{name:"macbook pro", price:239000,rating:4.8, qty:2, bought:2},{name:"ipad pro", price:99000,rating:4.8, qty:1, bought:1},{name:"apple watch series 7", price:53000,rating:4.3, qty:2, bought:2},{name:"apple airtags", price:10999,rating:4.7, qty:4, bought:4},{name:"apple pencil", price:9999,rating:4.2, qty:1, bought:1}])