const db = require("./../../lib/db");
const { HISTORICO } = require("./../../database/queries");

module.exports = async (req, res) => {
     console.log("id do bombeiro:", req.user._id);
    const promise = new Promise((resolve, reject) => {
        db.query(HISTORICO(req.user._id), function(err, result) {
            if (err) throw err;
            const ocorrencias = result;
            resolve(ocorrencias);
        });
    });


    const result = await promise;


    return res.send(result);
};
