console.log("Ola mundo");

const express = require("express");
const app = express();
const cors = require("cors");
const postLoginHandler = require("./handlers/login/post");
const postCadastroHandler = require("./handlers/cadastro/post");
const postSubmitHandler = require("./handlers/submit/post");
const postMateriaisHandler = require("./handlers/material/post");
const nullSubmit = require("./handlers/nullSubmit/post");
// const postTestes = require("./handlers/testes/post");
const validateToken = require("./middleware/jwt");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post("/login", postLoginHandler);
app.post("/cadastro", postCadastroHandler);
app.post("/submit", postSubmitHandler);
app.post("/materiais", postMateriaisHandler);
app.post("/nullSubmit", nullSubmit);

app.listen(15600, () => {
    console.log("Server rodante")
});
