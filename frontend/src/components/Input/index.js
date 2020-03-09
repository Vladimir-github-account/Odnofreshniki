import React      from 'react';
import classNames from 'classnames';
import styles     from './Input.module.sass';
import Icon       from '@mdi/react';

function Input(props) {
  console.log( props );

  const { field, form, meta, icon, type, placeholder, onChange, onSubmit, autoFocus, ...rest } = props;
  const labelStyles = classNames(
      styles.label,
      {
        [styles.invalidInput]: meta.touched && meta.error
      },
      {
        [styles.validInput]: meta.touched && !meta.error
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
        {meta.touched && meta.error && <div
            className={styles.errorTip}>{meta.error}</div>}
      </label>
  );
}

export default Input;