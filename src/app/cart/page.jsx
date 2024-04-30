"use client"

import CartItem from "@/components/cart/CartItem"
import { useCartContext } from "@/components/context/CartContext"

const CartPage = () => {
    const { cart } = useCartContext()
 
    return (
        <div className="pt-56">
            <h2>Tu compra</h2>
            <ul>
                {
                    cart.map((item) => <CartItem item={item} key={item.slug}/>)
                }
            </ul>
        </div>
    )
}

export default CartPage;