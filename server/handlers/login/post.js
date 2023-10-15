const db = require("./../../lib/db");
const { GET_BOMBEIRO } = require("./../../database/queries");

module.exports = async (req, res) => {
    console.log(req.body);
    
    const user = req.body.user;
    const pass = req.body.pass;

    const promise = new Promise((resolve, reject) => {
        db.query(GET_BOMBEIRO(user, user), function(err, result) {
            if (err) throw err;
            const bombeiro = result[0];
            if (!bombeiro) resolve("NoBombeiro");
            resolve(bombeiro);
        });
    });

    const result = await promise;

    if (result === "NoBombeiro") return res.send("N encontramo o homi");

    if (result.senha !== pass) return res.send("N deu boa...");

    return res.send("Logado");
};
