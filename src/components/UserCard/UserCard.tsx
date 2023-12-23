import { User } from '@/types/User';
import style from './style.module.scss';
import Link from 'next/link';
import { Pair } from '../Pair/Pair';
import { UserIcons } from '../UserIcons/UserIcons';

interface Props {
  user: User;
}

function UserCard({ user }: Props) {
  return (
    <article className={style.card}>
      <UserIcons userColor={user.iconColor} user={user} />
      <h3 className={style.card__title}>
        <span className={style.card__title__name}>{user.name}</span>
        <span className={style.card__title__surname}>{user.surname}</span>
      </h3>
      <Link href={user.email}>{user.email}</Link>
      <Pair label='Age:' value={String(user.age)} />
      <Pair label='About:' value={user.about} />
    </article>
  );
}

export default UserCard;
