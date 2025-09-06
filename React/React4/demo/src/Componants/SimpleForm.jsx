import { useState } from 'react';
import React from 'react'

const SimpleForm = () => {

  const [error, setErrors] = useState({});
  const [formValues, setFormValues] = useState({
    name: "",
    password: "",
    email: "",
  });

  const changeHandler = (event) => {
    const { name, value } = event?.target;
    //console.log({ name, value });
    setFormValues((prevState) => {
      console.log(prevState)
      return {
        ...prevState,
        [name]: value,  // making the value dynamic
      };
    });
  };

  const validate = () => {
    let newError = {};

    if (formValues.name.trim().length === 0) {
      newError.name = "Name Shouldnt be empty";
    }

    if (formValues.email.trim().length === 0) {
      newError.email = "Email Shouldnt be empty";
    }

    if (formValues.password.trim().length === 0) {
      newError.password = "Password Shouldnt be empty";
    }
    // window.alert(JSON.stringify(newError))
    setErrors(newError);
    return Object.keys(newError).length === 0;
  }

  const submitHandler = (e) => {
    e.preventDefault();
    // validate the data
    if (validate()) {
      console.log("form SumbittedL:", formValues);
      setFormValues({
        name: "",
        password: "",
        email: "",
      });
      setErrors({});
    }
  };


  return (
    <div>
      <form onSubmit={submitHandler}>
        <div>
          <label htmlFor="name" className="name">Name : </label>
          <input
            type="text"
            id="name"
            name="name"
            onChange={changeHandler}
            value={formValues?.name}
          />
          {error?.name && (
            <div style={{ color: "red", padding: "5px" }}>{error?.name}</div>
          )}
        </div>
        <div>
          <label htmlFor="Password" className="password">Password : </label>
          <input
            type="text"
            id="password"
            name="password"
            onChange={changeHandler}
            value={formValues?.password}
          />
          {error?.password && (
            <div style={{ color: "red", padding: "5px" }}>{error?.password}</div>
          )}
        </div>
        <div>
          <label htmlFor="Email" className="Email">Email : </label>
          <input
            type="text"
            id="email"
            name="email"
            onChange={changeHandler}
            value={formValues?.email}
          />
          {error?.email && (<div style ={{ color: "red", padding: "5px" }} >{error?.password} </div>)}
        </div>
        <button style={{ margin: "5px" }} type='submit'>
          Submit
        </button>
      </form>
    </div>
  )
}

export default SimpleForm
