import React from 'react'
import { useState } from 'react'
import { List, ListItem, ListItemText, ListItemSecondaryAction, IconButton, Typography, Paper, Box } from '@mui/material'
import EditIcon from '@mui/icons-material/Edit'
import DeleteIcon from '@mui/icons-material/Delete'
import EventForm from '../admin/EventsForm'
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
        {events.length > 0 && events.map((event) => (
          <React.Fragment key={event._id}>
            <ListItem>
              <ListItemText
                primary={event.name}
                secondary={`${event.date} - ${event.description}`}
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
            {selectedEvent && selectedEvent._id === event._id && (
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
        ))}{
          events.length===0 && (
            <ListItem>
              <ListItemText className='text-gray-500 text-center' primary="No events found" />
            </ListItem>
          )
        }
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

