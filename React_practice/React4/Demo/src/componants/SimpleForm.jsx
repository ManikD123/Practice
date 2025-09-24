import React, { useState } from 'react'

const SimpleForm = () => {

const [errors, setErrors] = useState({});
  const [formvalues, setFormvalues] = useState({
    name: "",
    password: "",
    email: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event?.target;
    setFormvalues((prevState) => {
      return {
        ...prevState,
        [name]: value,
      }
    })
  };

  const sumbitHandler = (event) => {
    event.preventDefault();
    if (Validite()) {
      console.log("FOrm Sumbitted", formvalues);
      setFormvalues({
        name: "",
        password: "",
        email: "",
      })
      setErrors({});
    }
  };

  const Validite = () => {
    let newError = {};
    if(formvalues.name.trim().length === 0){
      newError.name = "Name should not be empty";
    }
    if(formvalues.password.trim().length === 0){
      newError.password = "password should not be empty";
    }
    if(formvalues.email.trim().length === 0){
      newError.email = "Email should not be empty";
    }
    setErrors(newError)
    return Object.keys(newError).length === 0;
  }

  // const [names, setNames] = useState("");
  // const [passwords, setpasswords] = useState("");
  // const [emails, setemails] = useState("");


  return (
    <div>
      <form onSubmit={sumbitHandler}>
        <div>
          <label htmlFor='name' >Name: </label>
          <input
            type='text'
            id='name'
            name='name'
            value={formvalues?.name}
            onChange={changeHandler}
          />
          {errors?.name && (
          <div style={{ color: "red", padding: "5px" }}> {errors?.name} </div>
          )}
        </div>
        <div>
          <label htmlFor='password' >Password: </label>
          <input
            type='password'
            id='password'
            name='password'
            value={formvalues?.password}
            onChange={changeHandler}
          />
          {errors?.password && (
          <div style={{ color: "red", padding: "5px" }}>  {errors?.password} </div>
          )}
        </div>
        <div>
          <label htmlFor='email' >Email: </label>
          <input
            type='email'
            id='email'
            name='email'
            value={formvalues?.email}
            onChange={changeHandler}
          />
          {errors?.email && (
          <div style={{ color: "red", padding: "5px" }} > {errors?.email} </div>
          )}
        </div>
        <button type='submit' style={{ margin: "5px" }}>Sumbit</button>
      </form>
    </div>
  )
}

export default SimpleForm
