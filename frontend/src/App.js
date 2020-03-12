import React, { Component, lazy, Suspense }       from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import { THEME_MODE }                             from './constants/enums.js';
import AppContext                                 from './state';

const HomePage = lazy( () => import('./pages/HomePage.js') );
const SignInPage = lazy( () => import ('./pages/SignInPage.js') );
const SignUpPage = lazy( () => import ('./pages/SignUpPage.js') );
const TestPage = lazy( () => import('./pages/TestListPage.js') );

const fallbackElem = <div>Loading...</div>;

class App extends Component {
  state = {
    theme: THEME_MODE.LIGHT
  };

  render() {
    const contextValue = {
      state: this.state,
      setState: this.setState.bind( this )
    };
    return (
        <AppContext.Provider value={contextValue}>
          <Router>
            <Suspense fallback={fallbackElem}>
              <Switch>
                <Route exact path='/' component={HomePage}/>
                <Route path={[ '/sign_in', '/login' ]} component={SignInPage}/>
                <Route path='/sign_up' component={SignUpPage}/>
                <Route path='/test' component={TestPage}/>
              </Switch>
            </Suspense>
          </Router>
        </AppContext.Provider>
    );
  }

}

export default App;
