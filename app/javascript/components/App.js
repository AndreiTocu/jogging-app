import React, { useCallback, useEffect, useState } from 'react';
import { Route, Switch } from 'react-router-dom'
import { Layout, Divider } from 'antd';
import axios from 'axios'
import Home from './Home'
import SignUp from './Authentication/SignUp'
import Navbar from './UI/Navbar'
import SignIn from './Authentication/SignIn'
import SignOut from './Authentication/SignOut'

const App = () => {
  const { Content } = Layout;
  const pageContainer = {
    position: 'relative',
    minHeight: '100vh'
  };
  const [userData, setUserData] = useState({});
  const [shouldRender, setShouldRender] = useState(false);

  function onSetUserSession(id) {
    setUserData({ id: id });
  }

  const setUserSession = useCallback(async () => {
    const sessionDataResponse = await axios.get('/api/session')
      .then(data => data);
    if (sessionDataResponse.data.success === 1) {
      const userSession = sessionDataResponse.data.session;
      userSession.id ?
        window.sessionStorage.setItem('userId', userSession.id) :
          window.sessionStorage.removeItem('userId');
      onSetUserSession(userSession.id);
    }
  }, []);

  function getUserData() {
    return {
      id: window.sessionStorage.getItem('userId')
    };
  }

  useEffect(() => {
    setUserSession().then(() => {
      setShouldRender(true);
    });
  }, [shouldRender, setUserSession]);

  return (
    <>
    {shouldRender
      ? <Layout>
          <Navbar userData={userData}/>
          <Divider/>
          <Content>
            <Switch>
              <Route exact path="/" component={Home}/>
              <Route exact path="/signup" component={SignUp}>
                <SignUp/>
              </Route>
              <Route exact path="/signin" component={SignIn}>
                <SignIn onSigninSuccess={setUserSession}/>
              </Route>
              <Route exact path="/signout" component={SignOut}>
                <SignOut onSignoutSuccess={setUserSession}/>
              </Route>
            </Switch>
          </Content>
          <Divider/>
        </Layout>
     : null
    }
    </>
  )
}

export default App
