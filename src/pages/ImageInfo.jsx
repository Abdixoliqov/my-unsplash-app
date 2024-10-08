import { useParams } from "react-router-dom";


function ImageInfo() {
  const {id} = useParams()
  return ( 
    <div>imageinfo-{id}</div>
   );
}

export default ImageInfo;