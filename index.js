const express = require('express');
const app = express();
const mysql = require('mysql2');

const pool = mysql.createPool({
    host:               'localhost',
    user:               'root',
    password:           '12345678',
    database:           'nodemysql',
    port:               3306,
    multipleStatements: true
})

pool.getConnection((err, connection) => {
    if (err) {
        console.log(err.sqlMessage || err.message);
    } else {

        let lastInsertedId = null;
        //insert an item and fetch that item info too
        pool.query("Insert into products(name, price) values ('mike', 10)", (err, rsh) => {
            if (err) {
                console.log(err.message);
            } else {
                console.log(lastInsertedId);
                lastInsertedId =rsh.insertId;
                    pool.query('select * from products where id = ?', [lastInsertedId],
                    (err, data) => {
                        if (err) {
                            console.log(err);
                        }
                        else {

                            console.log('First Insertion----', data);
                        }
                    })
            }
        })

        console.log(lastInsertedId);
        //update a record
        pool.query("update products set price= ? where id=?",[300, lastInsertedId],(err, rsh) => {
            if (err) {
                console.log(err);
            }
            else {
                console.log('Updated value ------', rsh);
            }
        })

        //delete a recrod
        pool.query("Delete from products where id=?",[lastInsertedId], (err, rsh) => {
            if (err) {
                console.log(err);
            }
            else {
                //select all
                pool.query('select * from products',
                    (err, data) => {
                        if (err) {
                            console.log(err);
                        }
                        else {
                            console.log('All Products-------', data);
                        }
                    })
            }
        })

        console.log("Connection established");
    }
})

app.listen(3000, () => {
    console.log(`Server is running...`)
})