import { useState, useCallback, useEffect, useRef } from 'react'
import './App.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed, setCharAllowed] = useState(false)
  const [password, setPassword] = useState("")

  const passwordRef = useRef(null)
  const passwordGenerator = useCallback(() => {
    let pass = ""
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz"

    if (numAllowed)
      str += "0123456789"
    if (charAllowed)
      str += "!@#$%^&*"

    for (let i = 0; i < length; i++) {
      pass += str[Math.floor(Math.random() * str.length + 1)]
    }

    setPassword(pass)
  }, [length, numAllowed, charAllowed])

  const copyToClipBoard = useCallback(()=>{
    passwordRef.current?.select()
    window.navigator.clipboard.writeText(password)
  }, [password])
  useEffect(() => {
    passwordGenerator()
  }, [length, numAllowed, charAllowed, passwordGenerator])
  return (
    <>
      <div className=' bg-gray-500 rounded-xl h-auto w-xl m-auto mt-5 p-5 font-sans'>

        <h1 className="text-3xl text-center " >Password generator</h1>
        <div className="flex mt-5 ml-5 w-full ">
          <input
            type="text"
            className="bg-white border border-gray-300 rounded-l-xl p-2  focus:outline-none"
            value={password}
            placeholder={password}
            ref={passwordRef}
            readOnly
          />
          <button
            className="bg-blue-500 text-white border border-gray-300 border-l-0 rounded-r-xl px-4 hover:bg-blue-600 transition"
            onClick={copyToClipBoard}
          >
            Copy
          </button>
        </div>


        <div className='flex items-center mt-5 ml-5 gap-8'>
          <div className='flex'>
            <input type="range" name="" id=""
              className=''
              min={0}
              max={50}
              value={length}
              onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="" className='text-orange-600'>Length:{length}</label>
          </div>

          <div>
            <input type="checkbox" name="" id=""
              onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label htmlFor="">Numbers</label>
          </div>

          <div>
            <input type="checkbox" name="" id=""
              value={charAllowed}
              onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="">Characters</label>
          </div>

        </div>


      </div>
    </>
  )
}

export default App
