import express from 'express';

const app = express();
app.use(express.json());

const livros = [
    {id: 1, "titulo": "Senhor dos Aneis"},
    {id: 2, "titulo": "Hobbit"}
];

app.get("/", (req, res) => {
    res.status(200).send("Funcionando OK")
});

app.get("/livros", (req, res) => {
    res.status(200).json(livros)
});

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).json({status: "Livro cadastrado OK"});
});

export default app;