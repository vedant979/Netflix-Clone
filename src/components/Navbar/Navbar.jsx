import React, { useEffect, useState } from 'react';
import Logo from '../../assets/logo.png';
import Search from '../../assets/search-13-64.png';
import { Link, NavLink, useLocation, useNavigate } from 'react-router-dom';
import bell from '../../assets/bell.png';
import {Avatar} from '../Avatar/Avatar';
import {firebaseAuth} from "../../firebase";
import "./Navbar.css";
import { getAuth, signOut } from "firebase/auth";
import {
    createUserWithEmailAndPassword, onAuthStateChanged
  } from "firebase/auth"
export const Navbar = () => {

    const navigate = useNavigate();
    const location = useLocation();
    const[show, setShow] = useState(false);
    const[page, setPage] = useState(false);
    var user = true;
    if(location.pathname==="/home"){
        user=false;
    }

    function handleScroll(){
        if(window.scrollY>50){
            setShow(true);
        }else{
            setShow(false);
        }
    }

    useEffect(()=>{
        window.addEventListener('scroll', handleScroll);
        return ()=>{
            window.removeEventListener('scroll', handleScroll);
        }
    },[])
    const handleSignout = (e)=>{
        signOut(firebaseAuth)
        navigate("/auth");
        e.preventDefault();

    }
    // useEffect(()=>{
    //     onAuthStateChanged(firebaseAuth, (currentUser)=>{
    //         if(!currentUser) {navigate("/auth")}
    //       });
    // },[])

    return (
    <nav className= {`navBar ${show && "nav_black"}`}>
        <div className='left-nav-menu'>
            <Link to="" className='nav-items'>
                <img src={Logo} className="logo"style={{height:"48px"}} alt="img"></img>
            </Link>
               
               { location.pathname!=="/auth" &&

                <Link to="/auth"className='nav-item nav-links'>
                    <button className="btn-signin" onClick={handleSignout}>
                        {
                            !user ? "Sign out" : "Sign in"
                        }
                        </button>
                </Link>
           }

        </div>
    </nav>
  )
}
