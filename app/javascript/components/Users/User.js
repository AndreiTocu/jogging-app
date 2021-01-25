import React from 'react'
import { BrowserRouter as Router, Link } from 'react-router-dom'

const User = (props) => {
  return (
    <div class="card">
      <div class="User-name">{props.attributes.name}</div>
      <div class="user-email">{props.attributes.email}</div>
      <div class="user-link">
        <Link to={`/users/${props.user_id}`}>View User</Link>
      </div>
    </div>
  )
}

export default User
