import { getUsers } from '@/api/users';
import style from './page.module.scss';
import UserCard from '@/components/UserCard/UserCard';
import { AddUser } from '@/components/AddUser/AddUser';

// The default asynchronous function for the page.
// This function fetches user data using 'getUsers' and renders the page.
export default async function Page() {
  // Fetching users data asynchronously. We are using such approach to make our page server side
  const users = await getUsers();

  return (
    // Container div with the 'page' class for styling.
    <div className={style.page}>
      {/* Mapping over the users array and rendering a 'UserCard' component for each user. */}
      {users?.map((user) => <UserCard user={user} key={user.id} />)}

      {/* Rendering the 'AddUser' component for adding new users. */}
      <AddUser />
    </div>
  );
}
