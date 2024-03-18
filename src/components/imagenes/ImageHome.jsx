import Image from "next/image"



const ImageHome = ({image} ) => {
    return(
        <Image src={image}
        width={500}
        height={500}
        alt="Picture of the author"
        
        style={{
            width: '100%',
            height: 'auto',
          }}
        />
    )
}

export default ImageHome