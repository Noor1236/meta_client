import React, { useState } from 'react'
import axios from 'axios'
import { useAuth } from '../../context/ThemeContext'

const LoginPage = () => {
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [status, setStatus] = useState(null)
  const { isAuthenticated, user, login, } = useAuth()
  const userData = {
    email: email,
    password: password
  }

  const UserLogin = () => {
    axios.post('https://server-theta-taupe.vercel.app/login', userData)
      .then(function (res) {
        console.log("Get Response", res)
        login(res?.data?.userData)
        setStatus(res?.data?.msg)
      })
      .catch(function (err) {
        console.log(err)
      })
  }


  return (
    <div>
      <div className="page_width">
        <h1 className='login'>Login</h1>
        {/* <br /> */}
        <h2>{status ? status : ''}</h2>
        <div className="emai create_post_input">
          <input type="text" placeholder='Enter Email' value={email} onChange={(e) => setEmail(e.target.value)} />
        </div>
        <div className="emai create_post_input">
          <input type="password" placeholder='Enter Password' value={password} onChange={(e) => setPassword(e.target.value)} />
        </div>
        {/* <input type="email" value={email} placeholder='Email' onChange={(e) => setEmail(e.target.value)} />
        <input type="password" value={password} placeholder='Password' onChange={(e) => setPassword(e.target.value)} /> */}
        <button  onClick={UserLogin} > Login </button>
      </div>
    </div>
  )
}

export default LoginPage