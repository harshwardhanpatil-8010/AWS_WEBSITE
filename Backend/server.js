import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import contactRouter from './api/auth.js'; 
import path from 'path'; 
import helmet from 'helmet';
import connectDB from './config/db.js';
import newsletterRoutes from './routes/newsletter.js';


dotenv.config();
const app = express();
connectDB();

app.use(cors());
app.use(helmet());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve('./api/contact.html'));
});
app.use('/api', contactRouter);



app.use((err, req, res, next) => {
    console.error(err.stack);
    res.status(500).send('Something broke!');
});


app.get('/news', (req,res)=>{
    res.sendFile(path.resolve('./api/newsletters.html'));
});
app.use('/api', newsletterRoutes);


app.get('/', (req, res) => {
    res.send('Server is ready');
});
const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
