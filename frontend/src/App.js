import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import SplashPage from './components/SplashPage';
import BusinessShowPage from './components/BusinessShowPage';
import BusinessIndex from './components/BusinessIndex';

const App = () => {

  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route path="/login" component={LoginFormPage} />
        <Route path="/signup" component={SignupFormPage} />
        <Route exact path="/business" component={BusinessIndex} />
        <Route exact path="/business/:id" component={BusinessShowPage} />
      </Switch>
    </div>
  );
}

export default App;
