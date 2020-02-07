import React from 'react';
import './sass/index.scss';
import {Route} from 'react-router-dom'

import Header from './components/Header.js'
import LandingPage from './components/LandingPage.js';
import Footer from './components/Footer.js';

function App() {
  return (
    <div>
      <Header/>
      <Route
      path='/'
      component={LandingPage}
      />
      <Footer/>
    </div>
  );
}

export default App;
