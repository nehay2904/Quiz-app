import * as React from 'react';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import React, { useState } from "react";
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";
import { MenuProps, useStyles, options } from "./Data";

export default function EducationalDetails() {
 
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
