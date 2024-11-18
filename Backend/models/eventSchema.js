import mongoose from 'mongoose';
const eventSchema = new mongoose.Schema({
    name: {
      type: String,
      required: true,
      trim: true
    },
    date: {
      type: String,
      required: true
    },
    location: {
      type: String,
      required: true,
      trim: true
    },
    description: {
      type: String,
      required: true,
      trim: true
    },
    image: {
      type: String,
      trim: true
    }
  });
  
  export default mongoose.model('Event', eventSchema, 'events');

