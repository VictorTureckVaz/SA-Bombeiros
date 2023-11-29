// const db = require("./../../../lib/db");

// const { SUBMIT6 } = require("./../../../database/queries");

// module.exports = async (req, res) => {
//     const {
//         presMax, presMin, pulso, respiracao, sat, temperatura, hgt, perfusaoValue, normalidade
//     } = req.body;

//     const promise = new Promise((resolve, reject) => {
//         db.query(SUBMIT6(
//             presMax, presMin, pulso, respiracao, sat, temperatura, hgt, perfusaoValue, normalidade
//             ), function(err, result) {
//             if (err) throw err;
//             console.log(result);
//             res.send({result});
//         });
//     });
// };