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


  // useEffect(()=>{
  //   setImageData((prev)=>{
  //     return [...prev, data]
  //   })
  // }, [data])


  useEffect(() => {
    if (data && data.urls) {
      setImageData((prev)=>{
        return [...prev, data]
      })
    }

  }, [data])
  console.log(imageData, 'imagedata');





  return (
    <div className="py-24 sm:py-32">
      <div className="mx-auto grid max-w-7xl gap-x-8 gap-y-20 px-6 lg:px-8 xl:grid-cols-3">
        <div className="max-w-2xl">
          <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">Meet our leadership</h2>
          <p className="mt-6 text-lg leading-8 text-gray-600">
            Libero fames augue nisl porttitor nisi, quis. Id ac elit odio vitae elementum enim vitae ullamcorper
            suspendisse.
          </p>
        </div>
        <ul role="list" className="grid gap-x-8 gap-y-12 sm:grid-cols-2 sm:gap-y-16 xl:col-span-2">
          {imageData.map((person) => (
            <li key={person.id}>
              <div className="flex items-center gap-x-6">
                <img alt="" src={person.user.profile_image.large} className="h-16 w-16 rounded-full" />
                <div>
                  <h3 className="text-base font-semibold leading-7 tracking-tight text-gray-900">{person.name}</h3>
                  <p className="text-sm font-semibold leading-6 text-indigo-600">{person.role}</p>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );



}

export default ImageInfo;