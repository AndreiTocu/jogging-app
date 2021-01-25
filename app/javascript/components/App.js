import React from 'react'
import { Route, Switch } from 'react-router-dom'
import { Layout, Divider } from 'antd';
import Users from './Users/Users'
import User from './User/User'
import Home from './Home'
import SignUp from './Authentication/SignUp'
import Navbar from './UI/Navbar'

const App = () => {

  const { Content } = Layout;
  const pageContainer = {
    position: 'relative',
    minHeight: '100vh'
  };

  return (
    <Layout>
      <Navbar />
      <Divider/>
      <Content>
        <Switch>
          <Route exact path="/" component={Home}/>
          <Route exact path="/users/:id" component={User}/>
          <Route exact path="/signup" component={SignUp}>
            <SignUp/>
          </Route>
        </Switch>
      </Content>
      <Divider/>
    </Layout>
  )
}

export default App
