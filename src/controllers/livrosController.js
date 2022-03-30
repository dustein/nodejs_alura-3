import livros from '../models/Livro.js';

class LivroController {

    //metodo estatico
    static listarLivros = (req, res) => {
        livros.find((err, livros)=> {
            res.status(200).json(livros)
        });
    };

    static listaLivroPorId = (req, res) => {
        const { id } = req.params;
        livros.findById(id, (err, livros) => {
            if(err) {
                res.status(400).send({message: `Nao ha livro id ${id}`})
            }
        })
    }

    static cadastrarLivro = (req, res) => {
        let livro = new livros(req.body);

        livro.save((err) => {
            if (err) {
                res
                    .status(500)
                    .send({message: `${err.message} - falha ao cadastrar livro.`})
            } else {
                res.status(201).send(livro.toJSON())
            }
        })
    };

    static atualizarLivro = (req, res) => {
        const { id } = req.params;
        livros.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Livro atualizado com sucesso!'})
            } else {
                res.status(500).send({message: `${err.message} - Ocorreu erro !`})
            }
        })
    }
};

export default LivroController;
