import React, { Component }        from 'react';
import { Form, Field, withFormik } from 'formik';
import Input                       from '../Input';
import * as yup                    from 'yup';

const emailSchema = yup.string().email().required();

const handleSubmit = (values) => {
  console.log( values );
};

const SignInForm = (props) => {

  const emailValidate = async (value) => {
    try {
      await emailSchema.validate( value ).catch( e => {
        console.log( 'e' );
        console.dir( e );
        return e.message;
      } );
    } catch (e) {

    }
  };

  console.log( props );
  return (
      <Form>
        <Field type='test'
               name='email'
               validate={emailValidate}>
          {
            (fieldProps) => ( <Input {...fieldProps} label={'Test test: '}/> )
          }
        </Field>
        <Field type='password'
               name='password'
               test='test'
               component={Input}/>
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