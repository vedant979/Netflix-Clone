import React from 'react'
import backgroundLogo from "../../assets/background.jpg"
import { Navbar } from '../../components/Navbar/Navbar'
import {firebaseAuth} from "../../firebase";
import { onAuthStateChanged} from "firebase/auth"
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import "./SignIn.css"
import { Link, useLocation, useNavigate } from 'react-router-dom'
import { useState, useEffect } from 'react';

export const SignIn = () => {
  const navigate = useNavigate();
  const location = useLocation();
  const[errorMsg, setErrorMsg] = useState("");

  const[formValues, setFormValues] = useState({
    email:"",
    password:""
  })
  
  const[signIn, setSignIn] = useState(false);
  const handleClick2 = async (e)=>{
    if(formValues.email || formValues.password){
      setErrorMsg("Fill all Fields");
    }
    e.preventDefault();
    setErrorMsg("");

    try{
      const{email, password} = formValues;
      await signInWithEmailAndPassword(firebaseAuth, email, password);
      navigate("/home");
    }catch(err){
      // alert(err);
      setErrorMsg(err.message);

    }
  }
  const handleClick= ()=>{
    navigate("/");
  } 
  useEffect(()=>{
    onAuthStateChanged(firebaseAuth, (currentUser)=>{

      // if(!currentUser){
        // navigate("/");
      // }
      if(currentUser){
        navigate("/home")
      }
      });
  },[])




  return (
    <div style={{
        height:"100vh",
        backgroundImage:`url(${backgroundLogo})`,
        backgroundRepeat:"no-repeat",
        backgroundSize:"cover",
        backgroundPosition:"center"
        }} className='items'>
          <Navbar />
          <div id='form-container'>
            <div className='sign-in-head'>
                <h1 className='header'>
                  Sign In
                </h1>
            </div>
            {/* <form> */}
            <div className='input-items'>

                  {/* <input  value={user.email} onChange={handleChange}></input> */}
                  <input type="email" name="email" placeholder='Email Address' className='form-items' value={formValues.email}
                onChange={(e)=>{
                  e.preventDefault();
                  setFormValues({...formValues, [e.target.name]:e.target.value})
                }}
                ></input>
                  {/* <input type="password"name="Password" placeholder='Password' className='form-items' value={user.password}   onChange={handleChange1}></input> */}
                  <input type="password"name="Password" placeholder='Password' className='form-items' value={formValues.password}
                onChange={(e)=>{
                  e.preventDefault();
                  setFormValues({...formValues, password:e.target.value})
                }}
                ></input>
            </div>
            {/* </form> */}
            <b className='error'>{errorMsg}</b>

            <div className='btn-items'>
              <button type="submit" className='btn-btn-signin' onClick={handleClick2}>Sign in</button>
              <div className='check-box-cont'>
                <div className='container'>
                  <input type="checkbox" id="rem-me"></input>
                  <label for="rem-me" className='check-box-item'>Remember me</label>
                </div>

                <p className='need-help-para'>Need help?</p>
              </div>
              <div className='footer-items'>
                <div className='new-to-netflix'>
                  <p className='sign-up-now'>
                    New to Netflix? <Link  to="/" className="signup-link" onClick={handleClick}>Sign up now.</Link>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
  )
}
