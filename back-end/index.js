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
    if (username === "" || avatar === "" || username === undefined || avatar === undefined || typeof(req.body) !== 'object') {
        res.status(400).send("Todos os campos são obrigatórios!");
    } else {
        users.push({ username, avatar });
        res.status(201).send("CREATED");
    }
});

// REQUISIÇÃO DE CARREGAMENTO DE TWEETS
app.get("/tweets", (req, res) => {
    const last10tweets = tweets.filter((tweet, index) => {
        if (index >= tweets.length - 10) {
            return tweet;
        }
    })
    res.send(last10tweets.reverse());
});

// REQUISIÇÃO DE CARREGAMENTO DE TWEETS DO USUARIO APENAS
app.get("/tweets/:USERNAME", (req, res) => {
    const { USERNAME } = req.params;
    const userTweetsFilter = tweets.filter(tweet => {
        if (USERNAME === tweet.username) {
            return tweet;
        }
    })
    const last10tweets = userTweetsFilter.filter((tweet, index) => {
        if (index >= tweets.length - 10) {
            return tweet;
        }
    })
    res.send(last10tweets.reverse());
});

// REQUISIÇÃO DE ENVIO DE TWEET
app.post("/tweets", (req, res) => {
    const { tweet } = req.body;
    const { user } = req.headers;
    const actualUser = users.find(usuario => {
        if (usuario.username === user) {
            return usuario;
        }
    })
    if (user === "" || tweet === "" || user === undefined || tweet === undefined || typeof(req.body) !== 'object') {
        res.status(400).send("Todos os campos são obrigatórios!");
    } else {
        tweets.push({ username: actualUser.username, avatar: actualUser.avatar, tweet });
        res.status(201).send("CREATED");
    }
});

app.listen(5000, console.log("Server ligado na porta 5000"))