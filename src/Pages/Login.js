import React from "react";
import '../Css/Login.css'
import {Link,Redirect, redirect} from "react-router-dom";
import { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'
const Login = () => {

  const [Data, setData] = useState({

userEmail:'',
userPassword:'',

  });
  

const onChangeHandle=(e)=>{

setData({

  ...Data,

  [e.target.name]: e.target.value


})



}
const postData = async () => {
  const UR = "http://127.0.0.1:8080/api/v1/login";

  // const history = useHistory();

  try {
    const response = await axios.post(UR, Data,{

      headers: {
        'Content-Type': 'application/x-www-form-urlencoded',
        'Access-Control-Allow-Origin': '*',
        // Add other headers if necessary
      }

    });

    if (response) {
      console.log("Data from server: ", response);


      

      if (response.data) {
        // Extract the token and user details
       // Assuming your token key is 'token'
const email=response.data[0];
const AuthToken=response.data[1];
const profile_name=response.data[2];

const avatar=response.data[4]; 















const Profile =localStorage.setItem("Profile",profile_name);
const storeToken =localStorage.setItem("Token",AuthToken);

       
const mail=localStorage.setItem("Mail",email);
        // Assuming 'token' is a property of 'Secure-Key'



try{

  

// Create a Blob object from the decoded data
const blob = new Blob([avatar], { type: 'image/*' });

// Generate an image URL from the Blob object
const imageUrl = URL.createObjectURL(blob);
    // Log the imageUrl
    console.log('Image URL:',+ imageUrl);

    console.log('Blob:', blob);
    const Avatar_user =localStorage.setItem("Avatar",imageUrl);
}


catch(error){

  console.error('Error creating Blob or URL:', error);


}




      }





      Swal.fire({
        icon: "success",
        title: "Success",
        text: "Authenticated"
      });
      // Programmatically redirect to another page
      window.location.href = '/';
    // Store the received token securely in localStorage
    // const token = response.data;
    // localStorage.setItem('authToken', token);


    }




  } catch (error) {

    if (error.response && error.response.status === 401) {

      Swal.fire({
        icon: "error",
        title: "incorrect",
        text: "email or password incorrect"
      });
      console.log("Username or password is incorrect.");
    } else {
      console.error("Something went wrong:", error.message);
      Swal.fire({
        icon: "error",
        title: "incorrect",
        text: "email or password incorrect"
      });
    }

  }
};

const HandleForm = (e) => {
  e.preventDefault();
  console.log("Form data is: ", Data.userEmail);

  // Call the postData function here
  postData();
}






  return <>
  
<div className="container cont-login text-center mt-5">

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


<form onSubmit={HandleForm}>
  <div className="mb-3">


    <h2>Login Page</h2>
  <input type="email"
   className="form-control w-50 m-auto mb-3" 
   id="exampleInputEmail1"
    aria-describedby="emailHelp" 
    name="userEmail"
    placeholder="enter your mail address"
    
    value={Data.userEmail}
    onChange={onChangeHandle}
    
    />
  <div id="emailHelp" 
  className="form-text">


  </div>
  <div className="mb-3">
    <input type="password"
    name="userPassword"
     className="form-control w-50 m-auto mb-3"
     value={Data.userPassword}
     onChange={onChangeHandle}

      id="exampleInputPassword1"  placeholder="enter your password"/>
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
