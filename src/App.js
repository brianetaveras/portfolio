import React from 'react';
import './App.css';
import 'font-awesome/css/font-awesome.min.css';
import Navigation from './components/layout/Navigation';
import Footer from './components/layout/Footer';

import RouterView from './router/index'

function App() {
  return (
    <div className="App">
      <Navigation />
     <RouterView/>
     <Footer/>

    </div>
  );
}

export default App;
