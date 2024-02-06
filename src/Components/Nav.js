
import '../Css/Nav.css'
import {Link,Outlet} from "react-router-dom";
import { useEffect,useState } from 'react';

import Swal from 'sweetalert2'
import axios from 'axios';
const Nav = () => {
  const [token, setToken] = useState(null);
  const [mail, setmail] = useState(null);
  const [pic, setpic] = useState();
  const [firstname, setfirstname] = useState(null);
  useEffect(() => {
    // Fetch the token from localStorage when the component mounts
    const Token = localStorage.getItem("Token");
    const username=localStorage.getItem("Profile");

   const avatar= localStorage.getItem("Avatar");
   const usermail=localStorage.getItem("Mail");

    if(Token!=null){

      setToken(Token)
console.log("I have a token: " + token);
    }
   if(username!=null){

setfirstname(username);

   }
   if(usermail!=null){

    setmail(usermail);
    
       }


       if(avatar!=null){

       setpic(avatar)
       console.log(avatar);
        
           }
    


  }, []); 

   const handleLogout=()=>{

logout()






   }
const logout= async ()=>{

  const URL = "http://127.0.0.1:8080/api/v1/logout";
try{
  const response= await axios.get(URL);

  if(response){


   const Token= localStorage.removeItem('Token')
localStorage.removeItem('Avatar');

localStorage.removeItem('Profile');

localStorage.removeItem("Mail");


console.log("response logut is "+response.data);
window.location="/";
  }


}catch(e){



}






}














  return (
    <>
  {
    token ?
  <div className='userProfile text-center '>

<ul>
<p><strong>{firstname}</strong></p>
<strong> {mail}</strong>


</ul>
<button className='btn btn-danger m-auto text-center w-50' onClick={handleLogout}>Logout</button>
  </div>
  :("")

}


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

{

token ?
      <form className="d-flex " role="search">
        <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
        <button className="btn btn-outline-success" type="submit">Search</button>
         <li className="nav-item" style={{listStyle:"none",marginTop:"2px"}}>
        <Link to="/Login"><img src={pic}className='img-fluid' style={{width:'50px' }}/></Link>
        </li>
      </form> 
      :
      ( <form className="d-flex" role="search">
      <input className="form-control me-2" type="search" placeholder="Search" aria-label="Search" />
      <button className="btn btn-outline-success" type="submit">Search</button>
       <li className="nav-item" style={{listStyle:"none",marginTop:"5px"}}>
      <Link to="/Login">Login</Link>
      </li>
    </form>)
}
      



    </div>

    </div>
  
   


</nav>







 
    <Outlet />
    </>
  )
}

export default Nav