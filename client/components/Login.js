import React from 'react'
import { connect } from 'react-redux'
import { login } from '../store'
import { Link } from 'react-router-dom'
/**
 * COMPONENT
 */
const LoginForm = props => {
  const { name, displayName, handleSubmit, error } = props

  return (
    <div>
      <form onSubmit={handleSubmit} name={name}>
        <div>
          <label htmlFor="username">
            <small>Username</small>
          </label>
          <input name="username" type="text" />
        </div>
        <div>
          <label htmlFor="password">
            <small>Password</small>
          </label>
          <input name="password" type="password" />
        </div>
        <div>
          <button type="submit">{displayName}</button>
        </div>
        {error && error.response && <div> {error.response.data} </div>}
      </form>
      <a target="_self" href="/auth/google">
        {displayName} with Google
      </a>
      <br />
      <Link to="/signup">Sign Up</Link>
    </div>
  )
}

const mapLogin = state => {
  return {
    name: 'login',
    displayName: 'Login',
    error: state.user.error,
  }
}

const mapDispatch = dispatch => {
  return {
    handleSubmit(evt) {
      evt.preventDefault()
      const username = evt.target.username.value
      const password = evt.target.password.value
      dispatch(login(username, password))
    },
  }
}

export const Login = connect(mapLogin, mapDispatch)(LoginForm)
