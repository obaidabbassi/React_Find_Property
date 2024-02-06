import axios from "axios";
import React, { useState } from "react";
import { Link } from "react-router-dom";

const Register = () => {
  const [formData, setFormData] = useState({
    firstName: '',
  });
  const [msg ,setMsg]=useState(false);
  const handleFormChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  }

  const handleFormSubmit = (e) => {
    e.preventDefault();
    console.log("The form data is:", formData);
    // Add your form submission logic here
   let URL="http://127.0.0.1:8080/api/v1/test";

   axios.post(URL,  formData, {
    headers: {
      'Content-Type': 'application/x-www-form-urlencoded',
      'Access-Control-Allow-Origin': '*',
      // Add other headers if necessary
    }
  })
  .then(response => {
    console.log(response);
    // Add logic to handle the successful response from the server
  })
  .catch(error => {
    console.error("Error:", error);
    // Add logic to handle errors or display an error message
  });
  


  }






  return (
    <section className="background-radial-gradient overflow-hidden">
      <div className="container px-4 py-5 px-md-5 text-center text-lg-start my-5">
        <div className="row gx-lg-5 align-items-center mb-5">
          <div className="col-lg-6 mb-5 mb-lg-0 position-relative">
            <div className="card bg-glass">
              <div className="card-body px-4 py-5 px-md-5">
                <h3 className='text-center'>Signup Here</h3>

                <form onSubmit={handleFormSubmit}>
                  <div className="row">
                    <div className="col-md-6 mb-4">
                      <div className="form-outline">
                        <input
                          type="text"
                          className="form-control"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleFormChange}
                        />
                        <label className="form-label">First name</label>
                      </div>
                    </div>
                  </div>

                  <button type="submit" className="btn btn-primary btn-block mb-4 w-100">
                    Sign up
                  </button>
                </form>
                <p className="text-success">User added...</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Register;
