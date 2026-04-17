const pool = require('../utils/database');

module.exports = class Products{
    static fetchData() {
        return pool.execute("select * from products");
    }

    static save(name, price) {
        return pool.execute(
            "INSERT INTO products (name, price) VALUES (?, ?)",
            [name, price]
        );
    }

    static delete(id) {
        return pool.execute(
            "DELETE FROM products WHERE id = ?",
            [id]
        );
    }

    static update(id, price) {
        return pool.execute(
            "UPDATE products SET price = ? WHERE id = ?",
            [price, id]
        );
    }
}