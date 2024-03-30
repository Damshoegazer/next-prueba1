'use client'
import Link from "next/link";
import { usePathname } from "next/navigation";


const links = [
    {label: "Todos", href: "/productos/todos"},
    {label: "Camisetas", href: "/productos/camisetas"},
    {label: "Pantalones", href: "/productos/pantalones"},
    {label: "Zapatillas", href: "/productos/zapatillas"},
    {label: "Shorts", href: "/productos/shorts"},
    {label: "Chaquetas", href: "/productos/chaquetas"},
    {label: "Medias", href: "/productos/medias"},
    {label: "Gorras", href: "/productos/gorras"},
    {label: "Mallas", href: "/productos/mallas"},
    {label: "Chándals", href: "/productos/chándals"},
    {label: "Sudaderas", href: "/productos/sudaderas"},
    {label: "Tops", href: "/productos/tops"},
    
]

const CategoriesMenu = () => {
    const pathname = usePathname()

    return (
        <aside className="flex flex-col gap-3 w-40 h-full bg-gray-50 p-2 border border-gray-300 rounded-lg">
            {links.map(link => (
                    <Link 
                        key={link.label} 
                        href={link.href}
                        className={`${pathname === link.href ? "font-semibold p-1 bg-slate-200" :''} py-2 pl-4 p-2 rounded-lg text-gray-600`}
                    >
                        {link.label}
                    </Link>
                ))}
        </aside>
    )
}

export default CategoriesMenu

