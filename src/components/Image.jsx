// react router dom
import { Link } from "react-router-dom";

// useGlobal context
import { useGlobalContext } from "../hooks/useGlobalContext";



// react icons
import { FaRegHeart, FaHeart, FaDownload, FaTrash } from "react-icons/fa";

function Image({ image, added, check }) {
  const { likedImages, dispatch, downloadImages } = useGlobalContext()

  const { links, urls, alt_description, user } = image

  function addLikeImage(image, e) {
    e.preventDefault()
    const imageCheck = likedImages.some((img) => {
      return img.id == image.id
    })

    if (!imageCheck) {
      dispatch({ type: 'LIKE', payload: image })
    } else {
      dispatch({ type: 'UNLIKE', payload: image.id })
    }

  }


  function addDownloadImage(image) {
    const downloadImageCheck = downloadImages.some((img) => img.id == image.id)

    if (!downloadImageCheck) {
      dispatch({ type: 'DOWNLOAD', payload: image })
    }
  }

  function deleteDownloadImage(image) {
    dispatch({ type: 'REDOWNLOAD', payload: image.id })
  }

  return (
    <Link to={"/imageInfo"}>
      <div className="relative group">
        {!added && <span onClick={(e) => addLikeImage(image, e)} className="absolute
       h-7 w-7 border rounded-full 
       flex justify-center items-center cursor-pointer
       right-2 top-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <FaRegHeart className="text-white" />
        </span>}
        {added && <span onClick={(e) => addLikeImage(image, e)} className="absolute
       h-7 w-7 border rounded-full 
       flex justify-center items-center cursor-pointer
       right-2 top-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300 bg-white">
          <FaHeart className="text-red-600" />
        </span>}
        <img src={urls.regular} alt={alt_description} className="w-full rounded-md" />
        <span className="absolute left-2 bottom-2 flex gap-2 items-center invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <img src={user.profile_image.large} alt={user.name + ' avatar'} className="w-8 h-8 rounded-full" />
          <p className="text-white text-sm">{user.name}</p>
        </span>
        {check !== 'download' && <span className="absolute h-7 w-7  rounded-full 
       flex justify-center items-center cursor-pointer
       right-2 bottom-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <a download href={links.download + '&force=true'}>
            <FaDownload onClick={() => addDownloadImage(image)} className="text-white" />
          </a>
        </span>}
        {check == 'download' && <span className="absolute h-7 w-7  rounded-full 
       flex justify-center items-center cursor-pointer
       right-2 bottom-2 invisible opacity-0 group-hover:opacity-100 group-hover:visible transition-all duration-300">
          <FaTrash onClick={() => deleteDownloadImage(image)} className="text-white" />
        </span>}
      </div>
    </Link>
  );
}

export default Image;