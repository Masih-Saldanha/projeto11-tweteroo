import express from "express";
import cors from "cors";

const app = express();
app.use(cors());

app.get("/", (req, res) => {
    res.send("Requisição Get recebida");
});

app.post("/", (req, res) => {
    res.send("Requisição Post recebida");
});

app.listen(5000, console.log("Server ligado na porta 5000"))