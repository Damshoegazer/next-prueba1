'use client'
import { useState } from "react";
import Counter from "../ui/Counter";
import Boton from "@/components/ui/Boton";

const QtySelector = ({item}) => {
    
    const [quantity, setQuantity] = useState(1);
    const handleAdd = () => {
        console.log({
            ...item, 
        })
    }
    const inStock = item

    return (
        <div className="flex flex-col gap-5 mt-6">
            <Counter max= {inStock}counter={quantity} setCounter={setQuantity} />
            <Boton className="w-full bg-gray-500 hover:bg-slate-600" onClick={handleAdd}>Agregar al carrito</Boton>
        </div>
    );
}

export default QtySelector;
