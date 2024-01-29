import React from 'react'
import '../Css/Nav.css'
import {Link,Outlet} from "react-router-dom";
import Swal from 'sweetalert2'
const Nav = () => {
  return (
    <>
  
   
<nav className="navbar navbar-expand-lg ">
  <div className="container-fluid cf">

  <Link to="/" className='logo-name'><h4>ComfortZone</h4></Link>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon" />
    </button>
    <div className="collapse navbar-collapse" id="navbarSupportedContent">
      <ul className="navbar-nav me-auto mb-2 mb-lg-0">
        <li className="nav-item">
        <Link to="/">Home</Link>
        </li>
        <li className="nav-item">
        <Link to="/Places">Places</Link>
        </li>
        <li className="nav-item">
        <Link to="/Contact">Contact</Link>
        </li>
        <li className="nav-item">
        <Link to="/About">About us</Link>
        </li>
    
      
      </ul>
      <form className="d-flex" role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
         <li className="nav-item" style={{listStyle:"none",marginTop:"10px"}}>
        <Link to="/Login">Login</Link>
        </li>
      </form> 
    </div>

    </div>
  



</nav>







 
    <Outlet />
    </>
  )
}

export default Nav