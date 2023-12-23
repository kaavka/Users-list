import { User } from '@/types/User';
import { DeleteButton } from '../DeleteButton/DeleteButton';
import { EditButton } from '../EditButton/EditButton';
import style from './style.module.scss';

interface Props {
  userColor: string;
  user: User;
}

// The 'UserIcons' component definition.
export function UserIcons({ userColor, user }: Props) {
  // Rendering JSX to display user icons and functionality.
  return (
    <div className={style.icons}>
      {/* Container for functional icons (Delete and Edit). */}
      <div className={style.icons__functional}>
        {/* DeleteButton component with the user object, to know which user edit*/}
        <DeleteButton user={user} />

        {/* EditButton component with the user object, to know which user delete*/}
        <EditButton user={user} />
      </div>

      {/* Container for the user icon with the specified background color. */}
      <div
        className={style.icons__user}
        style={{ backgroundColor: userColor }}
      />
    </div>
  );
}
