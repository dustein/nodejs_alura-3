import express from 'express';
import db from './config/dbConnect.js';
import livros from "./models/Livro.js";
import routes from "./routes/index.js";



db.on("error", console.log.bind(console, 'Erro de Conexão no BD !'));

db.once("open", () => {
    console.log('Conexão com o DB realizada OK!')
});

const app = express();

app.use(express.json());

routes(app);


function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}


// app.get("/livros/:id", (req, res) => {
//     const indice = buscaLivro(req.params.id);
//     res.status(200).json(livros[indice])
// })

// app.put("/livros/:id", (req, res) => {
//     const indice = buscaLivro(req.params.id);
//     livros[indice].titulo = req.body.titulo
//     res.status(200).json(livros);
// });


export default app;