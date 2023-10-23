const jwt = require("jsonwebtoken");

module.exports = (req, res, next) => {
    const tokenHeader = req.headers.authorization;
    
    if (!tokenHeader) return res.send({ error: "Cade o kbssalho mn?" });
    
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
     * Para acessar o token e necessario cortar no caractere de espaço:
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
    
    if (!token) return res.send({ error: "Cade o token mn?" });

    console.log(`Token: ${token}`);

    try {
        jwt.verify(token, "cecedilha");
        return next();
    } catch(err) {
        console.log(err);
        return res.send({ error: "Neh segredo neh hari" });
    }
}
