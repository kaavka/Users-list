import { User } from '@/types/User';

export function isValidUser({
  name,
  surname,
  age,
  email,
  about,
  iconColor,
}: Omit<User, 'id'>) {
  if (
    typeof name === 'string' &&
    name.trim() !== '' &&
    typeof surname === 'string' &&
    surname.trim() !== '' &&
    typeof age === 'number' &&
    age <= 100 &&
    age >= 16 &&
    typeof email === 'string' &&
    email.trim() !== '' &&
    typeof about === 'string' &&
    about.trim() !== '' &&
    typeof iconColor === 'string' &&
    iconColor.trim() !== ''
  ) {
    return true;
  } else {
    return false;
  }
}
