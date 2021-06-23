import React from 'react'
import { Typography , Button ,ButtonGroup ,Container ,makeStyles ,TextField , Radio , RadioGroup ,FormControlLabel ,FormControl ,FormLabel} from '@material-ui/core'
import { blue, red } from '@material-ui/core/colors';
import { display } from '@material-ui/system';
import { useState } from 'react';
import { useHistory } from 'react-router-dom';

const myStyle = makeStyles(
  {
    btn: {
      backgroundColor:"violet",
      marginTop: 20,
      '&:hover':{
        backgroundColor:blue[100]
      }
    },
    title : {
    textDecoration: "underline",
    marginBottom: 15
    },

    field: {
      marginBottom: 20 ,
      marginTop: 20,
      display: "block"
     },
  
  },)
export default function Create() {

     const history = useHistory()
     const classes = myStyle()
     const [title,SetTitle] = useState('')
     const [details,SetDetails] = useState('')
     const [titleError,SetTitleError] = useState('false')
     const [detailsError,SetDetailsError] = useState('false')
     const [category,SetCategory] = useState('')

     const handelsubmit = (e) =>
     {
       

       e.preventDefault()
       SetDetailsError(false)
       SetTitleError(false)

       if (title == '')
       {
          SetTitleError(true)
       }

       if (details == '')
       {
          
        SetDetailsError(true)
       }
       if (title && details )
       {
        //  console.log(title,details ,category)
         fetch('http://localhost:8220/notes', {
           method: 'POST',
           headers: {"Content-type" : "application/json"},
           body:JSON.stringify({title,details,category})
         }).then(() => history.push(''))
       }

       
     }
  return (

   
    <div>
    
    <Container>
    <Typography  
      color="textSecondary" variant="h6" component="h2" className={classes.title}>
        Creat new note
      </Typography>
      <form noValidate autoComplete="off" onSubmit={handelsubmit}>
        <TextField onChange={(e) => SetTitle(e.target.value)}  fullWidth variant="outlined" label="Note tilte" color="secondary" required className={classes.field}
        error={titleError}  />
        <TextField onChange={(e) => SetDetails(e.target.value)} fullWidth rows={4} multiline variant="outlined"  label="Details" required 
        color="secondary" title="hh" className={classes.field}    error={detailsError} />
        <FormControl className={classes.field}>
        <FormLabel >Note Category</FormLabel>
        <RadioGroup value={category} onChange={(e) => SetCategory(e.target.value)}>
          <FormControlLabel value="money" control={  <Radio  /> } label="Money"/>
            <FormControlLabel value="todos" control={  <Radio  /> } label="todos"/>
            <FormControlLabel value="reminders" control={  <Radio  /> } label="Reminders"/>
            <FormControlLabel value="work" control={  <Radio  /> } label="Work"/>
            
        </RadioGroup>
        </FormControl>
          
        <Button variant="contained" color="secondary" type="submit"  className={classes.btn} >Submit</Button>
      
      </form>


    </Container>
  
      
    </div>
  )
}
