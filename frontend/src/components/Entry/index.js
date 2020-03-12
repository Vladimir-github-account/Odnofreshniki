import React      from 'react';
import SignInForm from '../SignInForm';
import styles     from './Entry.module.sass';

const Entry = () => {
  const { entry, infoAndFormWrapper, formWrapper, info, linksWrapper, entryLink, activeEntryLink } = styles;
  return (
      <div className={entry}>
        <div className={infoAndFormWrapper}>
          <div className={info}>
            {'About our social'}
          </div>
          <div className={formWrapper}>
            <div className={linksWrapper}>
              <a href="#" className={activeEntryLink}>Sign In</a>
              <span>or</span>
              <a href="#" className={entryLink}>Sign up</a>
            </div>
            <SignInForm/>
          </div>
        </div>
      </div>

  );
};

export default Entry;