import React                       from 'react';
import { Form, Field, withFormik } from 'formik';
import Input                       from '../Input';
import PasswordInput               from '../PasswordInput';
import * as Yup                    from 'yup';
import styles                      from './SignIn.module.sass';
import {
  mdiLockOutline,
  mdiEmailOutline,
  mdiAccountBox
}                     from '@mdi/js';
import { formSchema } from '../../validationSchema';

const handleSubmit = (values) => {
  console.log( values );
};

const SignInForm = (props) => {
  const { signInButton, signInForm, fieldsWrapper } = styles;
  return (
      <Form className={signInForm}>
        <div className={fieldsWrapper}>
          <Field type='text'
                 name='email'>
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
        </div>
        <div onClick={props.submitForm}
             className={signInButton}>Login
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
  validationSchema: formSchema,
  handleSubmit,

} )( SignInForm );