import React from 'react';
import {withRouter}       from 'react-router';

function SignUpPage(props) {
  console.log(props);
  return (<h1>Sign Up</h1>);
}

export default withRouter(SignUpPage);