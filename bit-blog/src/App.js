import React, { Component, Fragment } from 'react';
import { Route, Switch, HashRouter } from 'react-router-dom';
import './App.css';

import { Header } from "./app/commons/Header";
import { Footer } from "./app/commons/Footer";

import HomePage from "./app/customPages/HomePage";
import SinglePostPage from "./app/customPages/SinglePostPage";
import AuthorsPage from "./app/customPages/AuthorsPage";
import SingleAuthorPage from "./app/customPages/SingleAuthorPage";
import AboutPage from "./app/customPages/AboutPage";


class App extends Component {

  render() {
    return (
      <HashRouter>
      <Fragment>
      <Header />
      <Switch>

      <Route exact path='/' component={HomePage} />
      <Route exact path='/SinglePostPage/:userId' component={SinglePostPage} />
      <Route exact path='/AuthorsPage' component={AuthorsPage} />
      <Route exact path='/SingleAuthorPage/:userId' component={SingleAuthorPage} />
      <Route exact path='/AboutPage' component={AboutPage} />
      
      </Switch>
      <Footer />
      </Fragment>
      </HashRouter>
    )
  }
}


export default App
