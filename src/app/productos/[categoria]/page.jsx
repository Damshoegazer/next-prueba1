import CategoriesMenu from '@/components/products/CategoriesMenu'
import '../../productos/products.css'
import ProductsList from '@/components/products/ProductsList'
/* import { Suspense } from "react" */


export async function generateMetadata ({params, searchParams}, parent ) {
    return {
        title: `${params.categoria}`
    }
}

export const revalidate = 0

export async function generateStaticParams() {
    return [
        { categoria: 'todos' },
        { categoria: 'camisetas' },
        { categoria: 'pantalones' },
        { categoria: 'zapatillas' },
        { categoria: 'shorts' },
        { categoria: 'chaquetas' },
        { categoria: 'medias' },
        { categoria: 'gorras' },
        { categoria: 'mallas' },
        { categoria: 'tops' },
        { categoria: 'chándals' },
        { categoria: 'sudaderas' },
    ]
}

const Productos = ({params} ) => {
    const {categoria} = params
    
    return(
        <aside style={{justifyContent:"center", paddingLeft:"5vw", width:"80vw"}} className="productsContainer bg-gray-50 flex w-full ">

            <div style={{display:"flex", width:"100%", justifyContent:"space-evenly"}}>
                <CategoriesMenu />
                <ProductsList categoria={categoria} />
            </div>
        </aside>
    )
}

export default Productos;



