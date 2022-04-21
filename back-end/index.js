import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

// FORMATO USUÁRIO:
let user = {
    username: '',
    avatar: ""
}

// FORMATO TWEET:
let tweet = {
    username: "",
    avatar: "",
    tweet: "",
}

// REQUISIÇÃO DE LOGIN
app.post("/sign-up", (req, res) => {
    res.send("Requisição login recebida");
});

// REQUISIÇÃO DE CARREGAMENTO DE TWEETS
app.get("/tweets", (req, res) => {
    res.send("Requisição de carregamentos de tweets recebida");
});

// REQUISIÇÃO DE ENVIO DE TWEET
app.post("/tweets", (req, res) => {
    res.send("Requisição de envio de tweet recebida");
});

app.listen(5000, console.log("Server ligado na porta 5000"))