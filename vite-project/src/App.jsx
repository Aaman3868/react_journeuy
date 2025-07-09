import { useState, useCallback,useEffect,useRef } from 'react'
import reactLogo from './assets/react.svg';
import viteLogo from '/vite.svg';
import "tailwindcss";
import './App.css';

function App() {
  const [counter, setCounter] = useState(5);
  // const [color,setcolor] = useState("olive")
const [length , setlength] = useState(8)
const [numberallow , setnumberallow] = useState(false)
const [charallow , setcharallow] = useState(false)
const [password , setpassword] = useState("")

const passwordref = useRef(null)


const passwordgenrator = useCallback(() =>{
  let pass =  ""
  let str =  "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";

  if(numberallow) str += "0123456789"
  if(charallow) str += "!@#$%^&*(){}[]~'";

  for(let i = 1;  i<= length; i++){
    let char = (Math.random() * str.length + 1)

     pass += str.charAt(char);
  }

  setpassword(pass)
},[length,numberallow,charallow])
passwordref.current?.select();
const copypassword = useCallback(() => {

window.navigator.clipboard.writeText(password)
},[password])

useEffect(()=>{
  passwordgenrator()
},[length,numberallow,charallow,setpassword])
  const addvalue = () => {
    const newCount = counter + 1;

    if (newCount > 20) {
      setCounter(1);
    } else {
      setCounter(newCount);
    }
  };

  const minuscount = () => {
    const newCount = counter - 1;

    if (newCount < 0) {
      alert("Minus not allowed. Resetting to 1.");
      setCounter(1);
    } else {
      setCounter(newCount);
    }
  };

  return (
    <>
    
      <h1>Welcome to React</h1>
      <h2>Counter Value: {counter}</h2>
      <button onClick={addvalue}>Add Value</button>
      <br />
      <button onClick={minuscount}>Remove</button>

      
     {/* Password generater */}
    <h1 className='text-center text-white text-3xl py-2'>Password Genrator</h1>

   <div className='w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 '>
  <div className='flex shadow rounded-lg overflow-hidden mb-4'>
    <input
      type="text"
      value={password}
      className='outline-none w-full py-2 px-3 bg-white text-black'
      placeholder='password'
      readOnly
      ref={passwordref}
    />
    <button onClick={copypassword} className='outline-none bg-red-500 text-white px-4 hover:bg-red-600 transition'>
      Copy
    </button>
  </div>
  <div className='flex text-sm gap-x-2'>
      <div className='flex items-center gap-x-1'>
        <input type="range"
        min={6}
        max={100}
        value={length}
        className='cursor-pointer'
        onChange={(e) =>(setlength(e.target.value))}
         />
         <label>Length: {length}</label>
      </div>
      <div className='flex text-sm gap-x-2'>
        <input
      type="checkbox"
      defaultChecked= {numberallow}
     
      id='numberInput'
     onChange={()=>{setnumberallow((prev) => !prev)}}
    />
    <label>Numbers</label>
      </div>

       <div className='flex text-sm gap-x-2'>
        <input
      type="checkbox"
      defaultChecked= {charallow}
     
      id='charInput'
     onChange={()=>{setnumberallow((prev) => !prev)}}
    />
    <label>Charcters</label>
      </div>

  </div>
</div>


    








    {/* BG chnages */}
    {/* <div className='w-full h-screen duration-200' style={{backgroundColor:color}}>
      <div className='fixed flex flex-wrap justify-center bottom-12 inset-x-0'> 
        <div className='flex flex-wrap justify-center gap-3 shadow-lg bg-white py-2 px-3 rounded-3xl'>
          <button onClick={() => setcolor("orange")} className='outline-none px-4 rounded-3xl text-white' style={{backgroundColor:"orange"}}>orange</button>
          <button  onClick={() => setcolor("white")}className='outline-none px-4 rounded-3xl text-white' style={{backgroundColor:"blue"}}>White</button>
          <button onClick={() => setcolor("green")}className='outline-none px-4 rounded-3xl text-white' style={{backgroundColor:"green"}}>Green</button>

        </div>
      </div>
    </div> */}

   




      
    </>
  );
}

export default App;
