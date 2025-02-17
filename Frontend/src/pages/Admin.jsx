import React, { useState, useEffect } from 'react'
import { Container, Typography, Box, Tabs, Tab } from '@mui/material'
import EventList from '../components/admin/EventsList.jsx'
import EventForm from '../components/admin/EventsForm.jsx'
import LoginPage from '../components/admin/LoginPage.jsx'

export default function AdminPage() {
  const [events, setEvents] = useState([])
  const [selectedEvent, setSelectedEvent] = useState(null)
  const [activeTab, setActiveTab] = useState(0)
  const [token, setToken] = useState(sessionStorage.getItem('auth' || ''))

  useEffect(() => {
    const fetchEvents = async () => {
      try{
        const response = await fetch('https://aws-backend-production-d3d5.up.railway.app/events')
        const data = await response.json()
        setEvents(data)
      }catch(error){
        console.log(error)
      }
    }
    if(!token || token === ''){
      return console.log('Unauthorized')
    }else{
      fetchEvents()
    }
    
  }, [token])

  const handleAddEvent = async (newEvent) => {
    try{
      const response = await fetch('http://localhost:8000/events/add', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(newEvent)
      })
      const data = await response.json()
      if(response.ok){
        setEvents([...events, data])
        setActiveTab(0)
      }
    }catch(error){
      console.log(error)
    }
  }

  const handleUpdateEvent = async (updateEvent) => {
    const eventToUpdate = updateEvent
    try{
      const res = await fetch(`http://localhost:8000/events/${eventToUpdate._id}/update`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json'
        },
        credentials: 'include',
        body: JSON.stringify(eventToUpdate)
      })
      const updatedEvent = await res.json()
      if(res.ok){
        setEvents(events.map(event => event._id === eventToUpdate._id ? updatedEvent : event))
        setSelectedEvent(null)
      }
    }catch(error){
      console.log(error)
  }
}

  const handleDeleteEvent = async (id) => {
    try{
      const res = await fetch(`http://localhost:8000/events/${id}/delete`, {
        method: 'DELETE',
        credentials: 'include'
      })
      if(res.ok){
        setEvents(events.filter(event => event._id !== id))
      }
    }catch(error){
      console.log(error)
    }
  }

  const handleLogin = async (username, password) => {
    try{
      const response = await fetch('http://localhost:8000/admin/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify({ username, password })
      })
      const data = await response.json()
      if(response.ok){
        setToken(data.auth)
        sessionStorage.setItem('auth', data.auth)
      }
    }catch(error){
      console.log(error)
  }
}

  if(!token || token === ''){
    return <LoginPage onLogin={handleLogin} />
  }

  return (
    <Container maxWidth="lg">
      <Typography variant="h4" component="h1" gutterBottom>
        Event Management
      </Typography>
      <Box sx={{ borderBottom: 1, borderColor: 'divider', mb: 2 }}>
        <Tabs value={activeTab} onChange={(_, newValue) => setActiveTab(newValue)} aria-label="event management tabs">
          <Tab label="Manage Events" activeTab="0" id="tab-0" aria-controls="tabpanel-0" />
          <Tab label="Add New Event" activeTab="1" id="tab-1" aria-controls="tabpanel-1" />
        </Tabs>
      </Box>
      <Box role="tabpanel" hidden={activeTab !== 0} id="tabpanel-0" aria-labelledby="tab-0">
        {activeTab === 0 && (
          <EventList
            events={events}
            onEditEvent={setSelectedEvent}
            onDeleteEvent={handleDeleteEvent}
            onUpdateEvent={handleUpdateEvent}
            selectedEvent={selectedEvent}
          />
        )}
      </Box>
      <Box role="tabpanel" hidden={activeTab !== 1} id="tabpanel-1" aria-labelledby="tab-1">
        {activeTab === 1 && (
          <EventForm
            onSubmit={handleAddEvent}
            onCancel={() => setActiveTab(0)}
          />
        )}
      </Box>
    </Container>
  )
}

