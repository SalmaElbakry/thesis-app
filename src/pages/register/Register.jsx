import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import "./register.scss"
import  axios  from "axios";

const Register = () => {

  const [inputs, setInputs] = useState({
     username:  "",
     email:  "",
     password:  "",
     name:  "",
  })

  const [err, setErr] = useState(null);

  // the names at the bottom (in input) to their values (in the use state part)
  const handleChange = e => {
    setInputs(prev => ({...prev, [e.target.name]:e.target.value}))
  }
  // works
  // console.log(inputs)

  const handleClick = async e =>{
    // so it does not refresh the page
    e.preventDefault();

    
    try{
      await axios.post("http://localhost:8800/api/auth/register", inputs)
    } catch (err){
      setErr(err.response.data);
    }
  }

  console.log(err);

  return (
    <div className="register">
    <div className="card">
      <div className="left">
        <h1>Craft Cultivate</h1>
        <p>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Aliquid tempora amet neque laboriosam distinctio at!</p>
        <span>Do you have an account?</span>
        <Link to="/login">
        <button>Login</button>
        </Link>
      </div>
      <div className="right">
        <h1>Register</h1>
        <form >
          <input type="text" placeholder='Username' name = "username" onChange={handleChange}/>
          <input type="email" placeholder='Email' name = "email" onChange={handleChange}/>
          <input type="password" placeholder='Password' name = "password" onChange={handleChange}/>
          <input type="text" placeholder='Name' name = "name" onChange={handleChange}/>
          {err && err}
          <button onClick={handleClick}>Register</button>
        </form>
      </div>
    </div>
    </div>
  )
}

export default Register;