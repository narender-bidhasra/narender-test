import React, { useEffect, useState } from 'react';
import { Container, Grid, Button, TextField, Box, Select, FormControl, MenuItem, Radio, RadioGroup, FormControlLabel, Tooltip } from '@material-ui/core'
import { validateSignin } from './validation';


function App() {

  const [month, setMonth] = React.useState('');
  const [year, setYear] = React.useState('');

  const handleMonthChange = (event) => {
    setMonth(event.target.value);
  };
  const handleYearChange = (event) => {
    setYear(event.target.value);
  };

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState({});
      
  const checkValidation = () => {
    const { isValid, errors } = validateSignin({email,password});
    setErrors({ ...errors })
    return isValid;
  }

  const handleChange = (e) => {
    const { name = "", value = ""} = e.target
    if(name == 'email'){
      setEmail(value)
    }else if (name == 'password'){
      setPassword(value)
    }
  } 

  const submit = () => {
    if(checkValidation()){}
  }

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

                  <div className="rep-listing">
                    <FormControl variant="standard" fullWidth className={`mb-5 ${errors.email ? 'err-msg' : ''}`}>
                      <label>Enter your email</label>
                      <TextField 
                        type="text"
                        variant="outlined"
                        fullWidth
                        size="small"
                        value={email}
                        name="email"
                        onChange={handleChange}
                      />
                    </FormControl>
                    {
                      errors.email ?
                        <span className="error"><span>{errors.email}</span></span>
                      :
                      null
                    }
                  </div>

                  <FormControl variant="standard" fullWidth className="mb-5">
                    <label>Date of birth <span>(Optional)</span></label>
                    <div className="date-of-birth">
                      <ul>
                        <li>
                          <label>Date</label>
                          <TextField
                            type="text"
                            variant="outlined"
                            defaultValue="03"
                            size="small"
                            fullWidth
                          />
                        </li>
                        <li>
                          <label>March</label>
                          <Select
                            labelId="month-select-label"
                            id="month-select"
                            value={month || 3}
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
                            value={year || 1}
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

                  <div className="rep-listing">
                    <FormControl variant="standard" fullWidth className={`mb-5 ${errors.password ? 'err-msg' : ''}`}>
                      <label>Chosse a strong password</label>
                      <TextField
                        type="password"
                        variant="outlined" 
                        size="small"
                        name="password"
                        value={password}                     
                        onChange={handleChange}
                      />
                    </FormControl>
                    {
                      errors.password ?
                        <span className="error"><span>{errors.password}</span></span>
                      :
                      null
                    }
                  </div>

                  <FormControl variant="standard" fullWidth className="mb-2">
                    <label>Are you an agency or individual?</label>
                    <RadioGroup row aria-label="individual-agency" name="radio-buttons-group" className="cus-radio-group" defaultValue="individual">
                      <FormControlLabel value="individual" control={<Radio />} label="Individual" />
                      <FormControlLabel value="agency" control={<Radio />} label="Agency" />
                    </RadioGroup>
                  </FormControl>

                  <FormControl fullWidth>
                    <Button className="cus-btn" onClick={submit}>Submit</Button>
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
