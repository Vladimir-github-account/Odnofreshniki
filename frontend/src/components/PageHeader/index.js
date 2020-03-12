import React          from 'react';
import AppContext     from '../../state';
import withAppContext from '../HOcs/withAppContext.js';

const PageHeader = (props) => {

  return (
      <header>
        header
      </header>
  );
};

export default withAppContext( PageHeader );