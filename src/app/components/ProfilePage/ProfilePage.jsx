import React, { useState } from 'react';
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
import { eduoptions } from './Data';
import AddCircle from '@material-ui/icons/AddCircle';
import { makeStyles } from '@material-ui/core/styles';
import AddCircleRoundedIcon from '@mui/icons-material/AddCircleRounded';
import { IconButton, ToggleButton } from '@mui/material';




// import SimpleCheckbox from 'app/views/material-kit/checkbox/SimpleCheckbox';

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


  //usestyles

  const useStyles = makeStyles((theme) => ({
    root: {
      '& > *': {
        margin: theme.spacing(1),
      },
    },
  }));

  // end point for target exams
  const classes = useStyles();
  const [selected, setSelected] = useState([]);
  const isAllSelected =
    options.length > 0 && selected.length === options.length;

  const handleChange = (event) => {
    const value = event.target.value;

    if (value[value.length - 1] === "all") {
      setSelected(selected.length === options.length ? [] : options);
      return ("");
    }
    setSelected(value);
  };

  //

  const [grade, setGrade] = useState([]);
  const isAllgradeSelected =
    eduoptions.length > 0 && grade.length === eduoptions.length;

  const changeHandler = (event) => {
    const value = event.target.value;

    if (value[value.length - 1] === "all") {
      setGrade(grade.length === eduoptions.length ? [] : eduoptions);
      return ("");
    }
    setGrade(value);
  };

  // end point for role
  const [role, setRole] = React.useState('');
  // buttons 
  const [activeStep, setActiveStep] = React.useState(0);

  //

  const [show, setShow] = useState(false)
  const onClickHandler =() =>{
       setShow(!show)
  }

  const [primarySchool, setPrimarySchool] = useState("")
  const [secondarySchool, setSecondarySchool] = useState("")
  const [collegeName, setCollegeName] = useState("")

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  const handleReset = () => {
    setActiveStep(0);
    setLastName("");
    setPhoneNumber("")
    setDateofbirth("")
    setEmail("")
    setSchoolAddress("")
    setSchoolName("")
    setRole("")
    setSelected("")
    setGrade("")
    setPrimarySchool("")
    setSecondarySchool("")
    collegeName("")
  };

  const handleFinish = () => {


    setActiveStep((prevActiveStep) => prevActiveStep + 1);

    const user = {
      firstName: firstName,
      lastName: lastName,
      phoneNumber: phoneNumber,
      email: email,
      dateofbirth: dateofbirth,
      schoolName: schoolAddress,
      schoolAddress: schoolAddress,
      role: role,
      selected: selected

    }
    const data = JSON.stringify(user);


    console.log(data)
  };

  const educationalData = {
    primarySchool: primarySchool,
    secondarySchool: secondarySchool,
    collegeName: collegeName
  

  }
  const eduData= JSON.stringify(educationalData);


  console.log(eduData)


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
                
                <TextField id="standard-basic" label="FirstName" variant="standard" value={firstName} onChange={(e) => {
                  setFirstName(e.target.value)
                }} />
                <TextField id="standard-basic" label="Last Name" variant="standard" value={lastName} onChange={(e) => {
                  setLastName(e.target.value)
                }} />
                <TextField id="standard-basic" label="Phone Number" type="tel" variant="standard" value={phoneNumber} onChange={(e) => {
                  setPhoneNumber(e.target.value)
                }} />
                <TextField id="standard-basic" label="Email Address" type="email" variant="standard" value={email} onChange={(e) => {
                  setEmail(e.target.value)
                }} />
                <TextField id="standard-basic" type="date" variant="standard" value={dateofbirth} onChange={(e) => {
                  setDateofbirth(e.target.value)
                }} />


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
                <TextField id="standard-basic" label="School/College Name" variant="standard" value={schoolName} onChange={(e) => {
                  setSchoolName(e.target.value)
                }} />
                <TextField id="standard-basic" label="School/College Address" variant="standard" value={schoolAddress} onChange={(e) => {
                  setSchoolAddress(e.target.value)
                }} />
                <FormControl className={classes.formControl}>
                  <InputLabel id="mutiple-select-label">Grade</InputLabel>
                  <Select
                    labelId="grades"
                    multiple
                    value={grade}
                    onChange={changeHandler}
                    renderValue={(selectedgrade) => selectedgrade.join(", ")}
                    MenuProps={MenuProps}
                  >
                    <MenuItem
                      value="all"
                      classes={{
                        root: isAllgradeSelected ? classes.selectedAll : ""
                      }}
                    >
                      <ListItemIcon>
                        <Checkbox
                          classes={{ indeterminate: classes.indeterminateColor }}
                          checked={isAllgradeSelected}
                          indeterminate={
                            grade.length > 0 && grade.length < eduoptions.length
                          }
                        />
                      </ListItemIcon>
                      <ListItemText
                        classes={{ primary: classes.selectAllText }}
                        primary="Select All"
                      />
                    </MenuItem>
                    {eduoptions.map((goption) => (
                      <MenuItem key={goption} value={goption}>
                        <ListItemIcon>
                          <Checkbox checked={grade.indexOf(goption) > -1} />
                        </ListItemIcon>
                        <ListItemText primary={goption} />
                      </MenuItem>
                    ))}
                  </Select>
                </FormControl>
                <div className='addeducation'>
                  <div className="headlines"> <h4 className='headline'>Add Education</h4>
                    <IconButton onClick={onClickHandler}><AddCircleRoundedIcon /></IconButton></div>

                </div>
              </Box>
            </Typography>

           {show ?  <Box sx={{ mb: 2 }} className="box-one">
              <Typography>
                <Box >
                  <form className={classes.root} noValidate autoComplete="off">
                    <TextField id="standard-basic" label="Primary School Name" value={primarySchool} onChange={(e) => {
                  setPrimarySchool(e.target.value)
                }} />
                    <TextField id="standard-basic" label="Secondary School Name" value={secondarySchool} onChange={(e) => {
                  setSecondarySchool(e.target.value)
                }} />
                    <TextField id="standard-basic" label="College Name" value={collegeName} onChange={(e) => {
                  setCollegeName(e.target.value)
                }} />
                  
                  </form>
                </Box>
              </Typography>
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
            </Box> : null}
          </StepContent>
        </Step>


        {/* Target exams */}
        <Step >
          <StepLabel>
            Target Exams
          </StepLabel>
          <StepContent>
            <Typography>
               <Box>
               <FormControl className={classes.formControl}>
   
   <Select
     labelId="mutiple-select-label"
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
                    id="standard-select-currency"
                    select
                    label="Select"
                    value={role}
                    onChange={(e) => {
                      setRole(e.target.value)
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