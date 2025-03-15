import {ReactNode} from 'react'
import s from './Modal.module.scss'
import {createPortal} from 'react-dom'

type Props = {
  isOpen: () => void;
  onClose: () => void;
  children: ReactNode;
  value: boolean;
}

const Modal = ({value, onClose, children}: Props) => {
  if (!value) return null

  return createPortal(
    <div className={s.overlay} onClick={onClose}>
      <div className={s.modal} onClick={(e) => e.stopPropagation()}>
        <button className={s.closeButton} onClick={onClose}>
          &times;
        </button>
        {children}
      </div>
    </div>,
    document.body
  )
}

export default Modal
