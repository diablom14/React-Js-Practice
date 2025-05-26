import './App.css'
import { useState } from 'react'
import Button from '../components/button'
function App() {
  
  const colorArray = ["blue", "red", "lavender", "pink", "green", "yellow"]
  const [color, setColor] = useState("blue")
  const bgMap = {
    blue: 'bg-blue-100',
    red: 'bg-red-100',
    lavender: 'bg-purple-200', // closest available
    pink: 'bg-pink-100',
    green: 'bg-green-100',
    yellow: 'bg-yellow-100',
  };
  return (
    <>
      <div className={`h-screen w-screen ${bgMap[color]}`}>
        <div className={` fixed bottom-5 left-100  
      rounded-xl p-4 bg-gray-400 
      flex justify-center gap-2 
      `}>
          {colorArray.map((item, index) => {
            return (
              <Button key={`${index}`} bgColor={`${item}`}
                setColor={setColor}
              />
            )

          }
          )}

        </div>
      </div>


    </>
  )
}

export default App
