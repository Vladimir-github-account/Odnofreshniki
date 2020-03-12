import React                       from 'react';
import { Form, Field, withFormik } from 'formik';
import Input                       from '../Input';
import PasswordInput               from '../PasswordInput';
import * as Yup                    from 'yup';
import styles                      from './SignUp.module.sass';
import {
  mdiAccountCircle,
  mdiLockOutline,
  mdiEmailOutline,
  mdiAccountBox
}                                  from '@mdi/js';

const nameSchema = Yup.string()
    .required( 'This field is required' );
const emailSchema = Yup.string()
    .email( 'must be a email' )
    .required( 'This field is required' );
const passwordSchema = Yup.string()
    .required( 'This field is required' )
    .min( 8, 'Must be at longer than 8' );

const handleSubmit = (values) => {
  console.log( values );
};

const SignUpForm = (props) => {
  const nameValidate = async (value) => {
    let error;
    await nameSchema.validate( value ).catch( e => {
      error = e.message;
    } );
    return error;
  };
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

  const { signUpButton, signUpForm } = styles;

  return (
      <Form className={signUpForm}>
        <Field type='text'
               name='firstName'
               validate={nameValidate}>
          {
            (fieldProps) => (
                <Input {...fieldProps}
                       label={'First Name: '}
                       placeholder='First Name'
                       icon={mdiAccountCircle}
                       autoFocus={true}/>
            )
          }
        </Field>
        <Field type='text'
               name='lastName'
               validate={nameValidate}>
          {
            (fieldProps) => (
                <Input {...fieldProps}
                       label={'Last Name: '}
                       placeholder='Last Name'
                       icon={mdiAccountCircle}/>
            )
          }
        </Field>
        <Field type='text'
               name='email'
               validate={emailValidate}>
          {
            (fieldProps) => (
                <Input {...fieldProps}
                       label={'Email: '}
                       placeholder='E-mail'
                       icon={mdiEmailOutline}/>
            )
          }
        </Field>
        <Field type='password'
               name='password'
               validate={passwordValidate}>
          {
            (fieldProps) => (
                <PasswordInput {...fieldProps}
                               placeholder='Password'
                               icon={mdiLockOutline}
                               label={'Password: '}/>
            )
          }
        </Field>
        <Field type='password'
               name='verifyPassword'
               validate={passwordValidate}>
          {
            (fieldProps) => (
                <PasswordInput {...fieldProps}
                               placeholder='Verify Password'
                               icon={mdiLockOutline}
                               label={'Verify Password: '}/>
            )
          }
        </Field>
        <div onClick={props.submitForm}
             className={signUpButton}>Sign Up
        </div>
      </Form>

  );
};

export default withFormik( {
  mapPropsToValues: () => ( {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    verifyPassword: ''
  } ),
  initialValues: {
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    verifyPassword: ''
  },
  handleSubmit,

} )( SignUpForm );