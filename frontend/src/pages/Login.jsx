import React,{useState} from 'react'
import UserContext from "../contexts/Users/UsersContext";
import { useContext } from 'react';

function Login() {
    // console.log(navigate)
   
    // let history = useLocation();
    //     console.log(history)
    // post login context-api to login the users 
    const {postLogin,jsonRes} = useContext(UserContext)
      //---------Start to create the state variables for particular module 'login'------X
  const [login,setlogin] = useState({phone:'',password:''});


  //--------Start to handle all the events or functions creationgs-------------X
  const handleChange = (e)=>{
    setlogin({...login,[e.target.name]:e.target.value})
  }

  const handleSubmit = async(e)=>{
    e.preventDefault();
    // console.log('login the users ',login);

    // Help of the postLogin context-api, login the users 
    try {
      postLogin(login)
        
      console.log(jsonRes)
        setlogin({phone:'',password:''});
        // navigate('/')
    } catch (error) {
        setlogin({phone:login.phone,password:''});
    }
  }
    return (
        <>
            <div className="container my-3">
                <h2><span className="text-danger">Login the users, to build our community strong</span></h2>

                {/* Start to create the form  */}
                <form method='POST' onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="phone" className="form-label">Enter Phone No.</label>
                        <input type="phone" className="form-control" id="phone" name="phone" value={login.phone} onChange={(e) => handleChange(e)} required minLength={7} placeholder="0123-233289" />
                    </div>
                    <div className="mb-3">
                        <label htmlFor="password" className="form-label">Password</label>
                        <input type="password" className="form-control" id="password" name="password" value={login.password} onChange={(e) => handleChange(e)} required minLength={8} placeholder="johndow23" />
                    </div>

                    <button type="submit" className="btn btn-danger">Login</button>
                </form>
            </div>
        </>
    )
}

export default Login