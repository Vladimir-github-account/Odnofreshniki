import React, { Component, lazy, Suspense }       from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';

const HomePage = lazy( () => import('./pages/HomePage.js') );
const SignInPage = lazy( () => import ('./pages/SignInPage.js') );
const SignUpPage = lazy( () => import ('./pages/SignUpPage.js') );
const TestPage = lazy( () => import('./pages/TestListPage.js') );

const fallbackElem = <div>Loading...</div>;

export const ThemeContext = React.createContext( 'light' );

class App extends Component {
  constructor(props) {
    super( props );
    this.state = {
      theme: 'light',
    };
  }

  changeTheme = () => {
    this.setState( state => ( {
      theme: state.theme === 'light'
          ? 'dark'
          : 'light'
    } ) );
  };

  render() {
    return (
        <ThemeContext.Provider value={{
          changeTheme: this.changeTheme,
          theme: this.state.theme,
        }}>
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
        </ThemeContext.Provider>
    );
  }

}

export default App;
