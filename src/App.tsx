import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '../public/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState<number>(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 3.1415926536)}>
          + pi ≃ {count.toFixed(2)}
        </button>
        <h2>
          <a href="https://github.com/Viiiniciiiius/viiiniciiiius.github.io"><code>Viiiniciiius GitHub</code></a>
        </h2>
      </div>
    </>
  )
}

export default App
