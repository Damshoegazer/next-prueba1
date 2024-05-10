"use client"

import { useState } from "react"
import Boton from "../ui/Boton"
import { doc, setDoc } from "firebase/firestore"
import { ref, uploadBytes, getDownloadURL } from "firebase/storage"
import { db, storage } from "@/firebase/config"

const createProduct = async (values, file) => {
    const storageRef = ref(storage, values.slug)
    const fileSnapshot = await uploadBytes(storageRef, file)
    const fileURL = await getDownloadURL(fileSnapshot.ref)

    const docRef = doc(db, "productos", values.slug)
    return setDoc(docRef, {
        ...values,
        image: fileURL
    }).then(() => console.log("Producto creado exitosamente"))
}

const CreateForm = () => {
    const [values, setValues] = useState({ 
        title: '', 
        description: '', 
        inStock: 0,
        price: 0, 
        type: '', 
        slug: '' 
    })
    const [file, setFile] = useState(null)

    const handleChange = (e) => {
        setValues({
            ...values,
            [e.target.name]: e.target.value
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        await createProduct(values, file)
    }

    

    return (
        <div className="container m-auto pt-28 pb-28 max-w-lg">
            <form onSubmit={handleSubmit} className="">
                <label>Slug: </label>
                <input
                    type="text"
                    value={values.slug}
                    required
                    className="p-2 rounded w-full border border-gray-300  bg-white block my-4"
                    name="slug"
                    onChange={handleChange}
                />

                <label>Imagen: </label>
                <input
                    type="file"
                    onChange={(e) => setFile(e.target.files[0])}
                    className="p-2 rounded w-full bg-gray-200 block my-4"
                />

                <label>Nombre: </label>
                <input
                    type="text"
                    value={values.title}
                    required
                    className="p-2 rounded w-full border border-gray-300  bg-white block my-4"
                    name="title"
                    onChange={handleChange}
                />

                <label>Precio: </label>
                <input
                    type="number"
                    value={values.price}
                    required
                    className="p-2 rounded w-full border border-gray-300  bg-white block my-4"
                    name="price"
                    onChange={handleChange}
                />

                <label>Stock: </label>
                <input
                    type="number"
                    value={values.inStock}
                    required
                    className="p-2 rounded w-full border border-gray-300  bg-white block my-4"
                    name="inStock"
                    onChange={handleChange}
                />

                <label>Categoria: </label>
                <input
                    type="text"
                    value={values.type}
                    required
                    className="p-2 rounded w-full border border-gray-300  bg-white block my-4"
                    name="type"
                    onChange={handleChange}
                />

                <label>Descripción: </label>
                <textarea
                    value={values.description}
                    className="resize-none w-full h-24 p-2 rounded block border border-gray-300  bg-white my-4"
                    name="description"
                    onChange={handleChange}
                />

                <Boton type="submit" className="bg-[#809B9B]">Enviar</Boton>
            </form>
        </div>
    )
}

export default CreateForm