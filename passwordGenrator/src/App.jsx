import { useState,useCallback, useRef } from 'react'

import { useEffect } from 'react';

function App() {
  const [length,setLength] = useState(8);
  const [numberAllowed,setNumberAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const[password,SetPassword] = useState("");

  const passwordRef = useRef(null);


  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

    if(numberAllowed) str += "123456789";
    if(charAllowed) str += "!@#$%^&*()_+{}[]|\`~<,>.?/";
    for (let i = 0; i <= length; i++) {
      let char;
      char = Math.floor(Math.random()*str.length +1);
      pass += str.charAt(char);
    }
    SetPassword(pass);


  },[length,numberAllowed,charAllowed,SetPassword]);

  const passwordCoping = useCallback(()=>{


    passwordRef.current.select();
    window.navigator.clipboard.writeText(password)



  },[password])

  useEffect(()=>{
    passwordGenerator()
  },[length,numberAllowed,charAllowed,passwordGenerator])
  return (
    <>
    <div 
          className='w-full  max-w-2xl mx-auto shadow-md text-md text-center align-middle text-white bg-gray-700 px-4 my-8  rounded-lg'>
      <h1 className='text-white my-1'>Password Generator</h1>
      <div className='flex shadow mb-4 '>

      <input
          className='w-full py-1 px-3 outline-none font-bold text-amber-700 rounded-l-lg'
          value={password}
          placeholder='password'
          onChange={()=>{}}
          readOnly
          ref={passwordRef}
          type="text"
       />
       <button onClick={passwordCoping} className='bg-blue-700 px-2 py-2 rounded-r-lg  shrink-0'>copy

       </button>
       </div>
      <div className='flex  text-amber-500 font-bold '>

        <input 
            className=' accent-blue-700 rounded '
            min={6}
            max={20}
            value={length}
            onChange={(e)=>{setLength(e.target.value)}}
            type="range"
        />
      <label className='mx-2'>Length-{length}</label>
      <label  className='mx-2'>
      <input
          className='mx-1 accent-blue-700'
          onChange={()=>{setNumberAllowed((pre)=> !pre)}}
          type="checkbox" 
          checked = {numberAllowed}
      />
      number
      </label>
      <label className='mx-2' >
      <input
          className='mx-1 accent-blue-700'
          type="checkbox" 
          checked = {charAllowed}
          onChange={()=>{setCharAllowed(pre=>!pre)}}
      />
      characters
      </label>
      
      </div>
    </div>
    </>
    
  )
}

export default App
