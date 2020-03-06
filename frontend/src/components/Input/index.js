import React      from 'react';
import classNames from 'classnames';
import styles     from './Input.module.sass';

function Input(props) {
  console.log( 'props', props );
  const { field, form, ...rest } = props;
  const inputStyles = classNames( styles.input,
                                  {
                                    [styles.invalidInput]: form.touched[field.name] &&
                                    form.errors[field.name]
                                  },
                                  {
                                    [styles.validInput]: form.touched[field.name] &&
                                    !form.errors[field.name]
                                  },
  );

  return (
      <label className={styles.label}>
        <div>{props.label}</div>
        <input className={inputStyles} {...field}/>
        {form.errors.email && <div className={styles.errorTip}>{form.errors.email}</div>}
      </label>
  );
}

export default Input;