import React,{useState} from 'react';
import "./styles.css";
import {BrowserRouter as Router , Switch , Route } from 'react-router-dom'
import Navbar from './navbar'
import Main from './main'
import Contact from './contact'
import Services from './services'
import Login from './login'
import Register from './register'


export default function App() {
  const [isLightTheme, setTheme] = useState(true)

  const toggleTheme = ()=>{
    setTheme(!isLightTheme)
  }
  return (
    <Router>
    <div className="main">
    <Navbar />
    <Switch>
    <Route path="/" exact>
      <Main isLightTheme={isLightTheme}  toggleTheme={toggleTheme}/>  
    </Route>
    <Route path="/contact" exact>
      <Contact />
    </Route>
    <Route path='/services' exact>
      <Services />
    </Route>
    <Route path='/login' component={Login} exact />
    <Route path='/register' component={Register} exact />
    </Switch>
    </div>
    </Router>
    );
}
