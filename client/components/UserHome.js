import React from 'react'
import { connect } from 'react-redux'

/**
 * COMPONENT
 */

class UserHome extends React.Component {
  async componentDidMount() {}

  render() {
    const user = this.props.user

    return (
      <div>
        <h3>Welcome, {user.username}</h3>
      </div>
    )
  }
}

/**
 * CONTAINER
 */
const mapState = state => {
  return {
    user: state.user,
  }
}

const mapDispatch = dispatch => {
  return {
    // getOrdersForUser: userId => dispatch(getOrdersForUser(userId)),
  }
}

export default connect(mapState, mapDispatch)(UserHome)
