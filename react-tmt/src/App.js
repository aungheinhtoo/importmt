import React from 'react';
import logo from './logo.svg';
import './App.css';
import 
{
  BrowserRouter as Router,
  Route,
  Switch,
  Link,
  Redirect
} from "react-router-dom"


//Components
import Navbar from "./components/Navbar/Navbar";
import Trail from './components/Trail';

//Pages
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import NotFoundPage from "./components/pages/404";

class App extends React.Component {
  render(){
    return (
      <Router>
        <div className="App">
            <Navbar />
        </div>
  
        <div>
          <Switch>
            <Route exact path="/" component={Home}/>
            <Route exact path="/register" component={Register}/>
            <Route exact path="/404" component={NotFoundPage}/>
            <Redirect to="/404"/>

          </Switch>
        </div>
      </Router>



    );
  }
}

export default App;
