// react router dom
import { Link } from "react-router-dom";


import { ImageContainer } from "../components";
import { useGlobalContext } from "../hooks/useGlobalContext";


function DownloadImages() {

  const { downloadImages } = useGlobalContext()

  if (downloadImages.length == 0) {
    return (
      <div className="h-full flex justify-center items-center gap-10 flex-col">
        <h1 className="text-center text-4xl">Hozircha sizda yuklab olingan rasmlar yo'q!</h1>
        <Link to={'/'} className="btn btn-primary">Go Home</Link>

      </div>
    )
  }

  return (
    <div>
      <div className="align-elements my-5">
        <h1 className="text-center text-2xl md:text-4xl my-5">Download images</h1>

        {downloadImages.length > 0 && <ImageContainer images={downloadImages} />}
      </div>
    </div>
  );
}

export default DownloadImages;


