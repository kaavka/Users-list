'use client';

import { User } from '@/types/User';
import style from './style.module.scss';
import { deleteUser } from '@/api/users';
import { useRouter } from 'next/navigation';

interface Props {
  user: User;
}

// The 'DeleteButton' component definition.
export function DeleteButton({ user }: Props) {
  // Accessing the Next.js router instance.
  const router = useRouter();

  // Function to handle the delete button click.
  const handleDelete = async () => {
    try {
      // Calling the 'deleteUser' function with the user ID.
      await deleteUser(user.id);

      // Refreshing the page using the router, to trigger new data fetching since our users is not in useState
      router.refresh();
    } catch (err) {
      // Throwing an error if the deletion fails.
      throw err;
    }
  };

  // Returning the component JSX.
  return (
    <button
      className={style.button}
      onClick={handleDelete}
      aria-label='Delete current user'
    >
      {/* SVG icon for the delete button. */}
      <svg
        xmlns='http://www.w3.org/2000/svg'
        height='20'
        width='20'
        viewBox='0 0 448 512'
      >
        {/* SVG path representing the delete icon. */}
        <path d='M135.2 17.7L128 32H32C14.3 32 0 46.3 0 64S14.3 96 32 96H416c17.7 0 32-14.3 32-32s-14.3-32-32-32H320l-7.2-14.3C307.4 6.8 296.3 0 284.2 0H163.8c-12.1 0-23.2 6.8-28.6 17.7zM416 128H32L53.2 467c1.6 25.3 22.6 45 47.9 45H346.9c25.3 0 46.3-19.7 47.9-45L416 128z' />
      </svg>
    </button>
  );
}
