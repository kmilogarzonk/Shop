import React from 'react';
import './App.scss';
import NavBar from './components/NavBar'
import ContentShop from './components/ContentShop'
import { BrowserRouter as Router } from "react-router-dom"
import { Provider } from "react-redux"
import store from "./store"

function App() {
  return (
    <Provider store={store}>
      <div className="homeApp">
        <Router>
          <NavBar />
          <ContentShop />
        </Router>
      </div>
    </Provider>
  )
}

export default App;
