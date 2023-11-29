const db = require("./../../../lib/db");

const { SUBMIT8 } =require("./../../../database/queries");

module.exports = async (req, res) => {
    const {
        psico, resp, diabetes, outrosProblemas
    } = req.body;

    const promise = new Promise((resolve, reject) => {
        db.query(SUBMIT8(
            psico, resp, diabetes, outrosProblemas
            ), function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send({result});
        });
    });
};