import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [color,setColor] = useState("brown")



  return (
    <div className='w-full' style={{backgroundColor:color}}>
      <h1 className="text-3xl  underline">himanshu mittal</h1>
     <div className='w-full'>
     <button style={{backgroundColor:'red', color:'blue'}} className='bg-blue-300 c p-4 m-2 rounded-xl'  onClick={()=>{setColor("red")}}>red</button>
      <button style={{backgroundColor:'blue', color:'pink'}} s className= ' p-4 m-2 rounded-xl'  onClick={()=>{setColor("blue")}}>blue</button>
      <button style={{backgroundColor:'pink', color:'yellow'}} className=' c p-4 m-2 rounded-xl'  onClick={()=>{setColor("pink")}}>pink</button>
      <button style={{backgroundColor:'yellow', color:"red"}} className=' c p-4 m-2 rounded-xl'  onClick={()=>{setColor("yellow")}}>yellow</button>

     </div>
      
    </div>
  )
}

export default App
