
import ProductCard from "./ProductCard";
import { db } from "@/firebase/config";
import { collection, getDocs, query, where } from "firebase/firestore";


const getProducts = async (categoria) => {
    const productosRef = collection(db, "productos")
    const q = categoria === "todos"
            ? productosRef
            :query(productosRef, where("type", "==", categoria))
    const querySnapshot = await getDocs(q)
    const docs = querySnapshot.docs.map(doc => doc.data())

    return docs
}


const ProductsList = async ({categoria}) => {
    /* const {categoria} = params */
    const items = await getProducts(categoria)
    const firstFiveProducts = items.reduce((acc, item, index) => {
        if (index < 5) {
            acc.push(item);
        }
        return acc;
    }, []);
    
    return (
        <section>
            {
                firstFiveProducts.map(item => <ProductCard key={item.slug} item={item} />)
            }
        </section>

    )
   
}

export default ProductsList;





