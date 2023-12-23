import Link from 'next/link';
import style from './style.module.scss';

export function Header() {
  // Returning the component JSX.
  return (
    <header className={style.header}>
      {/* Using the 'Link' component to create navigation link. */}
      <Link href={'/'}>
        {/* Logo inside the link could be an image*/}
        <h2 className={style.header__logo}>Logo</h2>
      </Link>
    </header>
  );
}
