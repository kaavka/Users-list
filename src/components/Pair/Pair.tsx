import style from './style.module.scss';

interface Props {
  label: string;
  value: string;
}

// Reusable pair component
export function Pair({ label, value }: Props) {
  return (
    <p className={style.pair}>
      <span className={style.pair__label}>{label}</span>
      <span className={style.pair__value}>{value}</span>
    </p>
  );
}
