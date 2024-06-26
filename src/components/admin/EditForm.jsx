"use client"

import { useState } from "react"
import { useRouter } from 'next/navigation'
import Boton from "../ui/Boton"
import { db, storage } from "@/firebase/config"
import { doc, updateDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"

const updateProduct = async (slug, values, file) => {
    let fileURL = values.image

    if (file) {
        const storageRef = ref(storage, values.slug)
        const fileSnapshot = await uploadBytes(storageRef, file)
        fileURL = await getDownloadURL(fileSnapshot.ref)
    }

    const docRef = doc(db, "productos", slug)
    return updateDoc(docRef, {
        title: values.title,
        description: values.description,
        inStock: Number(values.inStock),
        price: Number(values.price),
        type: values.type,
        image: fileURL
    })
        .then(() => console.log("Producto actualizado correctamente"))
}


const EditForm = ({ item }) => {
    const { title, description, inStock, price, type, image } = item
    const [values, setValues] = useState({ title, description, inStock, price, type, image })
    const [file, setFile] = useState(null)
    const router = useRouter()

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()

        await updateProduct(item.slug, values, file)
        setTimeout(() => {
            router.push('/productos/todos')
        }, 500)
    }

    return (
        <div className="container m-auto pt-24 mb-24 max-w-lg">
            <form onSubmit={handleSubmit} className="pt-24">
                <label>Nombre: </label>
                <input
                    type="text"
                    value={values.title}
                    required
                    className="p-2 rounded w-full border border-gray-500  bg-white block text-black my-4"
                    name="title"
                    onChange={handleChange}
                />

                <label>Imagen: </label>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="p-2 rounded w-full border border-gray-500  bg-white block text-black my-4"
                />

                <label>Precio: </label>
                <input
                    type="number"
                    value={values.price}
                    required
                    className="p-2 rounded w-full border border-gray-500  bg-white block text-black my-4"
                    name="price"
                    onChange={handleChange}
                />

                <label>Stock: </label>
                <input
                    type="number"
                    value={values.inStock}
                    required
                    className="p-2 rounded w-full border border-gray-500  bg-white block text-black my-4"
                    name="inStock"
                    onChange={handleChange}
                />

                <label>Categoria: </label>
                <input
                    type="text"
                    value={values.type}
                    required
                    className="p-2 rounded w-full border border-gray-500  bg-white block text-black my-4"
                    name="type"
                    onChange={handleChange}
                />

                <label>Descripción: </label>
                <textarea
                    value={values.description}
                    className="resize-none w-full h-24 p-2 rounded border border-gray-500  bg-white text-black block my-4"
                    name="description"
                    onChange={handleChange}
                />

                <Boton type="submit">Enviar</Boton>
            </form>
        </div>
    )
}

export default EditForm
