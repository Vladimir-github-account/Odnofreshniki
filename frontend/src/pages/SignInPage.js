import React          from 'react';
import { withRouter } from 'react-router';
import SignInForm from '../components/SignInForm';
import Entry      from '../components/Entry';

function SignInPage(props) {
  return (
      <>
        <Entry/>
      </>
  );
}

export default withRouter( SignInPage );