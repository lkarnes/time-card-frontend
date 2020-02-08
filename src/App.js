import React from 'react';
import './sass/index.scss';
import {Route} from 'react-router-dom'

import Header from './components/Header.js'
import LandingPage from './components/LandingPage.js';
import Footer from './components/Footer.js';
import EmployeeLogin from './components/Login.js';

function App() {
  return (
    <div>
      <Header/>
      <Route
      exact
      path='/'
      component={LandingPage}
      />
      <Route
      path='/login'
      component={EmployeeLogin}
      />
      <Footer/>
    </div>
  );
}

export default App;
