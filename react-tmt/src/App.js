import React from 'react';
import logo from './logo.svg';
import './App.css';
import Trail from './components/Trail';
import Navbar from "./components/Navbar/Navbar";

class App extends React.Component {
  render(){
    return (
      <div className="App">
          <Navbar />
      </div>
    );
  }
}

export default App;
