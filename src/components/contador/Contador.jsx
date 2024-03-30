'use client'
import { useState } from "react";
import Button from "../boton/Button";


const Contador = () => {
    
   const [counter, setCounter] = useState(1);

    const sumar = () => {
        setCounter(counter + 1)
    }
    const restar = () => {
        setCounter(counter - 1)
    }

    return (
        <div>
            <Button className="p-4 bg-red-300" onClick= {sumar} >
                +
            </Button>
            <p>{counter} </p>
            <Button className="p-4 bg-red-300" onClick={restar}>
                -
            </Button>
        </div>
    );
};





export default Contador;
