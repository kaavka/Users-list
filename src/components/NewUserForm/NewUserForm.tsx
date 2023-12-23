import { User } from '@/types/User';
import {
  ChangeEvent,
  FormEvent,
  KeyboardEventHandler,
  useEffect,
  useState,
} from 'react';
import { FormPair } from '../FormPair/FormPair';
import { INITIAL_USER_DATA } from '@/utils/constants';
import { isValidUser } from '@/utils/validateUser';
import { postUser, updateUser } from '@/api/users';
import { useRouter } from 'next/navigation';
import style from './style.module.scss';
import classNames from 'classnames';

interface Props {
  handleClose: () => void;
  initialUser?: Omit<User, 'id'>;
}

export function NewUserForm({ initialUser, handleClose }: Props) {
  const router = useRouter();
  const [errorMessage, setErrorMessage] = useState('');
  const [user, setUser] = useState<Omit<User, 'id'>>(
    initialUser || INITIAL_USER_DATA
  );
  const [isMounted, setIsMounted] = useState(false);

  const close = () => {
    setIsMounted(false);
    setTimeout(() => {
      handleClose();
    }, 150);
  };

  useEffect(() => {
    setIsMounted(true);
  }, []);

  const onSubmit = async (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    if (!isValidUser(user)) {
      setErrorMessage('Some of the fields are not valid');
      return;
    }

    try {
      if (initialUser) {
        await updateUser(user);
      } else {
        await postUser(user);
      }
      close();
    } catch (err) {
      setErrorMessage('Server error try again later');
    }

    router.refresh();
  };

  const handleEscape: KeyboardEventHandler<HTMLFormElement> = (event) => {
    if (event.key === 'Escape') {
      close();
    }
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    let value: string | number = event.target.value;
    let key = event.target.name;

    if (event.target.type === 'number') {
      value = Number(value);
    }

    if (event.target.type === 'color') {
      key = 'iconColor';
    }

    setUser((prevState) => ({
      ...prevState,
      [key]: value,
    }));
  };

  return (
    <div className={style.container}>
      <form
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
          id='color'
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
      </form>
      {errorMessage && <div>{errorMessage}</div>}
    </div>
  );
}
