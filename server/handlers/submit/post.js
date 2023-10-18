const db = require("./../../lib/db");

module.exports = async (req, res) => {
    console.log(req.body);
    
    const NomePac = req.body.NomePac;
    const nomeHosp = req.body.nomeHosp;
    const docPac = req.body.docPac;
    const idadePac = req.body.idadePac;
    const telefonePac = req.body.telefonePac;
    const local = req.body.local;
    const acompanhante = req.body.acompanhante;

    const promise = new Promise((resolve, reject) => {
        db.query(SUBMIT(
            NomePac, 
            nomeHosp, 
            docPac,
            idadePac,
            telefonePac,
            local,
            acompanhante
            ), function(err, result) {
            if (err) console.log(err);
        });
    });

    const result = await promise;
        

    // if (result === "NoBombeiro") return res.send("N encontramo o homi");

    // if (result.senha !== pass) return res.send("N deu boa...");

    return res.send("Enviado");
};
