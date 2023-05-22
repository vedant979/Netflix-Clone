import React, { useState } from 'react'
import "./SignUp.css"
import logo from "../../assets/logo.png"
import { Navbar } from '../../components/Navbar/Navbar'
import backgroundLogo from "../../assets/background.jpg"
import { useNavigate } from 'react-router-dom'
import {firebaseAuth , db} from "../../firebase";
import {setDoc, doc} from "firebase/firestore"


import {
  createUserWithEmailAndPassword, onAuthStateChanged
} from "firebase/auth"
import { useEffect } from 'react'
export const SignUp = () => {
  const navigate = useNavigate();
  const[signUp, setSignUp] = useState(false);
  const[formValues, setFormValues] = useState({
    email:"",
    password:""
  })
  const[errorMsg, setErrorMsg] = useState("");
  const[preventDefault, setPreventDefault] = useState(false);
  
  const handleClick2 = async (e)=>{
  setPreventDefault(true);

    e.preventDefault();
    if(formValues.email==="" || formValues.password===""){
      setErrorMsg("Fill all Fields");
    }
    setErrorMsg("");

    try{
      const{email, password} = formValues;
      await createUserWithEmailAndPassword(firebaseAuth, email, password);
      setPreventDefault(false);
      navigate("/home")
    }catch(err){
      setPreventDefault(false);
      setErrorMsg(err.message);
      console.log(err.message)
    }
  }
  // useEffect(()=>{
  //   onAuthStateChanged(firebaseAuth, (currentUser)=>{

  //     if(currentUser) {navigate("/home")}
      
  //   });
  // })

    console.log(errorMsg)
  return (
    <>
    <Navbar/>

    <div className="signUp-comps" style={{
      height:"100vh",
      backgroundImage:`url(${backgroundLogo})`,
      backgroundRepeat:"no-repeat",
      backgroundSize:"cover",
      backgroundPosition:"center"
      }}>
        
        
        <div className='signUp-components'>
          <h1 className='text-part'>Unlimited movies, TV shows and more</h1>
          <h3 className='text-part'>Watch anywhere. Cancel anytime.</h3>
          <p className='text-part'>Ready to watch? Enter your email to create or restart your membership.</p>
          <form className='form-comps' type="submit">
            <div className='form-item'>
            <input id="text-area" type='email' name="email" placeholder='Email Address'  value={formValues.email}
            onChange={(e)=>{
              e.preventDefault();
              setFormValues({...formValues, [e.target.name]:e.target.value})
            } } required
            ></input>
            {/* { signUp ?  */}
            <input type='password' id="text-area1" name="password" required placeholder='Password'value={formValues.password}
            onChange={(e)=>{
              e.preventDefault();
              setFormValues({...formValues, [e.target.name]:e.target.value})
            }}
            ></input>
              {/* // : <button className='btn-getStarted' onClick={handleClick}>Get Started</button> */}
            {/* } */}
            </div>
            <div className='btn-comp'>
            <b className='error'>{errorMsg}</b>

              <button className='btn-signup' type="submit" onClick={handleClick2} disabled={preventDefault}>
                Sign up
              </button>
            </div>

          </form>

        </div>
    </div>
    </>
  )
}
