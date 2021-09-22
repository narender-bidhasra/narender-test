import React, { useState } from 'react';
import { Container, Grid, Button, TextField, Box, Select, FormControl, MenuItem, Radio, RadioGroup, FormControlLabel, FormLabel } from '@material-ui/core'


function App() {

  const [month, setMonth] = React.useState('');
  const [year, setYear] = React.useState('');

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  // const [email, setEmail] = useState("");
  // const [password, setPassword] = useState("");
  // const [emailError, setEmailError] = useState("");
  // const [passwordError, setPasswordError] = useState("");
      
  // function handleUserInput(e)  {
  //   e.preventDefault();      
  //   setEmail(e.target.value);
  // };

  return (
    <div className="cus-auth-container">
      <Container maxWidth="lg">
        <div className="auth-inner-container">
          <Grid container>

            <Grid item lg={5} md={5} sm={12} xs={12}>
              <div className="auth-left-sec">
                <h2>Sample heading</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio incidunt quae voluptas tempore dolorem, autem officia libero soluta.</p>
              </div>
            </Grid>

            <Grid item lg={7} md={7} sm={12} xs={12}>
              <div className="auth-right-sec">
                <h2>Create an account</h2>
                <Box component="form">

                  <FormControl variant="standard" fullWidth className="mb-5">
                    <label>Enter your email</label>
                    <TextField 
                      label=""
                      color=""
                      variant="outlined"
                      fullWidth
                      defaultValue="03"
                      size="small"
                      // value={email}
                      // onChange={handleUserInput}
                    />
                    <p class="error">Please add valid email address</p>
                  </FormControl>

                  <FormControl variant="standard" fullWidth className="mb-5">
                    <label>Date of birth <span>(Optional)</span></label>
                    <div className="date-of-birth">
                      <ul>
                        <li>
                          <label>Date</label>
                          <TextField label="" color="" variant="outlined" defaultValue="03" size="small" fullWidth />
                        </li>
                        <li>
                          <label>March</label>
                          <Select
                            labelId="month-select-label"
                            id="month-select"
                            value={month}
                            label="month"
                            onChange={handleMonthChange}
                            variant="outlined"
                            fullWidth
                            size="small"
                          >
                            <MenuItem value={1}>January</MenuItem>
                            <MenuItem value={2}>February</MenuItem>
                            <MenuItem value={3}>March</MenuItem>
                            <MenuItem value={4}>April</MenuItem>
                            <MenuItem value={5}>May</MenuItem>
                            <MenuItem value={6}>June</MenuItem>
                            <MenuItem value={7}>July</MenuItem>
                            <MenuItem value={8}>August</MenuItem>
                            <MenuItem value={9}>September</MenuItem>
                            <MenuItem value={10}>October</MenuItem>
                            <MenuItem value={11}>November</MenuItem>
                            <MenuItem value={12}>December</MenuItem>
                          </Select>
                        </li>
                        <li>
                          <label>Year</label>
                          <Select
                            labelId="year-select-label"
                            id="year-select"
                            value={year}
                            label="Year"
                            onChange={handleYearChange}
                            variant="outlined"
                            fullWidth
                            size="small"
                          >
                            <MenuItem value={1}>1995</MenuItem>
                            <MenuItem value={2}>1996</MenuItem>
                            <MenuItem value={3}>1997</MenuItem>
                            <MenuItem value={4}>1998</MenuItem>
                            <MenuItem value={5}>1999</MenuItem>
                            <MenuItem value={6}>2000</MenuItem>
                            <MenuItem value={7}>2001</MenuItem>
                            <MenuItem value={8}>2002</MenuItem>
                            <MenuItem value={9}>2003</MenuItem>
                            <MenuItem value={10}>2004</MenuItem>
                            <MenuItem value={11}>2004</MenuItem>
                            <MenuItem value={12}>2004</MenuItem>
                          </Select>
                        </li>
                      </ul>                   
                      
                    </div>
                  </FormControl>

                  <FormControl variant="standard" fullWidth className="mb-5">
                    <label>Chosse a strong password</label>
                    <TextField label="" color="" variant="outlined" size="small" value="" />
                    <p class="error">Please add valid password</p>
                  </FormControl>

                  <FormControl variant="standard" fullWidth className="mb-2">
                    <label>Are you an agency or individual?</label>
                    <RadioGroup row aria-label="individual-agency" name="radio-buttons-group" className="cus-radio-group" defaultValue="individual">
                      <FormControlLabel value="individual" control={<Radio />} label="Individual" />
                      <FormControlLabel value="agency" control={<Radio />} label="Agency" />
                    </RadioGroup>
                  </FormControl>

                  <FormControl fullWidth>
                    <Button className="cus-btn">Submit</Button>
                  </FormControl>

                </Box>
              </div>

            </Grid>
          </Grid>
        </div>
      </Container>
    </div>
  );
}

export default App;
