import React, { Component } from 'react';
import Header from './components/Header'

import { BrowserRouter as Router, Route,Link, NavLink, Switch } from 'react-router-dom'
import IphonePage from './pagecomponents/IphonePage';
import SamsungPage from './pagecomponents/SamsungPage';
import OppoPage from './pagecomponents/OppoPage';
import About from './pagecomponents/About';
import Home from './pagecomponents/Home';
import LoginPage from './pagecomponents/LoginPage'
import NotFound from './components/NotFound';
import RegisterPage from './pagecomponents/RegisterPage';
import CartPage from './pagecomponents/CartPage';


class App extends Component {
    render() {
        return (
            <Router>
                <Header></Header>   
                <Switch>
                        <Route path="/" exact component={Home} />
                        <Route path="/home" exact component={Home} />
                        <Route path="/about" exact component={About} />
                        <Route path="/login" exact component={LoginPage} />
                        <Route path="/register" component={RegisterPage}/>
                        <Route path="/cart" component={CartPage}/>
                        <Route path="/productIphone" component={IphonePage}/>
                        <Route path="/productSS" component={SamsungPage}/>
                        <Route path="/productOppo" component={OppoPage}/>
                        <Route component={NotFound}></Route>
                    </Switch>
            </Router>
            
        );
        
    }
    
}

export default App;
