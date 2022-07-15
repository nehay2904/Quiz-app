import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';

export default function EducationalInfo() {
  return (
    <Box
      component="form"
      sx={{
        '& > :not(style)': { m: 1, width: '25ch' },
      }}
      noValidate
      autoComplete="off"
    >
      <TextField id="outlined-basic" label="School/College Name" variant="outlined" />
      <TextField id="outlined-basic" label="School/College Address" variant="outlined" />
      
    </Box>
  );
}
