import React, { useState } from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Paper, Box, Chip, Avatar } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import EventForm from './EventsForm'
import DeleteConfirmationDialog from './DeleteConfirmationDialog'

export default function EventList({ events, onEditEvent, onDeleteEvent, onUpdateEvent, selectedEvent }) {
  const [deleteConfirmation, setDeleteConfirmation] = useState({
    open: false,
    eventId: null,
    eventTitle: '',
  })

  const handleDeleteClick = (event) => {
    setDeleteConfirmation({ open: true, eventId: event._id, eventTitle: event.name })
  }

  const handleDeleteConfirm = () => {
    if (deleteConfirmation.eventId !== null) {
      onDeleteEvent(deleteConfirmation.eventId)
    }
    setDeleteConfirmation({ open: false, eventId: null, eventTitle: '' })
  }

  const handleDeleteCancel = () => {
    setDeleteConfirmation({ open: false, eventId: null, eventTitle: '' })
  }

  return (
    <Paper elevation={3} sx={{ p: 2 }}>
      <Typography variant="h6" component="h2" gutterBottom>
        Existing Events
      </Typography>
      <List>
        {events.map((event) => (
          <React.Fragment key={event._id}>
            <ListItem alignItems="flex-start">
              <ListItemText
                primary={
                  <Typography variant="subtitle1" component="div">
                    {event.name}
                    <Chip
                      label={event.status}
                      size="small"
                      color={event.status === 'upcoming' ? 'primary' : event.status === 'ongoing' ? 'secondary' : 'default'}
                      sx={{ ml: 1 }}
                    />
                  </Typography>
                }
                secondary={
                  <React.Fragment>
                    <Typography component="span" variant="body2" color="text.primary">
                      {new Date(event.date).toLocaleDateString()} | {event.startTime} - {event.endTime}
                    </Typography>
                    <Typography component="div" variant="body2">
                      Location: {event.location}
                    </Typography>
                    <Box sx={{ mt: 1 }}>
                      { event.speakers && event.speakers.map((speaker, index) => (
                        <Chip
                          key={index}
                          avatar={<Avatar alt={speaker.name} src={speaker.image} />}
                          label={speaker.name}
                          variant="outlined"
                          size="small"
                          sx={{ mr: 1, mb: 1 }}
                        />
                      ))}
                    </Box>
                    <Box sx={{ mt: 1 }}>
                      {event.topicsCovered && event.topicsCovered.map((topic, index) => (
                        <Chip key={index} label={topic} size="small" sx={{ mr: 1, mb: 1 }} />
                      ))}
                    </Box>
                  </React.Fragment>
                }
              />
              <ListItemSecondaryAction>
                <IconButton edge="end" aria-label="edit" onClick={() => onEditEvent(event)}>
                  <EditIcon />
                </IconButton>
                <IconButton edge="end" aria-label="delete" onClick={() => handleDeleteClick(event)}>
                  <DeleteIcon />
                </IconButton>
              </ListItemSecondaryAction>
            </ListItem>
            {selectedEvent && selectedEvent.id === event.id && (
              <ListItem>
                <Box sx={{ width: '100%' }}>
                  <EventForm
                    event={selectedEvent}
                    onSubmit={onUpdateEvent}
                    onCancel={() => onEditEvent(null)}
                  />
                </Box>
              </ListItem>
            )}
          </React.Fragment>
        ))}
      </List>
      <DeleteConfirmationDialog
        open={deleteConfirmation.open}
        onClose={handleDeleteCancel}
        onConfirm={handleDeleteConfirm}
        eventTitle={deleteConfirmation.eventTitle}
      />
    </Paper>
  )
}

