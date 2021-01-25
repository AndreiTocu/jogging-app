import React, { useState, useEffect, Fragment } from 'react'
import axios from 'axios'
import User from './User'
const Users = () => {
  const [users, setUsers] = useState([])

  useEffect(() => {
    // Get all the user from api
    // Update users in our state
    axios.get('/api/v1/users.json')
    .then(resp => {
      console.log(resp)
      setUsers(resp.data.data)
    })
    .catch(resp => console.log(resp))
  }, [users.length])

  const grid = users.map(item => {
    return (
      <User
        key={ item.attributes.name }
        attributes = { item.attributes }
        user_id = { item.id }
      />)
  })

  return (
    <div>
      <div class="header">
        <h1>Users</h1>
      </div>
      <div>Lista cu Useri</div>
      <ul>{grid}</ul>
    </div>
  )
}

export default Users
