import React from "react";
import '../Css/Login.css'
import {Link,Outlet} from "react-router-dom";
const Login = () => {
  return <>
  
<div className="container text-center mt-5">

<div className="row">


<div className="col-md-6  col-12 left-sec">

<h2 className="text-white vertical-align">Welcome to <span className="text-primary">comforzone</span></h2>

<p className="w-50">Welcome to our comprehensive real 
    estate platform, the ultimate 
    destination for buying and selling 
    properties. </p>



</div>




<div className="col-md-6 col-12 right-sec  card">




<div className="">


<form>
  <div className="mb-3">


    <h2>Login Page</h2>
  <input type="email" className="form-control w-50 m-auto mb-3" id="exampleInputEmail1" aria-describedby="emailHelp" placeholder="enter your mail address"/>
  <div id="emailHelp" className="form-text"></div>
  <div className="mb-3">
    <input type="password" className="form-control w-50 m-auto mb-3" id="exampleInputPassword1"  placeholder="enter your password"/>
  </div>

</div>

  <button type="submit" class="btn btn-primary w-50 ">Submit</button>

 <p><a href="">forget password?</a></p> 

  <p>Don't have account?</p>

  <li className="nav-item">
        <Link to="/Signup">Signup here</Link>
        </li>
</form>







</div>





</div>







</div>














</div>
  
  
  
  
  </>;
};

export default Login;
