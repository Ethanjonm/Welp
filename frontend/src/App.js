import React from 'react';
import { Route, Switch } from 'react-router-dom';
import LoginFormPage from './components/LoginFormPage';
import SignupFormPage from "./components/SignupFormPage";
import Navigation from "./components/Navigation";
import SplashPage from './components/SplashPage';
import BusinessShowPage from './components/BusinessShowPage';
import BusinessIndex from './components/BusinessIndex';
import WriteReview from './components/WriteReview/WriteReview';
import UpdateReview from './components/UpdateReview/UpdateReview';
import Search from './components/Search/Search';

const App = () => {

  return (
    <div>
      <Navigation />
      <Switch>
        <Route exact path="/" component={SplashPage} />
        <Route path="/login" component={LoginFormPage} />
        <Route path="/signup" component={SignupFormPage} />
        <Route exact path="/businesses" component={BusinessIndex} />
        <Route exact path="/businesses/:id" component={BusinessShowPage} />
        <Route exact path="/businesses/:id/writereview" component={WriteReview} />
        <Route exact path="/businesses/:id/updatereview" component={UpdateReview} />
        <Route exact path="/businesses/search/:term" component={Search} />

      </Switch>
    </div>
  );
}

export default App;
