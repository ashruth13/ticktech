import {Component} from 'react';
import React from 'react'
import {BrowserRouter, Route, Routes} from 'react-router-dom'
import Home from './component/Home'
import About from './component/About'
import ThemeContext from './context/ThemeContext';
import './App.css';

class App extends Component {
  state = {
    theme : true
  }
  toggleTheme = () => {
    this.setState(prevState => ({theme : !prevState.theme}))
  }
  render(){
    const {theme} = this.state
    return (
      <ThemeContext.Provider
        value = {{theme,toggleTheme:this.toggleTheme}}
      >
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
          </Routes>
        </BrowserRouter>
      </ThemeContext.Provider>
    )
  }
}

export default App;
