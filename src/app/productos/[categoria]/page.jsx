import CategoriesMenu from '@/components/products/CategoriesMenu'
import '../../productos/products.css'
import ProductsList from '@/components/products/ProductsList'


export async function generateMetadata ({params, searchParams}, parent ) {
    return {
        title: `${params.categoria}`
    }
}


const Productos = ({params} ) => {
    const {categoria} = params
    
    return(
        <aside style={{justifyContent:"center", paddingLeft:"10vw"}} className="productsContainer bg-gray-50 flex w-full ">

            <div style={{display:"flex", width:"100%", justifyContent:"space-evenly"}} /* className='flex flex-row' */>
                <CategoriesMenu />
                <ProductsList categoria={categoria} />
            </div>
        </aside>
    )
}

export default Productos;



