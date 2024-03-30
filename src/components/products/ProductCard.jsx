import Image from "next/image";
import Link from "next/link";

const ProductCard = ({item} ) => {
    return (
        <div style={{height:"470px"}} className="border bg-gray-100 rounded-lg border-gray-300 hover:bg-slate-200">
            <Link href={`/productos/detail/${item.slug}`}>

                <Image src={item.image} alt={item.title} width={400} height={400} style={{objectFit: "contain"}} />
                <div className="p-1">
                    <h4 className="font-bold text-gray-500">{item.title} </h4>
                    <p className="font-medium text-gray-400" >${item.price} </p>
                </div>
            </Link>
        </div>
    );
}

export default ProductCard;
