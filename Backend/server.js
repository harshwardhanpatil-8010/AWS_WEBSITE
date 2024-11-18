import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bodyParser from 'body-parser';
import contactRouter from './api/auth.js'; 
import connectDB from './config/db.js';
import newslettersRouter from './routes/newsletter.js';
import eventsRouter from './routes/Events.js';
import path from 'path';


dotenv.config();
connectDB();
const app = express(); 


app.use(cors()); 
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.get('/contact', (req, res) => {
    res.sendFile(path.resolve('./api/contact.html'));
});
app.use('/', contactRouter);


app.get('/news', (req, res) => {
    res.sendFile(path.resolve('./api/newsletters.html'));
});
app.use('/newsletters', newslettersRouter);


app.get('/events', (req, res) => {
    res.sendFile(path.resolve('./api/events.html'));
});
app.use('/events', eventsRouter);

app.get('/', (req, res) => {
    res.send('Server is ready');
});

const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`Server running at http://localhost:${port}`);
});
