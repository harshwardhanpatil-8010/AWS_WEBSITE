import React, { useState, useEffect } from 'react'
import { TextField, Button, Box, Typography } from '@mui/material'

export default function EventForm({event, onSubmit, onCancel}) {
  const [name, setName] = useState('')
  const [date, setDate] = useState('')
  const [description, setDescription] = useState('')
  const [location, setLocation] = useState('')
  const [image, setImage] = useState('')

  useEffect(() => {
    if (event) {
      setName(event.name)
      setDate(event.date)
      setDescription(event.description)
      setLocation(event.location)
      setImage(event.image)
    } else {
      setName('')
      setDate('')
      setDescription('')
      setLocation('')
      setImage('')
    }
  }, [event])

  const handleSubmit = (e) => {
    e.preventDefault()
    onSubmit(event ? { ...event, name, date, description, location, image } : { name, date, description, location, image })
    if (!event) {
      setName('')
      setDate('')
      setDescription('')
      setLocation('')
      setImage('')
    }
  }

  return (
    <Box sx={{ p: 2, border: '1px solid #e0e0e0', borderRadius: 1 }}>
      <Typography variant="h6" component="h3" gutterBottom>
        {event ? 'Edit Event' : 'Add New Event'}
      </Typography>
      <Box component="form" onSubmit={handleSubmit} sx={{ display: 'flex', flexDirection: 'column', gap: 2 }}>
        <TextField
          label="Title"
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
          label="Description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          multiline
          rows={4}
          required
        />
        <TextField
          label="Location"
          value={location}
          onChange={(e) => setLocation(e.target.value)}
          multiline
          rows={2}
          required
        />
        <TextField
          label="Poster Link"
          value={image}
          onChange={(e) => setImage(e.target.value)}
          required
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

