import s from './App.module.scss'
import {ModalPayments} from '../components/modal-payments/modal-payments.tsx'

function App() {
  return (

    <div className={s.wrapper}>
      <ModalPayments/>
    </div>
  )
}

export default App
