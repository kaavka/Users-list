import { User } from '@/types/User';
import style from './style.module.scss';
import Link from 'next/link';
import { Pair } from '../Pair/Pair';
import { UserIcons } from '../UserIcons/UserIcons';

interface Props {
  user: User;
}

// The 'UserCard' component definition.
function UserCard({ user }: Props) {
  // Rendering JSX to display user information.
  return (
    <article className={style.card}>
      {/* Displaying user icons with the specified color. */}
      <UserIcons userColor={user.iconColor} user={user} />

      {/* Displaying user name and surname. */}
      <h3 className={style.card__title}>
        <span className={style.card__title__name}>{user.name}</span>
        <span className={style.card__title__surname}>{user.surname}</span>
      </h3>

      {/* Creating a link to the user's email address. */}
      <Link href={user.email}>{user.email}</Link>

      {/* Displaying user age and about information using the 'Pair' component. */}
      <Pair label='Age:' value={String(user.age)} />
      <Pair label='About:' value={user.about} />
    </article>
  );
}

export default UserCard;
