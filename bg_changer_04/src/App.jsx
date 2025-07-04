import React, {useState} from 'react'

function App() {
  const [color, setColor] = useState("olive")

  return (
   <div className="w-full h-screen  duration-200"
   style={{backgroundColor: color}}
   >
    <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
      <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white px-3 py-2 rounded-3xl">

        onClick{() => setColor("red")}
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
        style={{backgroundColor:"red"}}>Red</button>

        onClick{() => setColor("green")}
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
        style={{backgroundColor:"green"}}>green</button>
         
         onClick{() => setColor("blue")}
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
        style={{backgroundColor:"blue"}}>blue</button>

        onClick{() => setColor("yellow")}
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
        style={{backgroundColor:"yellow"}}>yellow</button>
         
         onClick{() => setColor("orange")}
        <button className="outline-none px-4 py-1 rounded-full text-white shadow-lg "
        style={{backgroundColor:"orange"}}>orange</button>

      </div>
    </div>
   </div>
  )
}

export default App
