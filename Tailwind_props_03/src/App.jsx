import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './component/Card';
function App() {
  const [count, setCount] = useState(0)
  let myobj = {
    username : "nirma",
    age:20
  }
  let newarry = [1,2,3,4]

  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl'>Tailwind test</h1>
      <Card username="cahi or code" btnText="click me"/>
      <Card username="nirma" btnText="visit me"/>
    </>
  )
}

export default App
