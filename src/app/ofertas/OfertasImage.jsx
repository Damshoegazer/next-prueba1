
import Image from "next/image"

const OfertasImage = ({imageProds} ) => {
    return(
        <div>
            <Image src={imageProds} alt="image prods" width={500} height={500} />
        </div>
    )
}

export default OfertasImage;