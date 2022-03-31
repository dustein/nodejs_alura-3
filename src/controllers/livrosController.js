import livros from '../models/Livro.js';

class LivroController {

    //metodo estatico
    static listarLivros = (req, res) => {
        // livros.find((err, livros)=> {
        //     res.status(200).json(livros)
        // });
        livros.find()
            .populate('autor', 'nome')
            .exec((err, livros) => {
                res.status(200).json(livros)
            })
    };

    static listaLivroPorId = (req, res) => {
        const { id } = req.params;
        // livros.findById(id, (err, livros) => {
        //     if(err) {
        //         res.status(400).send({message: `Nao ha livro id ${id}`})
        //     } res.status(200).send(livros);
        // })
        
        livros.findById(id)
            .populate('autor', 'nome')
            .exec((err, livros) => {
                if(err) {
                    res.status(400).send({message: `${err.message} - Id do Livro`});
                } else {
                    res.status(200).json(livros);
                };
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
    };

    static excluirLivro = (req, res) => {
        const { id } = req.params;
        livros.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "Livro Excluido com Sucesso!!"})
            } else {
                res.status(500).send({message: err.message})
            };
        })
    }

    static listarLivroPorEditora = (req, res) => {
        const editora = req.query.editora

        livros.find({'editora': editora}, {}, (err, livros) => {
            res.status(200).send(livros);
        })
    }
};

export default LivroController;
