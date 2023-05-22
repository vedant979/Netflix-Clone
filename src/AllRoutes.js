import React from 'react'
import { Routes, Route } from 'react-router-dom';
import {HomePage} from "./pages/HomePage/HomePage"
import {SignUp}  from './pages/SignUp/SignUp';
import { SignIn } from './pages/SignIn/SignIn';
export const AllRoutes = () => {
  return (
    <>
    <Routes>
        <Route exact path="/" Component={SignUp}/>
        <Route exact path="/auth" Component={SignIn}/>
        <Route exact path="/home" Component={HomePage}/>
    </Routes>
    </>
  )
}
