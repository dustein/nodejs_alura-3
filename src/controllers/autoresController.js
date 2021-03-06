import autores from '../models/Autor.js';

class AutorController {

    //metodo estatico
    static listarAutores = (req, res) => {
        autores.find((err, autores)=> {
            res.status(200).json(autores)
        });
    };

    static listaAutorPorId = (req, res) => {
        const { id } = req.params;
        autores.findById(id, (err, autores) => {
            if(err) {
                res.status(400).send({message: `Nao ha Autor id ${id}`})
            } res.status(200).send(autores);
        })
    }

    static cadastrarAutor = (req, res) => {
        let autor = new autores(req.body);

        autor.save((err) => {
            if (err) {
                res
                    .status(500)
                    .send({message: `${err.message} - falha ao cadastrar Autor.`})
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    };

    static atualizarAutor = (req, res) => {
        const { id } = req.params;
        autores.findByIdAndUpdate(id, {$set: req.body}, (err) => {
            if(!err) {
                res.status(200).send({message: 'Autor atualizado com sucesso!'})
            } else {
                res.status(500).send({message: `${err.message} - Ocorreu erro !`})
            }
        })
    };

    static excluirAutor = (req, res) => {
        const { id } = req.params;
        autores.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "Autor Excluido com Sucesso!!"})
            } else {
                res.status(500).send({message: err.message})
            };
        })
    }
};

export default AutorController;
