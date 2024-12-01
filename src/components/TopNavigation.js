import React from 'react'
import { NavLink } from 'react-router-dom'
import LogOut from './LogOut';

function TopNavigation() {
  return (
    <nav id='navbar'>
        <NavLink to={"/Home"}>Home</NavLink>
        <NavLink to={"/"}>Login</NavLink>
        {/* <NavLink to={"/dashboard"}>Dashboard</NavLink> */}
        <NavLink to={"/signup"}>SignUp</NavLink>
        <NavLink to={"/logout"}>LogOut</NavLink>
    </nav>
  )
}

export default TopNavigation;