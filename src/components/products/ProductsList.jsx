import { mockData } from "@/app/data/products";
import ProductCard from "./ProductCard";

const ProductsList = ({ categoria } ) => {
    const items = categoria === "todos" ? mockData : mockData.filter(item => item.type === categoria)

    return (
        <section className="w-3/4 flex gap-2 flex-wrap  bg-gray-50" /* style={{width:"70vw", backgroundColor:"yellow", display:"flex", flexWrap:"wrap", gap:"10px"}} */>
            {
                items.map(item => <ProductCard key={item.slug} item={item} />)
            }
        </section>
    );
}

export default ProductsList;
