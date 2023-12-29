import { User } from '@/types/User';
import {
  ChangeEvent,
  FormEvent,
  KeyboardEventHandler,
  useEffect,
  useRef,
  useState,
} from 'react';
import { FormPair } from '../FormPair/FormPair';
import { INITIAL_USER_DATA } from '@/utils/constants';
import { isValidUser } from '@/utils/validateUser';
import { postUser, updateUser } from '@/api/users';
import { useRouter } from 'next/navigation';
import style from './style.module.scss';
import classNames from 'classnames';

// Props interface for the 'NewUserForm' component.
interface Props {
  handleClose: () => void; // Callback function to handle form closure.
  initialUser?: Omit<User, 'id'>; // Initial user data for editing (optional).
}

// The 'NewUserForm' component definition.
export function NewUserForm({ initialUser, handleClose }: Props) {
  // Accessing the Next.js router instance.
  const router = useRouter();
  const formRef = useRef<HTMLFormElement>(null);

  // State to manage error messages in the form.
  const [errorMessage, setErrorMessage] = useState('');

  // State to manage the user data in the form.
  const [user, setUser] = useState(initialUser || INITIAL_USER_DATA);

  // State to track whether the form is mounted or not.
  const [isMounted, setIsMounted] = useState(false);

  // Function to close the form, its delayed to show an animation
  const close = () => {
    setIsMounted(false);
    setTimeout(() => {
      handleClose();
    }, 150);
  };

  // Effect to set 'isMounted' to true when the component mounts.
  useEffect(() => {
    setIsMounted(true);

    const handleClickOutside = (event: MouseEvent) => {
      if (formRef.current && !formRef.current.contains(event.target as Node)) {
        close();
      }
    };
    document.addEventListener('click', handleClickOutside, true);

    return () => {
      document.removeEventListener('click', handleClickOutside, true);
    };
  }, []);

  // Function to handle form submission.
  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    // Checking if the user data is valid.
    if (!isValidUser(user)) {
      setErrorMessage('Some of the fields are not valid');
      return;
    }

    try {
      // If an initial user is provided, update the user; otherwise, create a new user.
      if (initialUser) {
        await updateUser(user);
      } else {
        await postUser(user);
      }
      close();
    } catch (err) {
      // Handle server error.
      setErrorMessage('Server error, try again later');
    }

    // Refreshing the page using the router.
    router.refresh();
  };

  // Function to handle the 'Escape' key press.
  const handleEscape: KeyboardEventHandler<HTMLFormElement> = (event) => {
    if (event.key === 'Escape') {
      close();
    }
  };

  // Function to handle input changes in the form.
  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value: string | number = event.target.value;
    const key = event.target.name;

    // Converting value to number if the input type is 'number'.
    if (event.target.type === 'number' && value !== '') {
      value = Number(value);
    }

    // Updating the user state.
    setUser((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div className={style.container}>
      <form
        ref={formRef}
        onSubmit={onSubmit}
        onKeyDown={handleEscape}
        className={classNames(style.modal, {
          [style.modal__active]: isMounted,
        })}
      >
        <FormPair
          type='text'
          id='name'
          text='Enter your name'
          value={user.name}
          onChange={onChange}
          placeHolder={'Bohdan'}
          isFocused={true}
        />
        <FormPair
          type='text'
          id='surname'
          text='Enter your surname'
          value={user.surname}
          onChange={onChange}
          placeHolder='Smith'
        />
        <FormPair
          type='email'
          id='email'
          text='Enter your email'
          value={user.email}
          onChange={onChange}
          placeHolder={'example@example.com'}
        />
        <FormPair
          type='text'
          id='about'
          text='Tell anything about you'
          value={user.about}
          onChange={onChange}
          placeHolder={'tech Specialist'}
        />
        <FormPair
          type='number'
          id='age'
          text='Enter your age'
          value={user.age}
          onChange={onChange}
          placeHolder={'18'}
        />
        <FormPair
          type='color'
          id='iconColor'
          text='Choose icon color'
          value={user.iconColor}
          onChange={onChange}
        />
        <div className={style.modal__buttons}>
          <button type='submit' className={style.modal__buttons__button}>
            Submit
          </button>
          <button className={style.modal__buttons__button} onClick={close}>
            Cancel
          </button>
        </div>
        {errorMessage && (
          <div className={style.modal__error}>{errorMessage}</div>
        )}
      </form>
    </div>
  );
}
