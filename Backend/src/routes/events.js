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


router.post('/add',isAuthenticated, async (req, res) => {
  try {
    const { 
      name, 
      date, 
      location, 
      description, 
      coverImage,
      eventImages,
      startTime,
      endTime,
      status,
      speakers,
      topicsCovered,
      registrationLink,
      recordingUrl
    } = req.body;

    // Check mandatory fields
    if (!name || !date || !location || !description || !coverImage) {
      return res.status(400).json({
        message: 'Name, date, location, description, and cover image are required.',
      });
    }

    const newEvent = new Event({
      name,
      date,
      location,
      description,
      coverImage,
      // Optional fields - will only be set if provided in request
      ...(eventImages && { eventImages }),
      ...(startTime && { startTime }),
      ...(endTime && { endTime }),
      ...(status && { status }),
      ...(speakers && { speakers }),
      ...(topicsCovered && { topicsCovered }),
      ...(registrationLink && { registrationLink }),
      ...(recordingUrl && { recordingUrl })
    });

    const savedEvent = await newEvent.save();
    res.status(201).json(savedEvent);
  } catch (error) {
    console.error('Error adding event:', error);
    res.status(500).json({ message: 'Error adding event', error: error.message });
  }
});

router.put('/:id/update',isAuthenticated, async (req, res) => {
  try {
    const { 
      name, 
      date, 
      location, 
      description, 
      coverImage,
      eventImages,
      startTime,
      endTime,
      status,
      speakers,
      topicsCovered,
      registrationLink,
      recordingUrl
    } = req.body;

    // Check if at least one field is provided for update
    if (Object.keys(req.body).length === 0) {
      return res.status(400).json({
        message: 'No update data provided'
      });
    }

    // Create update object with only provided fields
    const updateData = {
      ...(name && { name }),
      ...(date && { date }),
      ...(location && { location }),
      ...(description && { description }),
      ...(coverImage && { coverImage }),
      ...(eventImages && { eventImages }),
      ...(startTime && { startTime }),
      ...(endTime && { endTime }),
      ...(status && { status }),
      ...(speakers && { speakers }),
      ...(topicsCovered && { topicsCovered }),
      ...(registrationLink && { registrationLink }),
      ...(recordingUrl && { recordingUrl })
    };

    const updatedEvent = await Event.findByIdAndUpdate(
      req.params.id,
      updateData,
      { new: true, runValidators: true }
    );

    if (!updatedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }

    res.json(updatedEvent);
  } catch (error) {
    console.error('Error updating event:', error);
    res.status(500).json({ message: 'Error updating event', error: error.message });
  }
});

router.delete('/:id/delete',isAuthenticated, async (req, res) => {
  try {
    const deletedEvent = await Event.findByIdAndDelete(req.params.id);
    
    if (!deletedEvent) {
      return res.status(404).json({ message: 'Event not found' });
    }
    
    res.json({ message: 'Event deleted successfully' });
  } catch (error) {
    console.error('Error deleting event:', error);
    res.status(500).json({ message: 'Error deleting event', error: error.message });
  }
});
router.get('/:id', async (req, res) => {
  const eventId = req.params.id; 
  console.log("Received request for event ID:", eventId); 

  try {
    const event = await Event.findById(eventId);

    if (!event) {
      console.error(`Event with ID ${eventId} not found`);
      return res.status(404).json({ message: `Event with ID ${eventId} not found` });
    }

    console.log("Event fetched successfully:", event);
    res.json(event);
  } catch (error) {
    console.error("Error fetching event:", error.message);
    res.status(500).json({ message: "Server error fetching event", error: error.message });
  }
});
;


export default router;
