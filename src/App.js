import React from 'react';
import './App.scss';
import NavBar from './components/NavBar'
import ContentShop from './components/ContentShop'

function App() {
  return (
    <div className="homeApp">
      <NavBar />
      <ContentShop />
    </div>
  );
}

export default App;
