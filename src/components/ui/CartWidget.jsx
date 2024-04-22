"use client"
import Link from "next/link"
import { useCartContext } from "../context/CartContext"
import CartSvg from "../navBar/links/CartSvg"

const CartWidget = () => {
    const { totalQty } = useCartContext()
    
    return (
        <Link href={"/cart"} className={`text-base text-slate-100 p-3 flex items-center`}>
          <CartSvg />
            <span>{totalQty()}</span>
        </Link>
    )
}

export default CartWidget