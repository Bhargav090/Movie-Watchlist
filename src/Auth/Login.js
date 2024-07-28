import React from 'react'
import { useState } from "react";
import "./auth.css";
import Background from "./Background";
import { useNavigate } from "react-router-dom";
export default function Login() {
  const [email,setemail] = useState('')
  const [password,setpassword]=useState('')

  const submit = (err)=>{
    err.preventDefault();
    const uDetails = JSON.parse(localStorage.getItem('uDetails'));
    if (uDetails && uDetails.email=== email && uDetails.password===password){
    alert("Autenctication Successful!")
      navigate('/home')
    }
    else{
      alert('Invalid Crediantials')
    }
  }
  const navigate = useNavigate(); 
  const goto=()=>{
    navigate('/')
  }
  return (
    <div className="auth">
      <Background />
      <div className="name">
        <h3>Welcome to CineCurate</h3>
        <h5 className="second">Your Movie Watchlist App</h5>
        {/* <span className="cine">Cine</span>
        <span className="curate">Curate</span> */}
      </div>
      <div className="form-container">
        <form className="form" onSubmit={submit}>
          <h3>Login</h3>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} required/>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} required/><br></br>
          <input type="submit" value="Login" />
          <div className="togglem" onClick={goto}>Already have an account?<span className="toggle">  Sign Up</span></div>
        </form>
      </div>
    </div>
  );
}
