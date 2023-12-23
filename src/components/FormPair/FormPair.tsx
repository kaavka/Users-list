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
  // Creating a reference to the input element for focusing.
  const inputRef = useRef<HTMLInputElement>(null);

  // Effect to focus the input element if isFocused send via props.
  useEffect(() => {
    if (inputRef.current && isFocused) {
      inputRef.current.focus();
    }
  }, [isFocused]);

  // Rendering the component JSX.
  return (
    <div className={style.pair}>
      {/* Label for the input field */}
      <label htmlFor={id} className={style.pair__label}>
        {text}:
      </label>
      {/* Input field */}
      <input
        type={type}
        id={id}
        name={id}
        value={value}
        onChange={onChange}
        required
        className={style.pair__input}
        placeholder={placeHolder}
        ref={inputRef} // Using the ref to focus the input element
      />
    </div>
  );
}
