import mongoose from 'mongoose';

const speakerSchema = new mongoose.Schema({
  name: {
    type: String,
    
    trim: true
  },
  designation: {
    type: String,
    trim: true
  },
  image: {
    type: String,
    trim: true
  }
});

const eventSchema = new mongoose.Schema({
  name: {
    type: String,
    
    trim: true
  },
  date: {
    type: Date,
    required: true
  },
  startTime: {
    type: String,
    
    trim: true
  },
  endTime: {
    type: String,
    
    trim: true
  },
  status: {
    type: String,
    enum: ['upcoming', 'past', 'ongoing'],
    default: 'upcoming'
  },
  location: {
    type: String,
    
    trim: true
  },
  description: {
    type: String,
    
    trim: true
  },
  coverImage: {
    type: String,
    
    trim: true
  },
  eventImages: [{
    type: String,
    trim: true
  }],
  speakers: [speakerSchema],
  topicsCovered: [{
    type: String,
    trim: true
  }],
  registrationLink: {
    type: String,
    trim: true
  },
  recordingUrl: {
    type: String,
    trim: true
  }
}, {
  timestamps: true
});

export default mongoose.model('Event', eventSchema, 'events');