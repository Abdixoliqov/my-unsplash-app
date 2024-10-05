// react router dom
import { Link } from "react-router-dom";


// global context
import { ImageContainer } from "../components";
import { useGlobalContext } from "../hooks/useGlobalContext";

function LikedImages() {
    const { likedImages } = useGlobalContext()
    console.log(useGlobalContext(), 'global');
    


    if (likedImages.length == 0) {
        return (
            <div className="h-full flex justify-center items-center gap-10 flex-col">
                <h1 className="text-center text-4xl">You don't choose any images yet!</h1>
                <Link to={'/'} className="btn btn-primary">Go Home</Link>

            </div>
        )
    }

    return (
        <div className="align-elements my-5">
            {likedImages.length > 0 && <ImageContainer images={likedImages} />}

        </div>
    );
}

export default LikedImages;