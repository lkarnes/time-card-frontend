import React from 'react';
import './sass/index.scss';
import {Route} from 'react-router-dom'

import Header from './components/Header.js'
import LandingPage from './components/LandingPage.js';
import Footer from './components/Footer.js';
import Register from './components/Register.js';

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
      component={Register}
      />
      <Footer/>
    </div>
  );
}

export default App;
