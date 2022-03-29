// import dotenv from 'dotenv';
// dotenv.config();
import mongoose from 'mongoose';

// const URL = process.env.MONGO_LOCAL;
// mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true})

//config uso MongoDB local
mongoose.connect('mongodb://localhost/livraria');
//config uso MongoDB Atlas - senha provisoria para testes
// mongoose.connect("mongodb+srv://dustein:data02@cluster0.5iskh.mongodb.net/livraria")

let db = mongoose.connection;

export default db;