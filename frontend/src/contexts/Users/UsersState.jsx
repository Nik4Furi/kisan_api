import React, { useState } from 'react'
import { useEffect } from 'react';
import UserContext from './UsersContext'

function UserState(props) {
  // Declarations some variables can to modify or more functioning our app, which can using configurations
  let username=null, phone,tokenKey=null; 

  const [jsonRes,setJsonRes] = useState('')

  // const url = 'http://localhost:8000/api/'

  // Register the users, when they fill registe form 
  const postRegister = async (content) => {
    try {
      let data = await fetch('http://localhost:8000/api/auth/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(content)
      });
      // var body = await data.json();
      // console.log("before",data);
      // console.log("before",await data.json());
      // await data.json();
      // console.log("After:"+data);
      // console.log
      // console.log("response when context state ",response)
      // console.log("response when context state ",jsonRes)
      setJsonRes(data);
      return;
    } catch (error) {
      console.log(error);
      setJsonRes(error);
      return;

    }
  }

  // Login the users, if user already exist 
  const postLogin = async (data) => {
    try {
      let response = await fetch('http://localhost:8000/api/auth/login', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json'
        },
        body: JSON.stringify(data)
      });
      response = await response.json();
      localStorage.setItem('token', response.token);
      setJsonRes(response)
      tokenKey = localStorage.getItem('token');
      // console.log(response, 'the localstorage is ', localStorage.getItem('token'))
    } catch (error) {
      console.log(error);

    }
  }

  // getUser, help to find the user info is correct, using 'token'
  const getUser = async (tokenKey) => {
    try {
      let response = await fetch('http://localhost:8000/api/auth/getUser', {
        method: 'GET',
        headers: {
          'Content-Type': 'application/json',
          'auth-token':`${tokenKey}`
        }
      });
      body: JSON.stringify(data)
      response = await response.json();
    } catch (error) {
      console.log(error);

    }
  }

  const addMachinary = async(content)=>{
    try {            
  
    let data = await fetch('http://localhost:8000/api/files/add', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(content)
  });
  console.log(data)
  data = await data.json();
  console.log('response of the marchants',data)
} catch (error) {
        console.log(error)
}
  }

const fetchMachinary = async()=>{
  let data = await fetch('http://localhost:8000/api/files/fetch', {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json'
    }
  });
  await data.json();
  console.log('data is ',data);
}

  //--------Search the content by the farmers or other users ----------X
  const Search = async(content)=>{
    try {
      let response = await fetch('http://localhost:8000/api/files/search',{
        method : 'GET',
        headers: {
          'Content-Type': 'application/json'
        }
      }) 
      response = await response.json();
      setJsonRes(response)
      console.log('response of the content ',response);
    } catch (error) {
      console.log(error);
    }
  }
  // calling getUser, if localStorage.setItem('token') is exist 
  if (tokenKey) {
    useEffect(()=>{
      getUser(tokenKey);
      console.log('respose when token is valid ',jsonRes)
    })
  }
  return (
    <>
      <UserContext.Provider value={{fetchMachinary, addMachinary, Search,postRegister, postLogin,username,tokenKey,jsonRes}}>
        {props.children}
      </UserContext.Provider>
    </>
  )
}

export default UserState