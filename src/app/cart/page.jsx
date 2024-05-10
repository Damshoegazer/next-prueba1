"use client"

import CartItem from "@/components/cart/CartItem"
import ClientForm from "@/components/cart/ClientForm"
import { useCartContext } from "@/components/context/CartContext"

const CartPage = () => {
    const { cart } = useCartContext()
 
    return (
        <div className="w-full pt-56 flex justify-center flex-col items-center">
            <h2 className="font-bold uppercase text-3xl">Tu compra</h2>
            <ul>
                {
                    cart.map((item) => <CartItem item={item} key={item.slug}/>)
                }
            </ul>
            <ClientForm />
        </div>
    )
}

export default CartPage;