
import { useState } from "react"
// import Colorbtn from "./Colorbtn"





function App() {

  const [bgclr,setBgclr] = useState("brown");

  const  appStyle = {
    backgroundColor : bgclr,
    

  };



const [btnclr, setBtnclr] = useState("")


  return (
    <div className="w-full " style={{backgroundColor:bgclr, width:'auto'}} >
      <h1>himanshu mittal with vite </h1>

      
        <button style={{backgroundColor:"red"}} onClick={()=>setBgclr("red")}>red</button>
        <button style={{backgroundColor:"blue"}} onClick={()=>setBgclr("blue")}>blue</button>
        <button style={{backgroundColor:"pink"}} onClick={()=>setBgclr("pink")}>pink</button>
        <button style={{backgroundColor:"yellow"}} onClick={()=>setBgclr("yellow")}>yellow</button>
      


      
    </div>
  )
}

export default App
