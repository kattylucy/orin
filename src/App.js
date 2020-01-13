import React, { Component } from 'react';
import LandingPage from './landingpage/LandingPage';
import SignIn from './components/SignIn';
import OrinApp from './components/OrinApp';
import Savings from './components/Savings';
import Income from './components/Income';
import Bills from './components/Bills';
import OtherExpenses from './components/OtherExpenses';
import { BrowserRouter , Switch, Route, Redirect } from 'react-router-dom';



class App extends Component {
  
  render(){
    return (
    <BrowserRouter>
        <Switch>
            <Route path="/SignIn" component={SignIn}/>
            <Route path="/orinapp" component={OrinApp}/>
            <Route path="/savings" component={Savings} />
            <Route path="/income" component={Income} />
            <Route path="/bills" component={Bills} />
            <Route path="/expenses" component={OtherExpenses} />
            <Route path="/" component={LandingPage}/>
            <Redirect to="/"/>
        </Switch>
    </BrowserRouter>
  );
  }
}




export default App;
