import React from 'react'
import style from './login.module.css';
function Login() {
  return (
    <div className={style.container} >
      <form className={style.form} >
        
        <div>
          <input type="email" name="email" placeholder='enter your email' />
        </div>
        <div><input type="password" name="password" placeholder='enter your password' /></div>
        <div>
          <button>Register</button>
          <button>Login</button>
        </div>
      </form>
    </div>
  )
}

export default Login
