console.log("Ola mundo");

const express = require("express");
const app = express();
const cors = require("cors");
const postLoginHandler = require("./handlers/login/post");
const postLoginADMHandler = require("./handlers/loginadm/post");
const postCadastroHandler = require("./handlers/cadastro/post");
const nullSubmit = require("./handlers/nullSubmit/post");
// const postTestes = require("./handlers/testes/post");
const validateToken = require("./middleware/jwt");


const postinfpac = require("./handlers/relatoriosubmit/infpac/post");
const postinfamb = require("./handlers/relatoriosubmit/infamb/post");
const posttipooc = require("./handlers/relatoriosubmit/tipooc/post");
const postinfconetrans = require("./handlers/relatoriosubmit/infconetrans/post");
const postavalpac = require("./handlers/relatoriosubmit/avalpac/post");
// const postsinaisvitais = require("./handlers/relatoriosubmit/sinaisvitais/post");
const postsinaissintomas = require("./handlers/relatoriosubmit/sinaissintomas/post");
const postprobenc = require("./handlers/relatoriosubmit/probenc/post");
const postprocefetuados = require("./handlers/relatoriosubmit/procefetuados/post");
const postanamnese = require("./handlers/relatoriosubmit/anamnese/post");
const postanamnesegest = require("./handlers/relatoriosubmit/anamnese gestacional/post");
const postcinobjrec = require("./handlers/relatoriosubmit/cinobjrec/post");
const postobs = require("./handlers/relatoriosubmit/obs/post");
const postmateriais = require("./handlers/relatoriosubmit/materiais/post");
const postferimentos = require("./handlers/relatoriosubmit/ferimentos/post");
const postqueimaduras = require("./handlers/relatoriosubmit/queimaduras/post");
const gethistorico = require("./handlers/historico/get")


app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post("/login", postLoginHandler);
app.post("/loginADM", postLoginADMHandler);
app.post("/cadastro", postCadastroHandler);
app.post("/nullSubmit", validateToken, nullSubmit);

//post's do submit (cada tabela)
app.post("/infpac", validateToken, postinfpac);
app.post("/infamb", postinfamb);
app.post("/tipooc", posttipooc);
app.post("/infconetrans", postinfconetrans);
app.post("/avalpac", postavalpac);
// app.post("/sinaisvitais", postsinaisvitais);
app.post("/sinaissintomas", postsinaissintomas);
app.post("/probenc", postprobenc);
app.post("/procefetuados", postprocefetuados);
app.post("/anamnese", postanamnese);
app.post("/anamnesegest", postanamnesegest);
app.post("/cinobjrec", postcinobjrec);
app.post("/obs", postobs);
app.post("/materiais", postmateriais);
app.post("/ferimentos", postferimentos);
app.post("/queimaduras", postqueimaduras);
app.get("/historico", validateToken, gethistorico);

app.listen(15600, () => {
    console.log("Server rodante")
});