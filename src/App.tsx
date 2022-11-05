import React , { useEffect, useState }  from 'react';
import Home from './pages/Home';
import TestApi from './components/TestApi';
import axios from 'axios';
import routes from './config/routes';

function App() {


  return (
    <>
      <Home title="Home Page" />
    </>
  );
}

export default App;
