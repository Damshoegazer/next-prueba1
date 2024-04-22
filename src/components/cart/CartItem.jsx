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
        <li className="shadow flex justify-between items-center max-w-xl gap-6 p-4 my-4">
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

            <Boton className="bg-red-600" onClick={handleRemoveItem}>
                <TrashSvg />
            </Boton>
        </li>
    )
}

export default CartItem