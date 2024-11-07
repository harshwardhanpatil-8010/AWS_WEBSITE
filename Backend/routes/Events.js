import express from 'express';
import Event from '../models/eventSchema.js'; 

const router = express.Router();
router.get('/', async (req, res) => {
    try {
        console.log('Fetching events...');
        const events = await Event.find();
        console.log('Events fetched:', events);
        res.json(events);
    } catch (err) {
        console.error('Error fetching events:', err);
        res.status(500).json({ message: 'Error fetching events', error: err.message });
    }
});


router.post('/add', async (req, res) => {
    try {
        const { name, date, location, description, image } = req.body;
        const newEvent = new Event({
            name,
            date,
            location,
            description,
            image,
        });
        const savedEvent = await newEvent.save(); 
        res.status(201).json(savedEvent); 
        console.log("Event added successfully");
    } catch (error) {
        console.error('Error details:', error);
        res.status(500).json({ message: 'Error adding event', error: error.message });
    }
});



export default router;