import mongoose from 'mongoose';

const autorSchema = new mongoose.Schema({
  id: {type: String},
  nome: {type: String, required: true},
  nacionalidade: {type: String}  
}
//para nao ter o versionamento automatico _v no banco de dados
// {
//     versionKey: false
// }
)

const autores = mongoose.model("autores", autorSchema);

export default autores;