import { User } from '@/types/User';
import { DeleteButton } from '../DeleteButton/DeleteButton';
import { EditButton } from '../EditButton/EditButton';
import style from './style.module.scss';

interface Props {
  userColor: string;
  user: User;
}

export function UserIcons({ userColor, user }: Props) {
  return (
    <div className={style.icons}>
      <div className={style.icons__functional}>
        <DeleteButton user={user} />
        <EditButton user={user} />
      </div>
      <div
        className={style.icons__user}
        style={{ backgroundColor: userColor }}
      />
    </div>
  );
}
