import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import login  from './Components/login/login'
import { Login } from '@mui/icons-material'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <Login/>
      </div>
    </>
  )
}

export default App
