import styles from './page.module.css';
import { getUsers } from '@/api/users';
import style from './page.module.scss';

export default async function Home() {
  const users = await getUsers();
  return <div className={styles.page}></div>;
}
