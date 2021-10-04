import React, { useEffect, useState } from 'react';
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

  const submit = (e) => {
    e.preventDefault()
    if(checkValidation()){}
  }

  return (
    <div className="cus-auth-container">
      <div className="cus-container">
        <div className="auth-inner-container">
          <div className="cus-container-row">

            <div className="left-sec">
              <div className="auth-left-sec">
                <h2>Sample heading</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum distinctio incidunt quae voluptas tempore dolorem, autem officia libero soluta.</p>
              </div>
            </div>

            <div className="right-sec">
              <div className="auth-right-sec">
                <h2>Create an account</h2>
                <form onSubmit={submit}>

                  <div className="rep-listing">
                    <div className={`mb-5 rep-sec full-width ${errors.email ? 'err-msg' : ''}`}>
                      <label>Enter your email</label>
                      <input 
                        type="text"
                        className="full-width"
                        value={email}
                        name="email"
                        onChange={handleChange}
                      />
                    </div>
                    {
                      errors.email ?
                        <span className="error"><span>{errors.email}</span></span>
                      :
                      null
                    }
                  </div>

                  <div className="mb-5 rep-sec full-width">
                    <label>Date of birth <span>(Optional)</span></label>
                    <div className="date-of-birth">
                      <ul>
                        <li>
                          <label>Date</label>
                          <input
                            type="number"
                            defaultValue="03"
                            className="full-width"
                          />
                        </li>
                        <li>
                          <label>March</label>
                          <select
                            labelId="month-select-label"
                            id="month-select"
                            value={month || 3}
                            label="month"
                            onChange={handleMonthChange}
                            variant="outlined"
                            className="full-width"
                          >
                            <option value={1}>January</option>
                            <option value={2}>February</option>
                            <option value={3}>March</option>
                            <option value={4}>April</option>
                            <option value={5}>May</option>
                            <option value={6}>June</option>
                            <option value={7}>July</option>
                            <option value={8}>August</option>
                            <option value={9}>September</option>
                            <option value={10}>October</option>
                            <option value={11}>November</option>
                            <option value={12}>December</option>
                          </select>
                        </li>
                        <li>
                          <label>Year</label>
                          <select
                            labelId="year-select-label"
                            id="year-select"
                            value={year || 1}
                            label="Year"
                            onChange={handleYearChange}
                            variant="outlined"
                            className="full-width"
                          >
                            <option value={1}>1995</option>
                            <option value={2}>1996</option>
                            <option value={3}>1997</option>
                            <option value={4}>1998</option>
                            <option value={5}>1999</option>
                            <option value={6}>2000</option>
                            <option value={7}>2001</option>
                            <option value={8}>2002</option>
                            <option value={9}>2003</option>
                            <option value={10}>2004</option>
                            <option value={11}>2004</option>
                            <option value={12}>2004</option>
                          </select>
                        </li>
                      </ul>                   
                      
                    </div>
                  </div>

                  <div className="rep-listing">
                    <div className={`mb-5 rep-sec full-width ${errors.password ? 'err-msg' : ''}`}>
                      <label>Chosse a strong password</label>
                      <input
                        type="password"
                        name="password"
                        value={password}                     
                        onChange={handleChange}
                        className="full-width"
                      />
                    </div>
                    {
                      errors.password ?
                        <span className="error"><span>{errors.password}</span></span>
                      :
                      null
                    }
                  </div>

                  <div className="mb-2 rep-sec full-width cus-radio-sec">
                    <label>Are you an agency or individual?</label>
                    <ul>
                      <li>
                        <input type="radio" id="individual" name="cus-radio-field" value="individual" checked />
                        <label for="individual">Individual</label>
                      </li>
                      <li>
                         <input type="radio" id="agency" name="cus-radio-field" value="agency" />
                         <label for="agency">Agency</label>
                      </li>
                    </ul>
                  </div>

                  <div className="full-width">
                    <button type="submit" className="cus-btn" onClick={submit}>Submit</button>
                  </div>

                </form>
              </div>

            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
