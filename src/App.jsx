import { useState } from 'react'

import './App.css'
import CountDown from './components/Countdown'
import FormTime from './components/FormTime'

function App () {
  const [timerCreated, setTimerCreated] = useState(true)

  return (
    <article className='App'>
      <section className='container'>
        <h1>CountDown</h1>
        <div className='countdown'>
          {
            timerCreated ? <CountDown /> : <FormTime setTimerCreated={setTimerCreated} />
          }
        </div>

      </section>
    </article>
  )
}

export default App
