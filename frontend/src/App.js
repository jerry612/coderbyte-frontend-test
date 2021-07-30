import logo from './logo.svg';
import './App.scss';

import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import { connect } from 'react-redux';
import { getDevice, getUser } from './redux/actions';
import Devices from './pages/Devices';
import Users from './pages/Users';
import Layout from './layout'


function App({ getDevice, getUser}) {

  useEffect(() => {
    getDevice()
    getUser()
  }, [])



  return (
    <div className="App">
      <Router>
        <Layout>
          <Route exact path="/" component={Devices}></Route>
          <Route exact path="/devices" component={Devices}></Route>
          <Route exact path="/users" component={Users}><Users /></Route>
        </Layout>
      </Router>
    </div>
  );
}


const mapDispatchToProps = {
  getDevice,
  getUser
}

export default connect(
  null,
  mapDispatchToProps
)(App)