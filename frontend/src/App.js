import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import SplashPage from './components/SplashPage';
import BusinessShowPage from './components/BusinessShowPage';
import BusinessIndex from './components/BusinessIndex';

function App() {

  return (
    <>
      <Navigation />
      <Switch>
        <Route exact path="/">
          <SplashPage />
        </Route>
        <Route path="/login">
          <LoginFormPage />
        </Route>
        <Route path="/signup">
          <SignupFormPage />
        </Route>
        <Route exact path="/business">
          <BusinessIndex />
        </Route>
        <Route exact path="/business/:id">
          <BusinessShowPage />
        </Route>
      </Switch>
    </>
  );
}

export default App;
