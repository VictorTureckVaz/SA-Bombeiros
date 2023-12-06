require("dotenv").config({ path: "./../../.env" });
const jwt = require("jsonwebtoken");
const db = require("./../../lib/db");
const { NULLQry } = require("./../../database/queries");

module.exports = async (req, res) => {
    const id = req.user._id;
    console.log("bateu no null submit");
    const promise = new Promise((resolve, reject) => {
        db.query(NULLQry(id), function(err, result) {
            if (err) throw err;
            console.log(result.insertId);
            res.send({ id: result.insertId });
        });
    });
};
