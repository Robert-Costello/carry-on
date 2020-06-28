import React, { Component } from 'react'
import { connect } from 'react-redux'
import { Link } from 'react-router-dom'
import { logout } from '../store'

class Navbar extends Component {
  render() {
    const isLoggedIn = this.props.isLoggedIn
    const handleClick = this.props.handleClick

    return (
      <div>
        <h1 className="title">Carry On</h1>
        <nav>
          {isLoggedIn ? (
            <div className="bar">
              {/* The navbar will show these links after you log in */}
              <Link to="/home">Home</Link>
              <a href="#" onClick={handleClick}>
                Logout
              </a>
            </div>
          ) : (
            <div className="bar">
              {/* The navbar will show these links before you log in */}
              {/* <Link to="/login">Login</Link> */}
              {/* <Link to="/signup">Sign Up</Link> */}
            </div>
          )}
        </nav>
        <hr />
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    isLoggedIn: !!state.user.id,
    // count: state.openOrder.openOrder.cartCount
  }
}

const mapDispatch = dispatch => {
  return {
    handleClick() {
      dispatch(logout())
    },
  }
}

export default connect(mapState, mapDispatch)(Navbar)
