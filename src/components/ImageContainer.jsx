import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"

// components
import {Image} from './'
import { useGlobalContext } from "../hooks/useGlobalContext";

function ImageContainer({ images, check }) {
    const {likedImages} = useGlobalContext()
    return (
        <ResponsiveMasonry>
            <Masonry gutter="10px">
                {images.map((image) => {
                    return <Image check={check} key={image.id} image={image} added={likedImages.some((img)=>img.id==image.id)} />
                })}
            </Masonry>
        </ResponsiveMasonry>
    );
}

export default ImageContainer;