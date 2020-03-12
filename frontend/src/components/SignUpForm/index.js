import React                       from 'react';
import { Form, Field, withFormik } from 'formik';
import Input                       from '../Input';
import PasswordInput               from '../PasswordInput';
import styles                      from './SignUp.module.sass';
import {
  mdiAccountCircle,
  mdiLockOutline,
  mdiEmailOutline,
}                     from '@mdi/js';
import { formSchema } from '../../validationSchema';

const handleSubmit = (values) => {
  console.log( values );
};

const SignUpForm = (props) => {
  const { signUpButton, signUpForm } = styles;

  return (
      <Form className={signUpForm}>
        <Field type='text'
               name='firstName'>
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
               name='lastName'>
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
               name='email'>
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
               name='password'>
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
               name='verifyPassword'>
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
  validationSchema: formSchema,
  handleSubmit,

} )( SignUpForm );