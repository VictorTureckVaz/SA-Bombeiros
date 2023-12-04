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
            const adm = result[0];
            if (!adm) resolve("NoADM");
            resolve(adm);
        });
    });

    const result = await promise;

    const ADMid = result.id;
    const ADMcpf = result.cpf;
    const ADMemail = result.email;

    if (result === "NoADM") return res.send({ error: "N encontramo o homi" });

    if (result.senha !== pass) return res.send({ error: "N deu boa..." });

    const token = jwt.sign({
        _id: ADMid
    }, "cecedilha", {
        expiresIn: "1000m"
    });
    console.log(
        "token: ", token, 
        "\nADMId: ", ADMid, 
        "\ADMcpf", ADMcpf, 
        "\ADMemail", ADMemail
    ); 
    return res.send({ token, ADMid, ADMcpf, ADMemail });
};
