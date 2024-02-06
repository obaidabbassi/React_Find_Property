import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import Footer from '../Components/Footer';
import axios from 'axios';
import Swal from 'sweetalert2'
import '../Css/Signup.css';
const Signup = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    userEmail: '',
    userPassword: '',
    userAge: '',
    userMobile: '',
    picture: null,
  });
  const [errorMessages, setErrorMessages] = useState([]);
  const FormChanges = (e) => {
    const value = e.target.type === 'file' ? e.target.files[0] : e.target.value;

    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: value,
    }));
  };

//   const HandleForm = (e) => {
//     e.preventDefault();
//     console.log('The form data is ....', formData);

//     let URL="http://127.0.0.1:8080/api/v1/add";

//     const formDataToSend = new FormData();

//     // Append non-file fields
//     for (const key in formData) {
//       if (key !== 'picture') {
//         formDataToSend.append(key, formData[key]);
//       }
//     }



//     // Check if a file is selected
//     if (formData.picture) {
//       formDataToSend.append('picture', formData.picture);
//     } else {
//       // Handle case when no file is selected, e.g., set a default picture
//       // formDataToSend.append('picture', defaultPicture);
//     }



    
//     axios.post(URL, formData,{
//       headers: {
//         'Content-Type': 'multipart/form-data',
//         // 'Content-Type': 'application/x-www-form-urlencoded,multipart/form-data',
//         'Access-Control-Allow-Origin': '*',
//         // Add other headers if necessary
//       }

//     } )

   
//      // Adjust the content type based on your server's requirements
//         // Add any other headers if needed
    
  
  
   
//    .then(response => {


//      if(response.data==="ok"){

     
//       Swal.fire({
    
//         icon: "success",
//         title: "Success..",
//         text :  " user added successfully"
     
//       });



//     console.log("User added...");

   
//      }



//      else{
     
//       console('king 2:', response.data);

//       Swal.fire({
//         icon: "error",
//         title: "Oops...",
//         text: "Something went wrong!",
  
//       });
//      }

//    })
//    .catch(error => {
//     //  console.error("Error:something went wrong ...");
  
 

//     console.error('king data:', error.response.data);

// setErrorMessages(error)


//     const errorMessages = error.response.data.split(":");
//     for (const message of errorMessages) {
   
//       console.log(message.trim());
//         // Handle each error message individually
//     }


    
 










//      // Add logic to handle errors or display an error message
//    });
//     // Add your form submission logic here
//   };


const HandleForm = async (e) => {

  let loader=document.getElementById("loader");


  e.preventDefault();

  console.log(loader);
  loader.classList.add("showLoader");
  console.log('The form data is ....', formData);

  let URL = "http://127.0.0.1:8080/api/v1/add";

  const formDataToSend = new FormData();

  // Append non-file fields
  for (const key in formData) {
    if (key !== 'picture') {
      formDataToSend.append(key, formData[key]);
    }
  }

  // Check if a file is selected
  if (formData.picture) {
    formDataToSend.append('picture', formData.picture);
  } else {
    // Handle case when no file is selected, e.g., set a default picture
    // formDataToSend.append('picture', defaultPicture);
  }

  try {
    const response = await axios.post(URL, formDataToSend, {
      headers: {
        'Content-Type': 'multipart/form-data',
        // 'Content-Type': 'application/x-www-form-urlencoded,multipart/form-data',
        'Access-Control-Allow-Origin': '*',
        // Add other headers if necessary
      }
    });

    if (response.data === "ok") {
      Swal.fire({
        icon: "success",
        title: "Success..",
        text: " user added successfully"
      });

      console.log("User added...");
    } else {
      console.log('king 2:', response.data);

      Swal.fire({
        icon: "error",
        title: "Oops...",
        text: "Something went wrong!"
      });
      loader.classList.remove('showLoader')
      loader.classList.add('hideLoader')
    }
  } catch (error) {
    console.error('king data:', error.response.data);

    Swal.fire({
      icon: "error",
      title: "Oops...",
      text: "validation errors please try again"
    });

  loader.classList.remove('showLoader')
      loader.classList.add('hideLoader')


    const errorMessages = error.response.data.split(":");
    for (const message of errorMessages) {
      console.log(message.trim());
      // Handle each error message individually
    }

    // Add logic to handle errors or display an error message
  }
};






  return (
    <>
      <section className="background-radial-gradient overflow-hidden">
        <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
          <div className="row gx-lg-5 align-items-center mb-5">
            <div className="col-lg-6 mb-5 mb-lg-0">
              <h1 className="my-5 display-5 fw-bold ls-tight">
                Offering the best <br />
                <span>services for you</span>
                <br />
                <span className='text-primary'>comfortzone</span>
              </h1>
              <p className="mb-4 opacity-70">
                Welcome to ComfortZone, where we prioritize your comfort and well-being. Our dedicated team is committed to
                providing top-notch services tailored to your needs. Experience excellence and relaxation with ComfortZone.
              </p>
            </div>
            <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
              <div className="card bg-glass">
                <div className="card-body px-4 py-5 px-md-5">
                  <h3 className='text-center'>Signup Here </h3>
                  <form onSubmit={HandleForm}  method="post" encType="multipart/form-data">
                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            className="form-control"
                            name="firstName"
                            value={formData.firstName}
                            onChange={FormChanges}
                          />
                          <label className="form-label">First name</label>

                          <span className='text-danger'>testing </span>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            className="form-control"
                            name="lastName"
                            value={formData.lastName}
                            onChange={FormChanges}
                          />
                          <label className="form-label">Last name</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="email"
                        className="form-control"
                        name="userEmail"
                        value={formData.userEmail}
                        onChange={FormChanges}
                      />
                      <label className="form-label">Email address</label>
                    </div>

                    <div className="form-outline mb-4">
                      <input
                        type="password"
                        className="form-control"
                        name="userPassword"
                        value={formData.userPassword}
                        onChange={FormChanges}
                        autoComplete='true'
                        placeholder='Password at least one uppercase 
                        letter, one lowercase letter, one digit, and one special character'
                      />
                      <label className="form-label">Password</label>
                    </div>

                    <div className="row">
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            className="form-control"
                            name="userMobile"
                            value={formData.userMobile}
                            onChange={FormChanges}
                          />
                          <label className="form-label">Mobile No</label>
                        </div>
                      </div>
                      <div className="col-md-6 mb-4">
                        <div className="form-outline">
                          <input
                            type="text"
                            className="form-control"
                            name="userAge"
                            value={formData.userAge}
                            onChange={FormChanges}
                          />
                          <label className="form-label">Age</label>
                        </div>
                      </div>
                    </div>

                    <div className="form-outline mb-4">
                      <input type="file" className="form-control" name="picture" onChange={FormChanges} />
                      <label className="form-label">Picture</label>
                    </div>

                    <button type="submit" className="btn btn-primary btn-block mb-4 w-100">
                   
                      < div className='loader-btn d-inline' id='loader'>
                    <span class="spinner-border spinner-border-sm mr-2" aria-hidden="true"></span>
                     
                     </div>
                     <span className='d-inline m-2'>Register</span>


                    </button>



                    <div className="text-center">
                      <p>already have an account?</p>
                      <li className="nav-item">
                        <Link to="/Login">Login here</Link>
                      </li>
                      {/* Add your social login buttons here */}
                    </div>
                  </form>
  
                    

                

                


                 
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default Signup;
