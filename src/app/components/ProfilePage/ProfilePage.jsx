import  React , {useState} from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';
import './Profile.css'
import { TextField } from '@material-ui/core';
import Checkbox from "@material-ui/core/Checkbox";
import InputLabel from "@material-ui/core/InputLabel";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import MenuItem from "@material-ui/core/MenuItem";
import FormControl from "@material-ui/core/FormControl";
import Select from "@material-ui/core/Select";

import { MenuProps, useStyles, options } from "./Utils";
import SimpleCheckbox from 'app/views/material-kit/checkbox/SimpleCheckbox';

const currencies = [
  {
    value: 'Student',
    label: 'Student',
  },
  {
    value: 'Examiner',
    label: 'Examiner',
  },
  {
    value: 'Both',
    label: 'Both',
  }
];
 

export default function VerticalLinearStepper() {

  // end point for personal info

  const [firstName, setFirstName] = useState("")
  const [lastName, setLastName] = useState("")
  const [phoneNumber, setPhoneNumber] = useState("")
  const [email, setEmail] = useState("")
  const [dateofbirth, setDateofbirth] = useState("")
  
// end point for educational details

 const [schoolName, setSchoolName] = useState("")
 const [schoolAddress, setSchoolAddress] = useState("")


 

 // end point for target exams
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const isAllSelected =
    options.length > 0 && selected.length === options.length;

  const handleChange = (event) => {
    const value = event.target.value;

    if (value[value.length - 1] === "all") {
      setSelected(selected.length === options.length ? [] : options);
      return("");
    }
    setSelected(value);
  };


  // end point for role
  const [role, setRole] = React.useState('');
  // buttons 
  const [activeStep, setActiveStep] = React.useState(0);

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setFirstName("");
    setLastName("");
    setPhoneNumber("")
    setDateofbirth("")
    setEmail("")
    setSchoolAddress("")
    setSchoolName("")
    setRole("")
    setSelected("")
  };

  const handleFinish = () => {

    
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
    
    const user = {
        firstName: firstName,
        lastName: lastName,
        phoneNumber: phoneNumber,
        email: email,
        dateofbirth: dateofbirth,
        schoolName:schoolAddress,
        schoolAddress: schoolAddress,
        role: role,
        selected: selected
        
    }
    const data = JSON.stringify(user);
    

    console.log(data)
  };
  // 
  return (
    <div className="profilepage container">
      <Box sx={{ maxWidth: 400 }}>
        <Stepper activeStep={activeStep} orientation="vertical">

          {/* for personal info */}


          <Step >
            <StepLabel>
              Personal Info
            </StepLabel>
            <StepContent>
              <Typography>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField id="outlined-basic" label="First Name" variant="outlined" value={firstName} onChange={(e) =>{
                    setFirstName(e.target.value )
                  }}/>
                  <TextField id="outlined-basic" label="Last Name" variant="outlined" value={lastName} onChange={(e) =>{
                    setLastName(e.target.value ) }}/>
                  <TextField id="outlined-basic" label="Phone Number" type="tel" variant="outlined" value={phoneNumber} onChange={(e) =>{
                    setPhoneNumber(e.target.value  ) }}/>
                  <TextField id="outlined-basic" label="Email Address" type="email" variant="outlined" value={email} onChange={(e) =>{
                    setEmail(e.target.value)  }}/>
                  <TextField id="outlined-basic" type="date" variant="outlined" value={dateofbirth} onChange={(e) =>{
                    setDateofbirth(e.target.value ,"") }}/>


                </Box>
              </Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Next
                  </Button>
                  <Button
                    disabled
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>

          {/* educational details */}
          <Step >
            <StepLabel>
              Educational Details
            </StepLabel>
            <StepContent>
              <Typography>
                <Box
                  component="form"
                  sx={{
                    '& > :not(style)': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <TextField id="outlined-basic" label="School/College Name" variant="outlined" value={schoolName} onChange={(e) =>{
                    setSchoolName(e.target.value  )}}/>
                  <TextField id="outlined-basic" label="School/College Address" variant="outlined" value={schoolAddress} onChange={(e) =>{
                    setSchoolAddress(e.target.value )}}/>

                </Box>
              </Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Next
                  </Button>
                  <Button

                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>


          {/* Target exams */}
          <Step >
            <StepLabel>
              Target Exams
            </StepLabel>
            <StepContent>
              <Typography>
                <FormControl className={classes.formControl}>
                  <InputLabel id="mutiple-select-label">Select Your Targeted Exams</InputLabel>
                  <Select
                    labelId="Select Your Targeted Exams"
                    multiple
                    value={selected}
                    onChange={handleChange}
                    renderValue={(selected) => selected.join(", ")}
                    MenuProps={MenuProps}
                  >
                    <MenuItem
                      value="all"
                      classes={{
                        root: isAllSelected ? classes.selectedAll : ""
                      }}
                    >
                      <ListItemIcon>
                        <Checkbox
                          classes={{ indeterminate: classes.indeterminateColor }}
                          checked={isAllSelected}
                          indeterminate={
                            selected.length > 0 && selected.length < options.length
                          }
                        />
                      </ListItemIcon>
                      <ListItemText
                        classes={{ primary: classes.selectAllText }}
                        primary="Select All"
                      />
                    </MenuItem>
                    {options.map((option) => (
                      <MenuItem key={option} value={option}>
                        <ListItemIcon>
                          <Checkbox checked={selected.indexOf(option) > -1} />
                        </ListItemIcon>
                        <ListItemText primary={option} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
              </Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Next
                  </Button>
                  <Button

                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    Back
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
          {/* Role */}
          <Step >
            <StepLabel>
              Role
            </StepLabel>
            <StepContent>
              <Typography>
                <Box
                  component="form"
                  sx={{
                    '& .MuiTextField-root': { m: 1, width: '25ch' },
                  }}
                  noValidate
                  autoComplete="off"
                >
                  <div>
                    <TextField
                      id="outlined-select-currency"
                      select
                      label="Select"
                      value={role}
                      onChange={(e)=>{
                        setRole(e.target.value  )
                      }}
                      helperText="Student/Examiner"
                    >
                      {currencies.map((option) => (
                        <MenuItem key={option.value} value={option.value}>
                          {option.label}
                        </MenuItem>
                      ))}
                    </TextField>

                  </div>
                </Box>
              </Typography>
              <div>
                <Button
                  variant="contained"
                  onClick={handleFinish}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Finish
                </Button>
                <Button

                  onClick={handleBack}
                  sx={{ mt: 1, mr: 1 }}
                >
                  Back
                </Button>
              </div>


            </StepContent>
          </Step>

        </Stepper>
        {activeStep === 4 && (
          <Paper square elevation={0} sx={{ p: 3 }}>
            <Typography>All steps completed - you&apos;re finished</Typography>
            <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
              Reset
            </Button>
          </Paper>
        )}
      </Box>
    </div>
  );
}
