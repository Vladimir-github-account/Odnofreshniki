import React            from 'react';
import classNames       from 'classnames';
import { ErrorMessage } from 'formik';
import styles           from './Input.module.sass';
import Icon             from '@mdi/react';

function Input(props) {
  console.log( props );

  const { field, form, meta, icon, type, placeholder, onChange, onSubmit, autoFocus, ...rest } = props;
  const { error, value } = meta;
  const labelStyles = classNames(
      styles.label,
      {
        [styles.invalidInput]: error && value.length > 0
      },
      {
        [styles.validInput]: !error && value.length > 0
      },
  );
  return (
      <label className={labelStyles}>
        <div className={styles.iconWrapper}>
          <Icon path={icon}
                size='24px'
                color='rgba(0,0,0,0.4)'/>
        </div>
        <input className={styles.input}
               type={type}
               autoFocus={autoFocus}
               placeholder={placeholder}
               {...field}/>
        <ErrorMessage className={styles.errorTip}
                      component='div'
                      name={field.name}/>
      </label>
  );
}

export default Input;