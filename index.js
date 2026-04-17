const express = require('express');
const router = require('./routes/products')
const app = express();

app.use('/', router);


// pool.getConnection((err, connection) => {
//     if (err) {
//         console.log(err.sqlMessage || err.message);
//     } else {
//
//         let lastInsertedId = null;
//         //insert an item and fetch that item info too
//         pool.execute("Insert into products(name, price) values ('mike', 10)", (err, rsh) => {
//             if (err) {
//                 console.log(err.message);
//             } else {
//                 console.log(lastInsertedId);
//                 lastInsertedId =rsh.insertId;
//                     pool.execute('select * from products where id = ?', [lastInsertedId],
//                     (err, data) => {
//                         if (err) {
//                             console.log(err);
//                         }
//                         else {
//
//                             console.log('First Insertion----', data);
//                         }
//                     })
//             }
//         })
//
//         console.log(lastInsertedId);
//         //update a record
//         pool.execute("update products set price= ? where id=?",[300, lastInsertedId],(err, rsh) => {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 console.log('Updated value ------', rsh);
//             }
//         })
//
//         //delete a recrod
//         pool.execute("Delete from products where id=?",[lastInsertedId], (err, rsh) => {
//             if (err) {
//                 console.log(err);
//             }
//             else {
//                 //select all
//                 pool.execute('select * from products',
//                     (err, data) => {Delete from products where id=?",[lastInsertedId]
//                         if (err) {
//                             console.log(err);
//                         }
//                         else {
//                             console.log('All Products-------', data);
//                         }
//                     })
//             }
//         })
//
//         console.log("Connection established");
//     }
// })


app.listen(3000, () => {
    console.log(`Server is running...`)
})