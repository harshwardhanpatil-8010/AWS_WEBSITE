import express from 'express';
import Event from '../models/eventSchema.js';
import { isAuthenticated } from '../middleware/verifyToken.js';

const router = express.Router();


router.get('/', async (req, res) => {
  try {
    const events = await Event.find(); 
    res.json(events); 
  } catch (err) {
    console.error('Error fetching events:', err);
    res.status(500).json({ message: 'Error fetching events', error: err.message });
  }
});


router.post('/add', isAuthenticated, async (req, res) => {
  try {
    const { name, date, location, description, image } = req.body;

    if (!name || !date || !location || !description) {
      return res.status(400).json({
        message: 'All fields (name, date, location, description) are required.',
      });
    }

    const newEvent = new Event({ name, date, location, description, image });
    const savedEvent = await newEvent.save();

    res.status(201).json(savedEvent);
  } catch (error) {
    console.error('Error adding event:', error);
    res.status(500).json({ message: 'Error adding event', error: error.message });
  }
});

router.put('/:id/update', isAuthenticated, async (req, res) => {
  try {
    const { name, date, location, description, image } = req.body;
    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      { name, date, location, description, image },
      { new: true }
    );

    res.json(updatedEvent);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ message: 'Error updating event', error: error.message });
  }
});

router.delete('/:id/delete', isAuthenticated, async (req, res) => {
  try{
    await Event.findByIdAndDelete(req.params.id);
    res.json({ message: 'Event deleted successfully' });
  }catch(error){
    console.log(error)
    res.status(500).json({ message: 'Error deleting event', error: error.message });
  }
});

export default router;
