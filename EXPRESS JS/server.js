import express from 'express';
import path from'path';
import { fileURLToPath } from 'url';
import posts from './routes/posts.js';
import logger from './middleware/logger.js';
import errorHandler from './middleware/error.js';


const __filename =fileURLToPath(import.meta.url);
const __dirname =path.dirname(__filename);

const app=express();

app.use(express.json());
app.use(express.urlencoded({extended:false}))





app.use('/api/posts',posts);

app.use(errorHandler);


app.use(logger);

app.use(express.static(path.join(__dirname,'public')));



app.listen(8000,()=>console.log('server is running on port 8000'));