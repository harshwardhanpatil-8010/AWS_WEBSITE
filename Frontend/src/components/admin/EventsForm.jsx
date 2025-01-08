import React, { useState, useEffect } from 'react'
import { TextField, Button, Box, Typography, IconButton, MenuItem } from '@mui/material'
import AddIcon from '@mui/icons-material/Add'
import DeleteIcon from '@mui/icons-material/Delete'

export default function EventForm({ event, onSubmit, onCancel }) {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [startTime, setStartTime] = useState('')
  const [endTime, setEndTime] = useState('')
  const [status, setStatus] = useState('upcoming')
  const [location, setLocation] = useState('')
  const [description, setDescription] = useState('')
  const [coverImage, setCoverImage] = useState('')
  const [eventImages, setEventImages] = useState([])
  const [speakers, setSpeakers] = useState([])
  const [topicsCovered, setTopicsCovered] = useState([])
  const [registrationLink, setRegistrationLink] = useState('')
  const [recordingUrl, setRecordingUrl] = useState('')

  useEffect(() => {
    if (event) {
      setName(event.name)
      setDate(event.date)
      setStartTime(event.startTime)
      setEndTime(event.endTime)
      setStatus(event.status)
      setLocation(event.location)
      setDescription(event.description)
      setCoverImage(event.coverImage)
      setEventImages(event.eventImages)
      setSpeakers(event.speakers)
      setTopicsCovered(event.topicsCovered)
      setRegistrationLink(event.registrationLink || '')
      setRecordingUrl(event.recordingUrl || '')
    } else {
      setName('')
      setDate('')
      setStartTime('')
      setEndTime('')
      setStatus('upcoming')
      setLocation('')
      setDescription('')
      setCoverImage('')
      setEventImages([])
      setSpeakers([])
      setTopicsCovered([])
      setRegistrationLink('')
      setRecordingUrl('')
    }
  }, [event])

  const handleSubmit = (e) => {
    e.preventDefault()
    const newEvent = {
      name,
      date,
      startTime,
      endTime,
      status,
      location,
      description,
      coverImage,
      eventImages,
      speakers,
      topicsCovered,
      registrationLink,
      recordingUrl,
    }
    onSubmit(event ? { ...event, ...newEvent } : newEvent)
    if (!event) {
      // Reset form after submission if it's a new event
      setName('')
      setDate('')
      setStartTime('')
      setEndTime('')
      setStatus('upcoming')
      setLocation('')
      setDescription('')
      setCoverImage('')
      setEventImages([])
      setSpeakers([])
      setTopicsCovered([])
      setRegistrationLink('')
      setRecordingUrl('')
    }
  }

  const handleAddImage = () => {
    setEventImages([...eventImages, ''])
  }

  const handleRemoveImage = (index) => {
    setEventImages(eventImages.filter((_, i) => i !== index))
  }

  const handleImageChange = (index, value) => {
    const newImages = [...eventImages]
    newImages[index] = value
    setEventImages(newImages)
  }

  const handleAddSpeaker = () => {
    setSpeakers([...speakers, { name: '', designation: '', image: '' }])
  }

  const handleRemoveSpeaker = (index) => {
    setSpeakers(speakers.filter((_, i) => i !== index))
  }

  const handleSpeakerChange = (index, field, value) => {
    const newSpeakers = [...speakers]
    newSpeakers[index] = { ...newSpeakers[index], [field]: value }
    setSpeakers(newSpeakers)
  }

  const handleAddTopic = () => {
    setTopicsCovered([...topicsCovered, ''])
  }

  const handleRemoveTopic = (index) => {
    setTopicsCovered(topicsCovered.filter((_, i) => i !== index))
  }

  const handleTopicChange = (index, value) => {
    const newTopics = [...topicsCovered]
    newTopics[index] = value
    setTopicsCovered(newTopics)
  }

  return (
    <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
      <Typography variant="h6" component="h3" gutterBottom>
        {event ? 'Edit Event' : 'Add New Event'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
          required
        />
        <TextField
          label="Date"
          type="date"
          value={date}
          onChange={(e) => setDate(e.target.value)}
          required
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="Start Time"
          type="time"
          value={startTime}
          onChange={(e) => setStartTime(e.target.value)}
          required
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          label="End Time"
          type="time"
          value={endTime}
          onChange={(e) => setEndTime(e.target.value)}
          required
          InputLabelProps={{ shrink: true }}
        />
        <TextField
          select
          label="Status"
          value={status}
          onChange={(e) => setStatus(e.target.value)}
          required
        >
          <MenuItem value="upcoming">Upcoming</MenuItem>
          <MenuItem value="past">Past</MenuItem>
          <MenuItem value="ongoing">Ongoing</MenuItem>
        </TextField>
        <TextField
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          required
        />
        <TextField
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={4}
          required
        />
        <TextField
          label="Cover Image URL"
          value={coverImage}
          onChange={(e) => setCoverImage(e.target.value)}
          required
        />
        <Typography variant="subtitle1">Event Images</Typography>
        {eventImages && eventImages.map((image, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TextField
              label={`Image ${index + 1}`}
              value={image}
              onChange={(e) => handleImageChange(index, e.target.value)}
              fullWidth
            />
            <IconButton onClick={() => handleRemoveImage(index)} color="error">
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
        <Button type="button" onClick={handleAddImage} startIcon={<AddIcon />}>
          Add Image
        </Button>
        <Typography variant="subtitle1">Speakers</Typography>
        {speakers.map((speaker, index) => (
          <Box key={index} sx={{ display: 'flex', flexDirection: 'column', gap: 1, p: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
            <Typography variant="subtitle2">
              Speaker {index + 1}
              <IconButton onClick={() => handleRemoveSpeaker(index)} color="error" size="small" sx={{ float: 'right' }}>
                <DeleteIcon />
              </IconButton>
            </Typography>
            <TextField
              label="Name"
              value={speaker.name}
              onChange={(e) => handleSpeakerChange(index, 'name', e.target.value)}
              required
            />
            <TextField
              label="Designation"
              value={speaker.designation}
              onChange={(e) => handleSpeakerChange(index, 'designation', e.target.value)}
            />
            <TextField
              label="Image URL"
              value={speaker.image}
              onChange={(e) => handleSpeakerChange(index, 'image', e.target.value)}
            />
          </Box>
        ))}
        <Button type="button" onClick={handleAddSpeaker} startIcon={<AddIcon />}>
          Add Speaker
        </Button>
        <Typography variant="subtitle1">Topics Covered</Typography>
        {topicsCovered.map((topic, index) => (
          <Box key={index} sx={{ display: 'flex', alignItems: 'center', gap: 1 }}>
            <TextField
              label={`Topic ${index + 1}`}
              value={topic}
              onChange={(e) => handleTopicChange(index, e.target.value)}
              fullWidth
            />
            <IconButton onClick={() => handleRemoveTopic(index)} color="error">
              <DeleteIcon />
            </IconButton>
          </Box>
        ))}
        <Button type="button" onClick={handleAddTopic} startIcon={<AddIcon />}>
          Add Topic
        </Button>
        <TextField
          label="Registration Link"
          value={registrationLink}
          onChange={(e) => setRegistrationLink(e.target.value)}
        />
        <TextField
          label="Recording URL"
          value={recordingUrl}
          onChange={(e) => setRecordingUrl(e.target.value)}
        />
        <Box sx={{ display: 'flex', justifyContent: 'flex-end', gap: 2 }}>
          <Button type="button" onClick={onCancel} variant="outlined">
            Cancel
          </Button>
          <Button type="submit" variant="contained">
            {event ? 'Update' : 'Add'} Event
          </Button>
        </Box>
      </Box>
    </Box>
  )
}

