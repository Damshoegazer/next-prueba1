import Image from "next/image";

const Card = ({imgH} ) => {
    return(
        <div>
            <div className="card w-96 bg-base-100 shadow-xl">
            <figure><Image src={imgH} width={500} height={500} alt="Shoes"/></figure>
            <div className="card-body">
                <h2 className="card-title">
                Shoes!
                <div className="badge badge-secondary">NEW</div>
                </h2>
                <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Velit atque quos nesciunt voluptates</p>
                <div className="card-actions justify-end">
                <div className="badge badge-outline">Fashion</div> 
                <div className="badge badge-outline">Products</div>
                </div>
            </div>
            </div>
        </div>
    )
}

export default Card;