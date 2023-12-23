import { getUsers } from '@/api/users';
import style from './page.module.scss';
import UserCard from '@/components/UserCard/UserCard';
import { AddUser } from '@/components/AddUser/AddUser';

export default async function Page() {
  const users = await getUsers();

  return (
    <div className={style.page}>
      {users?.map((user) => <UserCard user={user} key={user.id} />)}
      <AddUser />
    </div>
  );
}
