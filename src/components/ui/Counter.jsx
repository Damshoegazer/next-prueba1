"use client"
import Boton from "./Boton"

const Counter = ({counter, setCounter, max}) => {

    const increase = () => counter < max && setCounter(counter + 1)
    const decrease = () => counter > 1 && setCounter(counter - 1)
    const reset    = () =>  {setCounter (0)}


    return (
        <div className="flex items-center gap-3">
            <Boton onClick={decrease} className= "bg-pink-800 hover:bg-[#80205C]">-</Boton>
            <p className="text-black">{counter}</p>
            <Boton onClick={increase} className="bg-pink-800 hover:bg-[#80205C]">+</Boton>
            <Boton onClick={reset} className="bg-gray-500">Reset</Boton>
        </div>
    )
}

export default Counter
