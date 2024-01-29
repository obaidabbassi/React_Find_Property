import React from 'react'
import Footer from '../Components/Footer'
import {Link,Outlet} from "react-router-dom";
const Signup = () => {
  return (
  <>
  
  

<section className="background-radial-gradient overflow-hidden">
  <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
    <div className="row gx-lg-5 align-items-center mb-5">
      <div className="col-lg-6 mb-5 mb-lg-0" >
        <h1 className="my-5 display-5 fw-bold ls-tight">
          Offering the best <br />
          <span >services for you</span><br/>
          <span className='text-primary'>comfortzone</span>
        </h1>
        <p className="mb-4 opacity-70">
       

        Welcome to ComfortZone, where we prioritize your comfort and well-being. Our dedicated team is committed to providing top-notch services tailored
         to your needs. Experience excellence and relaxation with ComfortZone.



        </p>
      </div>
      <div className="col-lg-6 mb-5 mb-lg-0 position-relative">

        <div className="card bg-glass">
          <div className="card-body px-4 py-5 px-md-5">
            <h3 className='text-center'>Signup Here </h3>
            <form>
              {/* 2 column grid layout with text inputs for the first and last names */}
              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="form3Example1" className="form-control" />
                    <label className="form-label" htmlFor="form3Example1">First name</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="form3Example2" className="form-control" />
                    <label className="form-label" htmlFor="form3Example2">Last name</label>
                  </div>
                </div>
              </div>


              {/* Email input */}
              <div className="form-outline mb-4">
                <input type="email" id="form3Example3" className="form-control" />
                <label className="form-label" htmlFor="form3Example3">Email address</label>
              </div>
              {/* Password input */}
              <div className="form-outline mb-4">
                <input type="password" id="form3Example4" className="form-control" />
                <label className="form-label" htmlFor="form3Example4">Password</label>
              </div>
        






              <div className="row">
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="form3Example1" className="form-control" />
                    <label className="form-label" htmlFor="form3Example1">Mobile No</label>
                  </div>
                </div>
                <div className="col-md-6 mb-4">
                  <div className="form-outline">
                    <input type="text" id="form3Example2" className="form-control" />
                    <label className="form-label" htmlFor="form3Example2">Age</label>
                  </div>
                </div>


                
              </div>



              <div className="form-outline mb-4">
                <input type="file" id="form3Example4" className="form-control" />
                <label className="form-label" htmlFor="form3Example4">Picture</label>
              </div>
        












              
           
              {/* Submit button */}
              <button type="submit" className="btn btn-primary btn-block mb-4 w-100">
                Sign up
              </button>
              {/* Register buttons */}
              <div className="text-center">
                <p>already have acccount?</p>
                <li className="nav-item">
        <Link to="/Login">Login here</Link>
        </li>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-facebook-f" />
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-google" />
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-twitter" />
                </button>
                <button type="button" className="btn btn-link btn-floating mx-1">
                  <i className="fab fa-github" />
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</section>


  
  
  
  <Footer/>
  </>
  )
}

export default Signup