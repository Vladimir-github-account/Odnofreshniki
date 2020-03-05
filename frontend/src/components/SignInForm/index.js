import React, { Component } from 'react';
import { Formik, Form, Field, withFormik } from 'formik';
import PropTypes from 'prop-types';

const handleSubmit = (values) => {
  console.log( values );
};

const SignInForm = (props) => {
  console.log( props );
  return (
      <Form>
        <Field type='email' name='email'/>
        <Field type='password' name='password'/>
        <div onClick={props.submitForm}>Login</div>
      </Form>
  );
};

export default withFormik( {
                             mapPropsToValues: () => ( {
                               email: '',
                               password: ''
                             } ),
                             initialValues: {
                               email: '',
                               password: '',
                             },
                             handleSubmit,

                           } )( SignInForm );