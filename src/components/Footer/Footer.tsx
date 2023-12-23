import Link from 'next/link';
import style from './style.module.scss';

// simple footer to make our page looks prettier with link to my github
export function Footer() {
  return (
    <footer className={style.footer}>
      <h2 className={style.footer__developed}>
        <span>Developed by</span>
        <Link href={'https://github.com/kaavka'}>Bohdna Kava</Link>
      </h2>
    </footer>
  );
}
