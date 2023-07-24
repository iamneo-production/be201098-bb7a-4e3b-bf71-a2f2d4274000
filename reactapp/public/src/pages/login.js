// Login.js

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import '../styles/login.css';
import CloseIcon from '@mui/icons-material/Close';
import { IconButton } from '@mui/material';
import { useDispatch } from 'react-redux';
import { login } from './actions';
import axios from 'axios';
// import Home from './home';
const LoginPage = (props)=>{
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const dispatch = useDispatch();
  const handleUserChange = (e) => {
    setUsername(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleSubmit =(e) =>{
    const data = {
      username:username,
      password:password
    }

    e.preventDefault();
    console.log(username+" "+password);
    dispatch(login(username));
    axios.post("http://127.0.0.1:8080/api/auth/signin",data);
};

  return (
    
    
    <div className="container">
    <div>
    <Link to='/'><IconButton className='close'><CloseIcon/></IconButton></Link>
    </div>

    <h2>Login</h2>
    <form onSubmit={handleSubmit}>
    <div className="form-group">
    <label>Username:</label>
    <input
    type="text"
    className="form-control"
    placeholder="Enter username"
    value={username}
    onChange={handleUserChange}
    required
    />
    </div>
    <div className="form-group">
    <label>Password:</label>
    <input
    type="password"
    className="form-control"
    placeholder="Enter password"
    value={password}
    onChange={handlePasswordChange}
    required
    />
    </div>
    <button type="submit"  className="btn btn-primary">Login</button>
    <p5>
    Don't have an account? <Link to="/signup" style={{textDecoration: 'none' ,color: 'red'}}>Sign up</Link>
    </p5>
    </form>
    </div>
  );
}

export default LoginPage  ;
