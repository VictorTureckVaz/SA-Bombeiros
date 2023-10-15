console.log("Ola mundorr");

const express = require("express");
const app = express();
const cors = require("cors");
const postLoginHandler = require("./handlers/login/post");

app.use(express.json());
app.use(express.urlencoded());
app.use(cors());

app.post("/login", postLoginHandler);

app.listen(15600, () => {
    console.log("Server rodante")
});
