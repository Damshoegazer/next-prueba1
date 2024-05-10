
'use client'
import { useState } from "react"
import Boton from "../ui/Boton"
import { useCartContext } from "../context/CartContext"
import { db } from "@/firebase/config"
import { setDoc, doc, Timestamp } from "firebase/firestore"
import { useRouter } from 'next/navigation'

const createOrder = async (values, items) => {
    const order = {
        client: values,
        items: items.map(item => ({
            title: item.title,
            price: item.price,
            slug: item.slug,
            quantity: item.quantity
        })),
        date: new Date().toISOString()
    }

    const docId = Timestamp.fromDate(new Date()).toMillis()
    const orderRef = doc(db, "orders", String(docId))
    await setDoc(orderRef, order)

    return docId
}

const ClientForm = () => {
    const { cart, emptyCart } = useCartContext()
    const router = useRouter()
    const initialFormValues = {
        email: '',
        direccion: '',
        nombre: ''
    }

    const [values, setValues] = useState(initialFormValues)

    const handleChange = (e) => { 
        setValues({ 
            ...values, 
            [e.target.name]: e.target.value
        })
     }



    const handleSubmit = async (e) => {
        e.preventDefault()
        const result = await createOrder(values, cart)
        console.log(result)

        emptyCart();
        setValues(initialFormValues)

        
        setTimeout(() => {
            emptyCart();
            router.push("/productos/todos");
        }, 3000);
    }

    return (
        <form onSubmit={handleSubmit} className="flex flex-col justify-center items-center my-12 w-[60vw]">
            <input
                type="nombre"
                required
                placeholder="Tu nombre"
                className="p-2 text-black rounded w-1/2 border border-gray-500  bg-white block my-4"
                name="nombre"
                onChange={handleChange}
            />
            <input
                type="direccion"
                required
                placeholder="Tu dirección"
                className="p-2 text-black rounded w-1/2 border border-gray-500  bg-white block my-4"
                name="direccion"
                onChange={handleChange}
            />
            <input
                type="email"
                required
                placeholder="Tu email"
                className="p-2 text-black rounded w-1/2 border border-gray-500  bg-white block my-4"
                name="email"
                onChange={handleChange}
            />
            
            <Boton type="submit">Terminar mi compra</Boton>
            
        </form>
    )
}

export default ClientForm