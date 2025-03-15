import s from './App.module.scss'
import {Button} from '../components/button/button.tsx'

function App() {

  return (

    <div className={s.wrapper}>
      <Button variant={'normal'}>Досрочный платёж</Button>
    </div>
  )
}

export default App
