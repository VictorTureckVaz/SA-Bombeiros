require("dotenv").config({ path: "./../../.env" });
const jwt = require("jsonwebtoken");
const db = require("./../../lib/db");
const { NULLQry } = require("./../../database/queries");

module.exports = async (req, res) => {
    const promise = new Promise((resolve, reject) => {
        db.query(NULLQry(), function(err, { insertId }) {
            if (err) throw err;
            return res.send({ insertId });
            // const insertIdValue = result.insertId;
        });
    });
};