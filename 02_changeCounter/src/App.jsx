import { useState } from 'react'

import './App.css'

function App() {
  let [count, setCount] = useState(0)

  const incCount = ()=>{
    if(count+1<=20)
      setCount(count+1)
  }

  const decCount = ()=>{
    if(count-1>=0)
      setCount(count-1)
  }
  return (
    <>
      <h1>Counter value {count}</h1>
      <button onClick={incCount}>
        Increase Count
      </button>

      <button onClick={decCount}>
        Decrease Count
      </button>
    </>
  )
}

export default App
