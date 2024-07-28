import React, { useState } from "react";
import "./auth.css";
import Background from "./Background";
import { useNavigate } from "react-router-dom";
export default function Signup() {
  const [name,setname] = useState('')
  const [email,setemail] = useState('')
  const [password,setpassword]=useState('')

  const submit = (err)=>{
    err.preventDefault();
    const uDetails = {name,email,password}
    localStorage.setItem('uDetails', JSON.stringify(uDetails))
    alert("Autenctication Successful!")
    navigate('/home')
  }
  const navigate = useNavigate(); 
  const goto=()=>{
    navigate('/login')
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
          <h3>Sign Up</h3>
          <label>Name:</label>
          <input type="text" value={name} onChange={(e)=>{setname(e.target.value)}} required/>
          <label>Email:</label>
          <input type="email" value={email} onChange={(e)=>{setemail(e.target.value)}} required/>
          <label>Password:</label>
          <input type="password" value={password} onChange={(e)=>{setpassword(e.target.value)}} required/><br></br>
          <input type="submit" value="Sign Up" />
          <div className="togglem" onClick={goto}>Already have an account?<span className="toggle">  Login</span></div>
        </form>
      </div>
    </div>
  );
}
