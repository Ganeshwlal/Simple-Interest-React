import './App.css';
import { Button, TextField } from '@mui/material';
import Stack from '@mui/material/Stack';
import { useState } from 'react';


function App() {

  //state to hold values

  const [principle, setPrinciple] = useState(0)
  const [interest, setInterest] = useState(0)
  const [year, setYear] = useState(0)
  const [result, setResult] = useState(0)

  const handleSubmit=(e)=>{
    //to prrevent reloading
    e.preventDefault()
    //check
    if(principle=='' || interest=='' || year==''){
      alert('please enter valid inputs')
    }
    else{
      console.log(principle);
      console.log(interest);
      console.log(year);

      let output = principle * interest * year / 100

      setResult(output)
    }

  }

  const handleReset=()=>{
    setResult(0)
    setPrinciple('')
    setInterest('')
    setYear('')
  }


  return (
    <div className="app">
      <div className="container">

        <div className="heading_text">
          <h1 className="heading_one">Simple Calculator</h1>
          <p className="heading_two">Calculate your simple interest easily</p>
        </div>

        <div className="total_amount_card">
          <div className="card_text">
            <h3 className="total_amount_heading">₹ {result}</h3>
            <p className="total_amount_para">Total Simple Interest</p>
          </div>

        </div>

        <form onSubmit={handleSubmit}>
          <div className="inputs">

            <div className="input_field">
              <TextField value={principle || ''} onChange={e=>setPrinciple(e.target.value)} id="outlined-basic" className='outlined-basic' type='number' label="₹ Principle Amount" variant="outlined" />
            </div>

            <div className="input_field">
              <TextField value={interest} onChange={e=>setInterest(e.target.value)} id="outlined-basic1" className='outlined-basic' type='number' label="Rate of interest (p.a)%" variant="outlined" />
            </div>

            <div className="input_field">
              <TextField value={year} onChange={e=>setYear(e.target.value)} id="outlined-basic2" className='outlined-basic' type='number' label="Time period(yr)" variant="outlined" />
            </div>

          </div>

          <div className="buttons">
          <Stack direction="row" spacing={5}>

            <Button type='submit' className='btn' style={{backgroundColor:"black"}} variant="contained">Calculate</Button>
            <Button onClick={handleReset} className='btn' variant="outlined">Reset</Button>
            </Stack>
          </div>
        </form>

      </div>
    </div>
  );
}

export default App;
