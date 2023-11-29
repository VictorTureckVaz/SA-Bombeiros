const db = require("./../../../lib/db");

const { SUBMIT4 } = require("./../../../database/queries");

module.exports = async (req, res) => {
    const {
        decisao, transporteValue, socorristaA, socorristaB, socorristaC, motorista, demandante
    } = req.body;

    const promise = new Promise((resolve, reject) => {
        db.query(SUBMIT4(
            decisao, transporteValue, socorristaA, socorristaB, socorristaC, motorista, demandante
            ), function(err, result) {
            if (err) throw err;
            console.log(result);
            res.send({result});
        });
    });
};