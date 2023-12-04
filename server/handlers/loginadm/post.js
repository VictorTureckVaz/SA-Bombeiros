require("dotenv").config({ path: "./../../.env" });
const jwt = require("jsonwebtoken");
const db = require("./../../lib/db");
const { LOGINADM } = require("./../../database/queries");

module.exports = async (req, res) => {
    console.log(req.body);
    
    const user = req.body.user;
    const pass = req.body.pass;

    const promise = new Promise((resolve, reject) => {
        db.query(LOGINADM(user, user), function(err, result) {
            if (err) throw err;
            const bombeiro = result[0];
            if (!bombeiro) resolve("NoBombeiro");
            resolve(bombeiro);
        });
    });

    const result = await promise;

    const bombeiroid = result.id_bombeiro;
    const bombeiroNome = result.nome;
    const bombeiroSobrenome = result.sobrenome;
    const bombeiroEmail = result.email;

    if (result === "NoBombeiro") return res.send({ error: "N encontramo o homi" });

    if (result.senha !== pass) return res.send({ error: "N deu boa..." });

    const token = jwt.sign({
        _id: bombeiroid
    }, "cecedilha", {
        expiresIn: "1000m"
    });
    console.log(
        "token: ", token, 
        "\nBombeiroId: ", bombeiroid, 
        "\nBombeiroNome", bombeiroNome, 
        "\nBombeiroSobrenome", bombeiroSobrenome, 
        "\nBombeiroEmail", bombeiroEmail
    ); 
    return res.send({ token, bombeiroid, bombeiroNome, bombeiroSobrenome, bombeiroEmail });
};
