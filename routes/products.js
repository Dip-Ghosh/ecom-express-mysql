const express = require("express");
const router = express.Router();
const database = require('../utils/database') 

router.get('/getData', (req, res) => {
    database.execute('select * from products', (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data);
        }
    })
})

router.post('/postData', (req, res) => {
    database.getConnection((err, connection) => {
        if (err) {
            res.send(err.message).status(500)
        } else {
            database.execute("Insert into products(name, price) values ('mike', 10)", (err, data) => {
                if (err) {
                    res.status(500).send(err)
                } else {
                    res.status(201).send(data)
                }
            })
        }
    })
})

router.delete('/delete', (req, res) => {
    database.execute("Delete from products where id=5", (err, data) => {
        if (err) {
            res.status(500).send(err)
        } else {
            res.status(200).send(data);
        }
    })
})

router.put('/update', (req, res) => {

    database.getConnection((err, connection) => {
        if (err) {
            res.send(err.message).status(500)
        } else {
            database.execute("update products set price= ? where id=?",[300, 4], (err, data) => {
                if (err) {
                    res.status(500).send(err)
                } else {
                    res.status(200).send(data);
                }
            })
        }
    })

})

module.exports = router;