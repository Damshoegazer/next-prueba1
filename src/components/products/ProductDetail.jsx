

"use client"
import Image from "next/image";
import { useState , useEffect } from "react";
import Link from "next/link";
import { usePathname } from 'next/navigation'
import QtySelector from "./QtySelector";
import {  getDoc , doc } from "firebase/firestore"
import { db } from "@/firebase/config";
import path from 'path';




const ProductDetail = ({ slug }) => {
  const pathname = usePathname();
  const currentFolder = path.basename(pathname);

  const [product, setProduct] = useState({
    title: "",
    description: "",
    image: "",
    inStock: null,
    price: null,
    slug: "",
    type:""
  });

  const getProductDetails = async () => {
    try {
      const productRef = doc(db, 'productos', currentFolder);
      const docSnapshot = await getDoc(productRef);
      const productData = docSnapshot.data();
      if (productData) {
        setProduct({
          title: productData.title,
          description: productData.description,
          image: productData.image,
          inStock: productData.inStock,
          price: productData.price,
          slug: productData.slug,
          type: productData.type
        });
      }
    } catch (error) {
      console.error('Error al obtener los detalles del producto:', error);
      toast.error('Error al obtener los detalles del producto');
    }
  };

  useEffect(() => {
    const fetchData = async () => {
      await getProductDetails();
    };
    fetchData();
  }, [currentFolder]);

  return (
    <>
      <div className="bg-gray-100 py-8 rounded-xl mt-56">
        <div className="max-w-6xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row -mx-4">
            <div className="md:flex-1 px-4">
              <div className="h-[460px] rounded-lg bg-gray-300  mb-4">
                <Image
                  src={`${product.image}`}
                  alt={product.title}
                  width={500}
                  height={300}
                  layout="responsive"
                  className="w-full h-full object-cover"
                />
              </div>
              <div className="flex -mx-2 mb-4">
                
                <div className="w-1/2 px-2">
                  <Link
                    href={"/productos/todos"}
                    className="w-full bg-gray-500 ml-[20px] text-gray-100 p-2 rounded-md font-bold hover:bg-gray-300 hover:text-gray-500"
                  >
                    Catálogo
                  </Link>
                </div>
              </div>
            </div>
            <div className="md:flex-1 px-4">
              <h2 className="text-2xl font-bold text-gray-800  mb-2">
                {product.title}
              </h2>

              <div className="flex mb-4">
                <div className="mr-4">
                  <span className="font-bold text-gray-700 ">
                    Precio:{" "}
                  </span>
                  <span className="text-gray-600 ">
                    $ {product.price}
                  </span>
                </div>
                <div>
                  <span className="font-bold text-gray-700">
                    Stock:
                  </span>
                  <span className="text-gray-800  bg-[#809B9B] rounded">
                    {" "}
                    {product.inStock}
                  </span>
                </div>
              </div>

              <div>
                <span className="font-bold text-gray-700">
                  Descripcion del producto:
                </span>
                <p className="text-gray-600 text-sm mt-2">
                  {product.description}
                </p>
              </div>
               <QtySelector item={product} /> 
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default ProductDetail;