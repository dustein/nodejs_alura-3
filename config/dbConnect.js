import dotenv from 'dotenv';
dotenv.config();
import mongoose from 'mongoose';

const URL = process.env.MONGO_URI;
mongoose.connect(URL, { useNewUrlParser: true, useUnifiedTopology: true})

let db = mongoose.connection;

export default db