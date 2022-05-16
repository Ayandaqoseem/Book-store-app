import React from 'react';
import { useEffect, useState } from 'react';
import './auth.scss';

const SignUp = () => {

  const [formValid, setFormValid] = useState(false)
  const [form, setForm] = useState({
      name: "",
      country: "",
      address: "",
      email: "",
      phoneNumber: ""
  });

  // const [count, setCount] = useState(0)

  useEffect(()=>{
      if (
          form.name !== "" &&
          form.country !== "" &&
          form.address !== "" &&
          form.email !== "" &&
          form.phoneNumber !== ""
       
      ){
          setFormValid(true)
      } else {
          setFormValid(false)
      }
  }, [form.name, 
      form.country,
      form.address, 
      form.email, 
      form.phoneNumber])

 

  const handleChange = (e) => {
      setForm({
          ...form,
          [e.target.name]: e.target.value
      })
  }

  const submitHandler = (e) => {
      e.preventDefault()
      sessionStorage.setItem('userDetails', JSON.stringify({...form}))
      
      window.location="/dashboard"
  }

  
  return (
    // <div>
    //   <p>You clicked {count} times</p>
    //   <button onClick={() => 
    //   setCount(count + 1)}>Click me</button>
    // </div>
    <div className="auth">
      <div className='auth_signup'>
        <div className='container'>
        <h1> Sign Up</h1>
        <form onSubmit={submitHandler}>

          <input type="text" placeholder='Name' name='name' onChange={handleChange} />
          <input type="text" placeholder='Country' name='country' onChange={handleChange} />
          <input type="text" required placeholder='Address' name='address' onChange={handleChange} />
          <input type="text" required placeholder='Contact Email' name='email' onChange={handleChange} />
          <input type="text" required placeholder='Phone Number' name='PhoneNumber' onChange={handleChange} />
          <div style={{ display:"flex", alignItems:"center", paddingLeft:"5px", justifyContent:"center" }}>
            <input type="checkbox" style={{ width:"25px", margin: "-7px 7px 0 0" }} id="readTerms" />
            <p style={{ fontSize:"12px"}}>I have read, understood and I agree to the terms and conditions </p>
          </div>
          <button 
            className={formValid?"auth_signup-active":"auth_signup-submit"}>
              Sign Up
            </button>

        </form>
        </div>
        
      </div>

    </div>
  )
}

export default SignUp