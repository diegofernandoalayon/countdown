import { useState } from 'react'

import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <article className="App">
      <section className="container">
        <h1>CountDown</h1>
      </section>
    </article>
  )
}

export default App
