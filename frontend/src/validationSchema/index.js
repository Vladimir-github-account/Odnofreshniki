import * as yup from 'yup';

const NAME_PATTERN = /^[A-Z][a-z]{0,63}$/;
const namePatternMessage = `Must starts with capital letter, and be not long to much`;

export const formSchema = yup.object().shape( {
  firstName: yup.string()
                .required( 'Required' )
                .matches( NAME_PATTERN )
                .label( 'First name' ),
  lastName: yup.string()
               .required( 'Required' )
               .matches( NAME_PATTERN )
               .label( 'Last name' ),
  email: yup.string().email().required( 'Required' ).label( 'Email' ),
  password: yup.string()
               .min( 8, 'Must be at least 8 characters' )
               .required( 'Required' )
               .label( 'Password' ),
  verifyPassword: yup.string()
                     .required( 'Required' )
                     .oneOf( [ yup.ref( 'password' ), null ], 'Passwords must match' )
                     .min( 8, 'Must be at least 8 characters' )
                     .label( 'Confirm password' ),
} );