import  React, {useState} from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';


export default function PersonalInfo() {
  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [date, setDate] = useState("")
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="First Name" variant="outlined" value={firstName} onChange={(e) =>{
        setFirstName(e.target.value)
      }}/>
      <TextField id="outlined-basic" label="Last Name" variant="outlined" />
      <TextField id="outlined-basic" label="Phone Number" type="tel" variant="outlined" />
      <TextField id="outlined-basic" label="Email Address" type="email" variant="outlined" />
      <TextField id="outlined-basic"  type="date" variant="outlined" />
      
      
    </Box>
  );
}
