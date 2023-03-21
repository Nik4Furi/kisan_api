import React from "react";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import { useState } from "react";
function Register() {

  const divstyle = {
    
      background: 'linear-gradient(to top left, rgb(197, 110, 252) 30%, rgb(197, 110, 252) 30%, #5c5cef)',
      height: '100%',
      backgroundSize: 'cover'
    
  }

     // Input Form
     const [fullName, setName] = useState({
      name:'',
      email:'',
      number:'',
      password:'',
      cpassword:'',
      dropVal:''
  });
  
  const inputEvent = (event) =>{
       const value = event.target.value;
       const name = event.target.name;

       setName((pre)=>{
          return{
             ...pre,
             [name]:value
          }

       })

      }
  return (
    <>
      <section 
        className="vh-100 bg-image " >
        <div className="mask d-flex align-items-center h-100 gradient-custom-3">
          <div className="container h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
              <div className="col-12 col-md-9 col-lg-7 col-xl-6">
                <div className="card" style={divstyle}>
                  <div className="card-body p-5" style={divstyle}>
                    <h2 className="text-uppercase text-center mb-5">
                      Create an account
                    </h2>

                    <form>
                      <div className="form-outline mb-4">
                        <input
                          name="name"
                          value={fullName.name}
                          onChange={inputEvent}
                          type="text"
                          id="form3Example1cg"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="form3Example1cg">
                          Your Name
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          name="email"
                          value={fullName.email}
                          onChange={inputEvent}
                          type="email"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example3cg">
                          Your Email
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          name="number"
                          value={fullName.numbar}
                          onChange={inputEvent}
                          type="number"
                          id="form3Example3cg"
                          className="form-control form-control-lg"
                        />
                        <label class="form-label" for="form3Example3cg">
                          Phone Number
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          name="password"
                          value={fullName.password}
                          onChange={inputEvent}
                          type="password"
                          id="form3Example4cg"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="form3Example4cg">
                          Password
                        </label>
                      </div>
                      <div className="form-outline mb-4">
                        <input
                          name="cpassword"
                          value={fullName.cpassword}
                          onChange={inputEvent}
                          type="password"
                          id="form3Example4cdg"
                          className="form-control form-control-lg"
                        />
                        <label className="form-label" for="form3Example4cdg">
                          Repeat your password
                        </label>
                      </div>
                      
                      <label className="form-label" for="form3Example4cdg">
                          Role
                        </label>
                      <div>
      <select name="dropVal" value={fullName.dropVal} onChange={inputEvent}>
        <option value="">Select an option</option>
        <option value="option1">Farmer</option>
        <option value="option2">Landloard</option>
        <option value="option3">Seller</option>
      </select>
    </div>

                      <div className="d-flex justify-content-center">
                        <button
                          type="button"
                          className="btn btn-success btn-block btn-lg gradient-custom-4 text-body"
                        >
                          Register
                        </button>
                      </div>
                      <p className="text-center text-muted mt-5 mb-0">
                        Have already an account?
                        <a href="#!" className="fw-bold text-body">
                          <u>Login here</u>
                        </a>
                      </p>
                    </form>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default Register;
