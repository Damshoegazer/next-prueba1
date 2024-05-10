import Boton from "../ui/Boton"
import Image from "next/image"
import TrashSvg from "./TrashSvg"
import { useCartContext } from "../context/CartContext"

const CartItem = ({item}) => {
    const { removeFromCart } = useCartContext();
    const handleRemoveItem = () => {

        removeFromCart(item.slug);
    };
    return (
        <div className="w-[40vw] flex justify-center items-center">
        <li className="shadow flex justify-between items-center w-[30vw] gap-6 p-4 my-4">
            <Image
                src={item.image}
                alt={item.title}
                width={80}                
                height={80}                
            />
            <div>
                <h3>{item.title}</h3>
                <p className="text-sm font-semibold">${item.price * item.quantity}</p>
                <p className="text-sm">Cantidad: {item.quantity}</p>
            </div>

            <Boton className="bg-pink-800" onClick={handleRemoveItem}>
                <TrashSvg />
            </Boton>
        </li>
        </div>
    )
}

export default CartItem