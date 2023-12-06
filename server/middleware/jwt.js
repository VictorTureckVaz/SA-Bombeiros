const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const tokenHeader = req.headers.authorization;
    
    if (!tokenHeader) return res.status(400).send({ error: "Cade o kbssalho mn?" });
    console.log(tokenHeader);
    /**
     * @type {string}
     * 
     * O token sera recebido como uma string.
     * Essa e a formatacao do cabecalho:
     * 
     * ```js
     * "Bearer osuvbiusyvruiysv.lifhybouibsroiubvfpiud.kuysvgbeiuysbveiuybur"
     * ```
     * 
     * Para acessar o token e necessario cortar no caractere de espaco:
     * 
     * ```js
     * const splitedTokenHeader = tokenHeader.split(" ") === [
     *     "Bearer",
     *     "osuvbiusyvruiysv.lifhybouibsroiubvfpiud.kuysvgbeiuysbveiuybur"
     * ];
     * ```
     * 
     * Por fim, o token se encontra no indice 1 do array:
     * 
     * ```js
     * const token = splitedTokenHeader[1] === "osuvbiusyvruiysv.lifhybouibsroiubvfpiud.kuysvgbeiuysbveiuybur";
     * ```
     */
    const token = tokenHeader.split(" ")[1];
    
    if (!token) return res.status(400).send({ error: "Cade o token mn?" });

    console.log(`tokenHeader: '${tokenHeader}'`);
    console.log(`Token: '${token}'`);

    try {
        const sessionData = jwt.verify(token, "cecedilha");
        req.user = { _id: sessionData._id }
        console.log(req.user);
        return next();
    } catch(err) {
        console.log(err);
        return res.status(400).send({ error: "Neh segredo neh hari" });
    }
}
