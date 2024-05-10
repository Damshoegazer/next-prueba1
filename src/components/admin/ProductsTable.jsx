
import Link from "next/link"
import Image from "next/image"


const ProductsTable = async () => {
    
    
    const items = await fetch(`http://localhost:3000/api/productos/todos`, {
        cache: 'no-store',
    }).then(r => r.json())

    return (
        <div className="z-0 ">
       
           <Link
                href={"/admin/create"}
                className="rounded bg-[#809B9B] p-2 text-white"
            >
                Crear nuevo
            </Link> 
            <div className="overflow-x-auto pt-10">

                <table className="w-full text-xs text-left text-white-600">
                    <thead className="text-xs text-gray-200 uppercase">
                        <tr>
                            <th scope="col" className="px-3 py-2 text-gray-600">Nombre</th>
                            <th scope="col" className="px-3 py-2 text-gray-600">Precio</th>
                            <th scope="col" className="px-3 py-2 text-gray-600">En stock</th>
                            <th scope="col" className="px-3 py-2 text-gray-600">Tipo</th>
                            <th scope="col" className="px-3 py-2 text-gray-600">Imagen</th>
                            <th scope="col" className="px-3 py-2 text-gray-600">Slug</th>
                            <th scope="col" className="px-3 py-2 text-gray-600">Descripción</th>
                            <th scope="col" className="px-3 py-2 text-gray-600">Acciones</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            items.map((item) => (
                                <tr key={item.slug}>
                                    <td className="p-2 text-lg text-gray-400">{item.title}</td>
                                    <td className="p-2 text-base">{item.price}</td>
                                    <td className="p-2 text-base">{item.inStock}</td>
                                    <td className="p-2 text-base">{item.type}</td>
                                    <td className="p-2">
                                         <Image
                                            src={`${item.image}`}
                                            alt={item.title}
                                            width={80}
                                            height={80}
                                        /> 
                                    </td>
                                    <td className="p-2">{item.slug}</td>
                                    <td className="p-2 truncate max-w-prose text-base">{item.description}</td>
                                    <td className="p-2 flex gap-1">
                                        <Link
                                            href={`/admin/edit/${item.slug}`}
                                            className="rounded bg-[#809B9B] p-2 text-white"
                                        >
                                            Editar
                                        </Link>

                                        <Link
                                            href={`/admin/delete/${item.slug}`}
                                            className="rounded bg-pink-800 p-2 text-white"
                                        >
                                            Eliminar
                                        </Link>
                                        
                                        
                                    </td>
                                </tr>
                            ))
                        }
                    </tbody>
                </table>
            </div>
        </div>
    )
}

export default ProductsTable