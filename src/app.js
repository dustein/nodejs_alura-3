import express from 'express';
import db from './config/dbConnect.js';
import livros from "./models/Livro.js";


db.on("error", console.log.bind(console, 'Erro de Conexão no BD !'));

db.once("open", () => {
    console.log('Conexão com o DB realizada OK!')
});

const app = express();
app.use(express.json());

// const livros = [
//     {id: 1, "titulo": "Senhor dos Aneis"},
//     {id: 2, "titulo": "Hobbit"}
// ];

function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

app.get("/", (req, res) => {
    res.status(200).send("Funcionando OK")
});

// app.get("/livros", (req, res) => {
//     res.status(200).json(livros)
// });
app.get("/livros", (req, res) => {
    livros.find((err, livros)=> {
        res.status(200).json(livros)
    });
});

app.get("/livros/:id", (req, res) => {
    const indice = buscaLivro(req.params.id);
    res.status(200).json(livros[indice])
})

app.post("/livros", (req, res) => {
    livros.push(req.body);
    res.status(201).json({status: "Livro cadastrado OK"});
});

app.put("/livros/:id", (req, res) => {
    const indice = buscaLivro(req.params.id);
    livros[indice].titulo = req.body.titulo
    res.status(200).json(livros);
});


export default app;