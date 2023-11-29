require("dotenv").config({ path: "./../../.env" });
const jwt = require("jsonwebtoken");
const db = require("./../../lib/db");
const { LOGIN } = require("./../../database/queries");

module.exports = async (req, res) => {
    console.log(req.body);
    
    const user = req.body.user;
    const pass = req.body.pass;

    const promise = new Promise((resolve, reject) => {
        db.query(LOGIN(user, user), function(err, result) {
            if (err) throw err;
            const bombeiro = result[0];
            if (!bombeiro) resolve("NoBombeiro");
            resolve(bombeiro);
        });
    });

    const result = await promise;

    if (result === "NoBombeiro") return res.send({ error: "N encontramo o homi" });

    if (result.senha !== pass) return res.send({ error: "N deu boa..." });

    const token = jwt.sign({
        _id: result.id_bombeiro
    }, "cecedilha", {
        expiresIn: "1000m"
    });
    console.log(token); 
    return res.send({ token });
};
