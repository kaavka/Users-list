import Link from 'next/link';

export function Header() {
  return (
    <header>
      <Link href={'/'}>
        <h2>Logo</h2>
      </Link>
    </header>
  );
}
