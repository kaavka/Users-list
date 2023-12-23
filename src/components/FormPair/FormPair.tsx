import { ChangeEvent, useEffect, useRef } from 'react';
import style from './style.module.scss';

interface Props {
  type: 'text' | 'number' | 'color' | 'email';
  id: string;
  text: string;
  value: string | number;
  placeHolder?: string;
  isFocused?: boolean;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

export function FormPair({
  type,
  id,
  text,
  value,
  onChange,
  placeHolder,
  isFocused,
}: Props) {
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    if (inputRef.current && isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  return (
    <div className={style.pair}>
      <label htmlFor={id} className={style.pair__label}>
        {text}:
      </label>
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required
        className={style.pair__input}
        placeholder={placeHolder}
        ref={inputRef}
      />
    </div>
  );
}
