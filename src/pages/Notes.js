import { Grid , Paper ,Container} from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import { useEffect } from 'react'
import NoteCard from '../components/NoteCard'

export default function Notes() {
  const [notes,SetNotes] =useState([])
  useEffect(()=>
  {
  fetch('http://localhost:8220/notes')
     .then(res => res.json())
     .then(data => SetNotes(data))
  },[])
  return (
   
   <Container>
      <Grid container>
{notes.map(note =>(
  <Grid item key={note.id} xs={12} md={6} lg={4}>
    <Paper><NoteCard></NoteCard></Paper>  </Grid>
    
) )}
</Grid>

  </Container>  
  )
}
