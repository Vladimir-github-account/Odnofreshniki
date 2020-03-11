import React                                     from 'react';
import { Form, Field, withFormik } from 'formik';
import Input                                     from '../Input';
import * as Yup                                  from 'yup';
import styles                                    from './SignIn.module.sass';
import {
  mdiLockOutline,
  mdiEmailOutline,
  mdiAccountBox
}                                                from '@mdi/js';

const emailSchema = Yup.string()
    .email( 'must be a email' )
    .required( 'This field is required' );
const passwordSchema = Yup.string()
    .required( 'This field is required' )
    .min( 8, 'Must be at longer than 8' );

const handleSubmit = (values) => {
  console.log( values );
};

const SignInForm = (props) => {
  const emailValidate = async (value) => {
    let error;
    await emailSchema.validate( value ).catch( e => {
      error = e.message;
    } );
    return error;
  };
  const passwordValidate = async (value) => {
    let error;
    await passwordSchema.validate( value ).catch( e => {
      error = e.message;
    } );
    return error;
  };
  return (
      <Form className={styles.signInForm}>
        <Field type='text'
               name='email'
               validate={emailValidate}>
          {
            (fieldProps) => (
                <Input {...fieldProps}
                       label={'Email: '}
                       placeholder='E-mail'
                       icon={mdiEmailOutline}
                       autoFocus={true}/>
            )
          }
        </Field>
        <Field type='password'
               name='password'
               validate={passwordValidate}>
          {
            (fieldProps) => (
                <Input {...fieldProps}
                       type='password'
                       placeholder='Password'
                       icon={mdiLockOutline}
                       label={'Password: '}/>
            )
          }
        </Field>
        <div onClick={props.submitForm}
             className={styles.signInButton}>Login
        </div>
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