import express from "express";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

// ARRAY DE USUÁRIOS:
let users = [];

// ARRAY DE TWEETS NA TELA:
let tweets = [];

// REQUISIÇÃO DE LOGIN
app.post("/sign-up", (req, res) => {
    const { username, avatar } = req.body;
    users.push({ username, avatar });
    res.send("OK");
});

// REQUISIÇÃO DE CARREGAMENTO DE TWEETS
app.get("/tweets", (req, res) => {
    res.send(tweets);
});

// REQUISIÇÃO DE ENVIO DE TWEET
app.post("/tweets", (req, res) => {
    const { username, tweet } = req.body;
    const user = users.find(usuario => {
        if (usuario.username === username) {
            return usuario;
        }
    })
    tweets.push({ username: user.username, avatar: user.avatar, tweet });
    res.send("OK");
});

app.listen(5000, console.log("Server ligado na porta 5000"))