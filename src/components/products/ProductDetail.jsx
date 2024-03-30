import { mockData } from "@/app/data/products";
import Image from "next/image";
import QtySelector from "./QtySelector";
import GoBack from "../ui/GoBack";

const ProductDetail = ({slug} ) => {
  const item = mockData.find(p => p.slug === slug)
    return (
        <div style={{paddingTop:"15vh", display:"flex", flexDirection:"column", gap:"10px"}}>
          <GoBack className="p-2 bg-gray-400 active:bg-gray-600 text-white rounded-lg w-1/6" />
          <div>
            <div>
              <Image 
              src={item.image}
              alt={item.title}
              width={500}
              height={500}
              />
            </div>
            <div>
              <h3>{item.title} </h3>
              <p>${item.price} </p>
              <QtySelector />
            </div>
          </div>
           <div>
            <h3>Descripcion</h3>
            <p>{item.description} </p>
           </div>
        </div>
    );
};



export default ProductDetail;
