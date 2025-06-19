import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Welcome from './welcome'

function App() {
 // const [count, setCount] = useState(0)

  return (
    <>
   {/* <Welcome name='vishnu' country="india"/>*/}
   <Skills skill={['html', 'css', 'js', 'react']}/>
    <h1>hello world</h1>
    </>
  )
}

export default App
