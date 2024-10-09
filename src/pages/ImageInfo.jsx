import Masonry, { ResponsiveMasonry } from "react-responsive-masonry"


import { ImageContainer } from "../components";

import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";


function ImageInfo() {
  const [imageData, setImageData] = useState([])
  const { id } = useParams()
  const { data, isPending, error } = useFetch(
    `https://api.unsplash.com/photos/${id}?client_id=${import.meta.env.VITE_ACCESS_KEY}`
  )
  // console.log(id, 'array');
  // console.log(id);
  // console.log(data, 'data');




  useEffect(() => {
    if (data && data.urls) {
      setImageData((prev) => {
        return [...prev, data]
      })
    }

  }, [data])
  console.log(imageData, 'imagedata');





  return (
    <div className="align-elements my-5">
      {
        isPending && <ResponsiveMasonry
          columnsCountBreakPoints={
            {
              350: 2,
              750: 3,
              900: 4
            }
          }
        >
          <Masonry gutter="10px">
            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>

            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>

            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>

            <div className="flex w-52 flex-col gap-4">
              <div className="skeleton h-32 w-full"></div>
              <div className="skeleton h-4 w-28"></div>
              <div className="skeleton h-4 w-full"></div>
              <div className="skeleton h-4 w-full"></div>
            </div>
          </Masonry>
        </ResponsiveMasonry>
      }
      {
        imageData.map((img) => {
          return (
            <img className="w-48 md:w-96 bordered" src={img.urls.full} alt={img.alt_description} />
          )
        })
      }
    </div>
  );



}

export default ImageInfo;