import { useState } from 'react';
import { InputBox } from "./components"; 
import useCurrencyInfo from './hooks/useCurrencyinfo'; // Ensure correct case!


function App() {
  const [amount, setamount] = useState(0);
  const [From, setFrom] = useState("usd");
  const [To, setTo] = useState("inr");
  const [convertedAmount, setconvertedAmount] = useState(0);

  const CurrencyInfo = useCurrencyInfo(From);
  const options = CurrencyInfo.usd ? Object.keys(CurrencyInfo.usd) : [];
  
  

  const swap = () => {
    setFrom(To);
    setTo(From);
    setconvertedAmount(amount);
    setamount(convertedAmount);
  };

  const convert = () .,=> {
    
    setconvertedAmount(amount * (CurrencyInfo[From]?.[To] || 1));
  };

  return (
    <div
      className="w-full h-screen flex flex-wrap justify-center items-center bg-cover bg-no-repeat"
      style={{
        backgroundImage: `url('https://images.pexels.com/photos/3532540/pexels-photo-3532540.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2')`,
      }}
    >
      <div className="w-full">
        <div className="w-full max-w-md mx-auto border border-gray-60 rounded-lg p-5 backdrop-blur-sm bg-white/30">
          <form
            onSubmit={(e) => {
              e.preventDefault();
              convert();
            }}
          >
            <div className="w-full mb-1">
              <InputBox
                label="From"
                amount={amount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setFrom(currency)} // FIXED
                selectCurrency={From}
                onAmountChange={(amount) => setamount(amount)} // FIXED
              />
            </div>
            <div className="relative w-full h-0.5">
              <button
                type="button"
                className="absolute left-1/2 -translate-x-1/2 -translate-y-1/2 border-2 border-white rounded-md bg-blue-600 text-white px-2 py-0.5"
                onClick={swap}
              >
                swap
              </button>
            </div>
            <div className="w-full mt-1 mb-4">
              <InputBox
                label="To"
                amount={convertedAmount}
                currencyOptions={options}
                onCurrencyChange={(currency) => setTo(currency)}
                selectCurrency={To} // FIXED
                amountDisable
              />
            </div>
            <button type="submit" className="w-full bg-blue-600 text-white px-4 py-3 rounded-lg">
              Convert {From.toUpperCase()} to {To.toUpperCase()}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default App;
