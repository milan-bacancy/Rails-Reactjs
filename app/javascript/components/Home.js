import React, { useState } from 'react';
import Login from './auth/Login'
import Register from './auth/Register'

const Home = (props) => {
  const handleSuccssfulAuth = (data) => {
    props.handleLogin(data)
    props.history.push("/")
  }

  return (
    <div className="mt-5 text-center">
      <h1 className="text-center">Status: {props.logged_in}</h1>
      <Login handleSuccssfulAuth={handleSuccssfulAuth} />
      <Register handleSuccssfulAuth={handleSuccssfulAuth} />
    </div>
	)
}

export default Home;