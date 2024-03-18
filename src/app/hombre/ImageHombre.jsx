import Image from "next/image";

const ImageAbout = ({imageAbout} ) => {
    return(
        <div>
            <Image src={imageAbout} alt="image about" width={500} height={500} />
        </div>
    )
}

export default ImageAbout;