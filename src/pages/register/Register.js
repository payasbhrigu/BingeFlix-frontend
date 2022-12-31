import React, { useRef, useState } from 'react'
import './register.scss'
import { useHistory } from "react-router-dom";
import axios from "axios";

const Register = () => {

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const history = useHistory();

  const emailRef = useRef();
  const passwordRef = useRef();
  const usernameRef = useRef();

  const handleStart = () => {
    setEmail(emailRef.current.value);
  };    

  const handleOnChange=(e)=>{
    if(e.target.placeholder === 'username'){
      setUsername(e.target.value)
    }
    else{
      setPassword(e.target.value)
    }
    // console.log(e.target.value)
    // setUsername(e.target.value)
  }

  const handleFinish = async(e) => {
    e.preventDefault();
    setPassword(passwordRef.current.value);
    setUsername(usernameRef.current.value);
    // try {

    //   const requestOptions = {
    //     method: 'POST',
    //     headers: { 'Content-Type': 'application/json' },
    //     body: JSON.stringify({ 
    //       email:email,
    //       username:username,
    //       password:password })
    //   };

    //   await fetch("/auth/register", requestOptions)
    //    .then((res)=>{
    //     console.log(res)
    //     history.push("/login");
    //   })
    //    .catch((err)=>{
    //     console.log(err)
    //   })

    // } catch (err) {
    //   console.log(err)
    // }
    try {
      await axios.post("auth/register", { email,username, password });
      history.push("/login");
    } catch (err) {
      console.log(err)
    }
  };  

  return (
    <div className='register'>
        <div className='top'>
            <div className='wrapper'>
                <img src='https://i.imgur.com/UM6L4qw.png' className='logo'/>
                <span className='logoText'>B I N G E F L I X</span>
                <button className='loginButton'> Sign In</button>
            </div>
        </div>
        <div className='container'>
            <h1>Unlimited movies, TV shows, and more.</h1>
            <h2>Watch anywhere. Canel anytime.</h2>
            <p>
                Ready to watch? Enter your email to create or restart your membership.
            </p>
            {!email ? (
            <div className="input">
                <input type="email" placeholder="email address" ref={emailRef} />
                <button className="registerButton" onClick={handleStart}>
                Get Started
                </button>
            </div>
            ) : (
            <form className="input">
                <input type="username" placeholder="username" onChange={handleOnChange} ref={usernameRef} />
                <input type="password" placeholder="password" onChange={handleOnChange} ref={passwordRef}/>
                <button className="registerButton" onClick={handleFinish}>
                Start
                </button>
            </form>
            )}
        </div>
    </div>
  )
}

export default Register