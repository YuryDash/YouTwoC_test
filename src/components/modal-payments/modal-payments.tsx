import Modal from '../modal/modal.tsx'
import {useBoolean} from '../../hooks/useBoolean.ts'
import {Button} from '../button/button.tsx'
import s from './modal-payments.module.scss'
import {Input} from '../input/input.tsx'


export function ModalPayments() {
  const {setFalse, setTrue, value} = useBoolean(false)

  const openModal = () => setTrue()
  const closeModal = () => setFalse()

  return (
    <>
      <Modal isOpen={openModal} onClose={closeModal} value={value}>
        <div className={s.wrapper}>
          <h3 className={s.title}>
            Платежи по кредиту
          </h3>
          <p className={s.description}>Введите сумму кредита и выберите срок, на который вы хотите его оформить.
            <br/>Мы автоматически рассчитаем для вас ежемесячный платеж,
            чтобы вы могли лучше спланировать свои финансы. </p>
        </div>
        <Input title={'Ваша сумма кредита'}/>
        <Button variant="text">Рассчитать</Button>
      </Modal>
      <Button onClick={openModal} variant={'normal'}>Досрочный платёж</Button>
    </>

  )
}
