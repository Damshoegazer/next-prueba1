/* 'use client'
import { useState } from "react";
import Counter from "../ui/Counter";
import { useCartContext } from "../context/CartContext";
import Link from "next/link"
import Boton from "@/components/ui/Boton";

const QtySelector = ({ item }) => {
    const { addToCart, isInCart } = useCartContext()
    const [quantity, setQuantity] = useState(1)

    const handleAdd = () => {
        addToCart({
            ...item,
            quantity
        })
    }

    return (
        <div className="flex flex-col gap-5 mt-6">
            {
                isInCart && item && item.slug
                    ?   <Link
                            href={"/cart"}
                            className="rounded-lg py-2 px-4 bg-blue-600 text-white text-center">
                            Terminar mi compra
                        </Link>
                    :   <>
                            <Counter max={item.inStock} counter={quantity} setCounter={setQuantity} />
                            <Boton className="w-full hover:bg-blue-600" onClick={handleAdd}>Agregar al carrito</Boton>
                        </>
            }
        </div>
    );
}

export default QtySelector; */

"use client";
import { useState } from "react";
import Counter from "../ui/Counter";
import Boton from "../ui/Boton";
import { useCartContext } from "../context/CartContext";
import Link from "next/link";

const QtySelector = ({ item }) => {
  const { addToCart, isInCart } = useCartContext();
  const [quantity, setQuantity] = useState(1);
  console.log(item);

  const handleAdd = () => {
    addToCart({
      ...item,
      quantity,
    });
  };

  return (
    <div className="flex flex-col gap-5 mt-6">
      {isInCart(item.slug) ? (
        <Link
          href={"/cart"}
          className="rounded-lg font-bold py-2 px-4 bg-pink-800 hover:bg-[#80205C] text-white text-center"
        >
          Añadir al Carrito
        </Link>
      ) : (
        <>
          <Counter
            max={item.inStock}
            counter={quantity}
            setCounter={setQuantity}
          />
          <Boton
            className="w-full font-bold bg-pink-800 hover:bg-[#80205C]"
            onClick={handleAdd}
          >
           Seleccionar: {item.title}
          </Boton>
        </>
      )}
    </div>
  );
};

export default QtySelector;


