import React from 'react'

import { Link } from "react-router-dom"
import { Menu } from 'antd'

const { SubMenu } = Menu

const Navbar = () => {
  return (
     <Menu mode="horizontal">
       <Menu.Item key='Home'>
         <Link to="/">Home</Link>
       </Menu.Item>
       <Menu.Item key='Login'>
         <Link to="/login">Sign In</Link>
       </Menu.Item>
       <Menu.Item key='SignUp'>
         <Link to="/SignUp">Sign Up</Link>
       </Menu.Item>
     </Menu>
  )
}

export default Navbar
