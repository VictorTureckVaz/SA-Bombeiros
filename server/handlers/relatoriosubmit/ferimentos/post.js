const db = require("./../../../lib/db");

const { SUBMIT16 } = require("./../../../database/queries");

module.exports = async (req, res) => {
    const {
        localF, lado, face, tipo, IdReport
    } = req.body;

    const promise = new Promise((resolve, reject) => {
        db.query(SUBMIT16(
            localF, lado, face, tipo, IdReport
            ), function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send({result});
        });
    });
};