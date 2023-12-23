'use client';

import { useState } from 'react';
import { NewUserForm } from '../NewUserForm/NewUserForm';
import style from './style.module.scss';
import { createPortal } from 'react-dom';

export function AddUser() {
  const [isChanging, setIsChanging] = useState(false);

  const onClick = () => {
    setIsChanging((prevState) => !prevState);
  };

  return (
    <>
      {isChanging &&
        createPortal(<NewUserForm handleClose={onClick} />, document.body)}
      <button onClick={onClick} className={style.button}>
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='60'
          width='60'
          viewBox='0 0 448 512'
        >
          <path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z' />
        </svg>
      </button>
    </>
  );
}
