'use client';

import { useState } from 'react';
import { NewUserForm } from '../NewUserForm/NewUserForm';
import style from './style.module.scss';
import { createPortal } from 'react-dom';

// The 'AddUser' component definition.
export function AddUser() {
  // State to track whether the form is currently visible or not.
  const [isChanging, setIsChanging] = useState(false);

  // Function to handle the button click and toggle the visibility of the form.
  const onClick = () => {
    // Toggling the state value.
    setIsChanging((prevState) => !prevState);
  };

  // Returning the component JSX.
  return (
    <>
      {/* Rendering the 'NewUserForm' component using 'createPortal' if 'isChanging' is true. */}
      {isChanging &&
        createPortal(<NewUserForm handleClose={onClick} />, document.body)}

      {/* Button to trigger the form visibility toggle. */}
      <button onClick={onClick} className={style.button}>
        {/* SVG icon for the button. */}
        <svg
          xmlns='http://www.w3.org/2000/svg'
          height='60'
          width='60'
          viewBox='0 0 448 512'
        >
          {/* SVG path representing the icon. */}
          <path d='M256 80c0-17.7-14.3-32-32-32s-32 14.3-32 32V224H48c-17.7 0-32 14.3-32 32s14.3 32 32 32H192V432c0 17.7 14.3 32 32 32s32-14.3 32-32V288H400c17.7 0 32-14.3 32-32s-14.3-32-32-32H256V80z' />
        </svg>
      </button>
    </>
  );
}
