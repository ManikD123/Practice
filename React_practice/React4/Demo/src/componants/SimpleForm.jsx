import React from 'react'

const SimpleForm = () => {
  return (
    <div>
      <form>
        <div>
          <label htmlFor='name' className='name'>Name: </label>
          <input
            type='text'
            id='name'
          ></input>

          <label htmlFor='password' className='password'>Password: </label>
          <input
            type='password'
            id='password'
          ></input>

          <label htmlFor='email' className='email'>Email: </label>
          <input
            type='email'
            id='email'
          ></input>
        </div>
      </form>
    </div>
  )
}

export default SimpleForm
