import { useState } from 'react'
import './App.css'
import ReactShare from './reactShare/ReactShare'

function App() {
  const [count, setCount] = useState(0)

  return (
  <ReactShare/>
  )
}

export default App
