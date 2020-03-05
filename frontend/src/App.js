import React                                    from 'react';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import HomePage                                 from './pages/HomePage.js';
import SignInPage                               from './pages/SignInPage.js';
import SignUpPage                               from './pages/SignUpPage.js';

function App() {
  return (
      <Router>
        <Switch>
          <Route exact path='/'>
            <HomePage/>
          </Route>
          <Route path={['/sign_in', '/login']}>
            <SignInPage/>
          </Route>
          <Route path='/sign_up'>
            <SignUpPage/>
          </Route>
        </Switch>
      </Router>
  );
}

export default App;
