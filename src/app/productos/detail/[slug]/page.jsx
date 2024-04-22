import ProductDetail from "@/components/products/ProductDetail";




const DetailPage = ({params} ) => {
    const {slug} = params
    return(
        <main className="bg-gray-50" style={{display:"flex", width:"100%", justifyContent:"center", marginBottom:"100px"}}>
            <ProductDetail slug={slug} />
        </main>
    )
}

export default DetailPage;