import React, { useContext, useState } from 'react'
// import UsersContext from '../context/Users/UsersContext';
import UserContext from '../contexts/Users/UsersContext';

function Register() {
  //------Context Specific Stuff, to grab all the constraints ------X
  const {postRegister,jsonRes} = useContext(UserContext);
  // console.log('the value of the contest is ',a.name);
  // const context = useContext(UsersContext)
  // console.log(context.a)
  //---------Start to create the state variables for particular module 'Register'------X
  const [register, setRegister] = useState({ name: '', email: '',phone:'', password: '', cpassword: '', profession: '',address:'' });


  //--------Start to handle all the events or functions creationgs-------------X
  const handleChange = (e) => {
    setRegister({ ...register, [e.target.name]: e.target.value })
  }

  const handleSubmit = async(e) => {
    e.preventDefault();
    // Register the users, help of the context api of postRegister 
    try {
     await postRegister(register);
      console.log('josn response of that ')
    //   showAlert(jsonRes.success,jsonRes.msg);
      setRegister({ name: register.name, email: register.email,phone:register.phone, password: register.password, cpassword: register.cpassword, profession: register.profession ,address:register.address})
    }
    catch (error) {
      console.log(error)

      setRegister({ name: register.name, email: register.email,phone:register.phone, password: '', cpassword: '', profession: '' ,address:''});
    }
  }

  
  return (
    <>
      <div className="container my-3">
        <h2>Register to checking and getting more advantages <span className="text-danger">features</span> accessing</h2>

        <form method='POST' onSubmit={handleSubmit}>
          <div className="mb-3">
            <label htmlFor="name" className="form-label">Enter Your name:</label>
            <input type="text" className="form-control" id="name" name="name" value={register.name} onChange={(e) => handleChange(e)} required minLength={5} placeholder="johndow23" />
          </div>
          <div className="mb-3">
            <label htmlFor="email" className="form-label">Enter Your Email:</label>
            <input type="email" className="form-control" id="email" name="email" value={register.email} onChange={(e) => handleChange(e)} required minLength={7} placeholder="johndow23@example.com" />
          </div>
          <div className="mb-3">
            <label htmlFor="phone" className="form-label">Enter Your PHone:</label>
            <input type="text" className="form-control" id="phone" name="phone" value={register.phone} onChange={(e) => handleChange(e)} required minLength={10} placeholder="0123456789" />
          </div>
          <div className="mb-3">
            <label htmlFor="password" className="form-label">Enter Your Password:</label>
            <input type="password" className="form-control" id="password" name="password" value={register.password} onChange={(e) => handleChange(e)} required minLength={8} placeholder="johndow@23" />
          </div>
          <div className="mb-3">
            <label htmlFor="cpassword" className="form-label">Re-Enter Your Password:</label>
            <input type="password" className="form-control" id="cpassword" name="cpassword" value={register.cpassword} onChange={(e) => handleChange(e)} required minLength={8} placeholder="johndow@23" />
          </div>
          <div className="mb-3">
            <label htmlFor="profession" className="form-label">Enter Your Profession:</label>
            <input type="text" className="form-control" id="profession" name="profession" value={register.profession} onChange={(e) => handleChange(e)} minLength={5} placeholder="Student" />
          </div>
          <div className="mb-3">
            <label htmlFor="address" className="form-label">Enter Your Address:</label>
            <input type="text" className="form-control" id="address" name="address" value={register.address} onChange={(e) => handleChange(e)} minLength={5}  />
          </div>

          <button type="submit" className="btn btn-danger">Register</button>
        </form>
      </div>
    </>
  )
}

export default Register