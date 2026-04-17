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

        //select all
        pool.query('select * from products',
            (err, data) => {
                if (err) console.log(err);
                else console.log(data);
            })

        //insert an item and fetch that item info too
        pool.query("Insert into products(name, price) values ('mike', 10)", (err, rsh) => {
            if (err) {
                console.log(err.message);
            } else {
                pool.query('select * from products where id = ?', [rsh.insertId],
                    (err, data) => {
                        if (err) console.log(err);
                        else console.log(data);
                    })
            }
        })

        console.log("Connection established");
    }
})

app.listen(3000, () => {
    console.log(`Server is running...`)
})