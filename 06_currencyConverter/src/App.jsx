import { useState } from 'react';
import InputBox from '../components/InputBox';
import useCurrencyInfo from '../hooks/useCurrencyInfo'
import './App.css'

function App() {
    
  const [amount, setAmount] = useState(0)
  const [convertedAmt, setConvertedAmt] = useState(0)
  const [from, setFrom] = useState("usd")
  const [to, setTo] = useState("inr")

  const currencyInfo = useCurrencyInfo(from)
  
  const options = Object.keys(currencyInfo)

  const swapConversion = ()=>{
    setFrom(to)
    setTo(from)
    setAmount(convertedAmt)
    setConvertedAmt(amount)
  }
  
  const convert = ()=>{
    setConvertedAmt(amount * currencyInfo[to])
  }

    return (
        <div
            className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
            style={{
                backgroundImage: `url('https://images.pexels.com/photos/6770775/pexels-photo-6770775.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
            }}
        >
            <div className="w-full">
                <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
                    <form
                        onSubmit={(e) => {
                            e.preventDefault();
                            convert()
                        }}
                    >
                        <div className="w-full mb-1">
                            <InputBox
                                label="From"
                                amount = {amount}
                                selectCurrency={from}
                                currencyOptions={options}
                                onAmountChange={(amt)=>{
                                    setAmount(amt)
                                }}
                                onCurrencyChange={(curr)=>{
                                  setFrom(curr)
                                }}
                            />
                        </div>
                        <div className="relative w-full h-0.5">
                            <button
                                type="button"
                                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                                onClick={swapConversion}
                            >
                                swap
                            </button>
                        </div>
                        <div className="w-full mt-1 mb-4">
                            <InputBox
                                label="To"
                                amount = {convertedAmt}
                                amountDisable={true}
                                selectCurrency={to}
                                currencyOptions={options}
                                onCurrencyChange={(curr)=>{
                                  setTo(curr)
                                }}
                            />
                        </div>
                        <button 
                        type="submit" 
                        className="w-full bg-blue-600 
                        text-white px-4 py-3 rounded-lg"
        
                        >
                            
                            Convert 
                        </button>
                    </form>
                </div>
            </div>
        </div>
    )
}

export default App
