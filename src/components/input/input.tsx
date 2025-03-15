import {useRef} from 'react'
import s from './Input.module.scss'

type Props = {
  title?: string;
  error?: string
};

export function Input({title, error}: Props) {
  const inputRef = useRef<HTMLInputElement>(null)

  const focusInput = () => inputRef.current?.focus()


  return (
    <div className={s.wrapper}>
      {title && <h3 className={s.title} onClick={focusInput}>{title}</h3>}
      <input className={s.input} ref={inputRef} type="text"/>
      {error && <div>{error}</div>}
    </div>
  )
}
