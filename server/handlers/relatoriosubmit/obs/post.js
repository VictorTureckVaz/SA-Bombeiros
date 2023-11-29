const db = require("./../../../lib/db");

const { SUBMIT15 } = require("./../../../database/queries");

module.exports = async (req, res) => {
    const {
        obs
    } = req.body;

    const promise = new Promise((resolve, reject) => {
        db.query(SUBMIT15(
            obs
            ), function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send({result});
        });
    });
};