import { Link } from "react-router-dom"
import { useRef } from "react";
import axiosClient from "../axios-client.js";
import { useStateContext } from "../contexts/ContextProvider";

export default function Signup() {
  const nameRef = useRef();
  const emailRef = useRef();
  const passwordRef = useRef();
  const passwordConfirmationRef = useRef();


  const {setUser, setToken} = useStateContext();


  const onSubmit = (e) => {
    e.preventDefault();
    // debugger;
    
    const payload = {
      name: nameRef.current.value,
      email: emailRef.current.value,
      password: passwordRef.current.value,
      password_confirmation: passwordConfirmationRef.current.value
    }

    try {
      const res = axiosClient.post('/signup', payload)
      console.log()
      
    } catch (error) {
      console.log(error)
    }
      // .then(({data}) => {
      //   setUser(data.user);
      //   setToken(data.token);
      // })
      // .catch(err => {
      //   console.log(err);
      //   const response = err.response;

      //   if (response && response.status === 422) {
      //     console.log(response.data.errors);
      //   }
      // })
  }


  return (
    <div className="animated fadeInDown">
      <form onSubmit={onSubmit}>
        <h1 className="title">
          Signup for free
        </h1>
        <input ref={nameRef} type="text" placeholder="Full Name" />
        <input ref={emailRef} type="email" placeholder="Email Address" />
        <input ref={passwordRef} type="password" placeholder="Password" />
        <input ref={passwordConfirmationRef} type="password" placeholder="Password Confirmation" />
        <button className="btn btn-block">Signup</button>
        <p className="message">
          Already Registered? <Link to="/login">Sign In</Link>
        </p>
      </form>
    </div>
  )
}