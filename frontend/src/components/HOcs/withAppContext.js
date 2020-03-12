import AppContext from '../../state';
import React      from 'react';

export default function withAppContext(WrappedComponent) {
  return (props) => (
      <AppContext.Consumer>
        {
          value => (
              <WrappedComponent {...value} {...props}/>
          )
        }
      </AppContext.Consumer>
  );
}