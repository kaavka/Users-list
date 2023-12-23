import Link from 'next/link';
import style from './style.module.scss';

export function Header() {
  return (
    <header className={style.header}>
      <Link href={'/'} className={style.header__logo}>
        <h2 className={style.header__logo}>Logo</h2>
      </Link>
    </header>
  );
}
