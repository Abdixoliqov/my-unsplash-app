import Masonry, { ResponsiveMasonry } from "react-responsive-masonry";

import { ImageContainer } from "../components";

import { useParams } from "react-router-dom";
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState } from "react";

function ImageInfo() {
  const [imageData, setImageData] = useState([]);
  const { id } = useParams();
  const { data, isPending, error } = useFetch(
    `https://api.unsplash.com/photos/${id}?client_id=${
      import.meta.env.ACCESS_KEY
    }`
  );

  useEffect(() => {
    if (data && data.urls) {
      setImageData((prev) => {
        return [...prev, data];
      });
    }
  }, [data]);

  return (
    <div className="align-elements py-5">
      <h1 className="text-center text-2xl my-5 mb-10">Image information</h1>
      {isPending && (
        <ResponsiveMasonry
          columnsCountBreakPoints={{
            350: 2,
            750: 3,
            900: 4,
          }}
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
      )}
      {imageData.map((item) => {
        return (
          <div className="flex flex-col sm:flex-row gap-10">
            <div className="md:min-w-80 sm:min-w-60">
              <div className="border rounded-xl p-1 bg-gray-300">
                <img
                  className="rounded-lg object-cover w-auto h-auto md:w-80 md:max-h-96"
                  src={item.urls.regular}
                  alt={item.alt_description}
                />
              </div>
            </div>

            <div className="">
              <ul className="flex flex-col gap-6">
                <li className="flex justify-start gap-5 items-center">
                  <span className="font-bold">Author:</span>
                  <div className="border relative flex justify-start gap-5 items-center rounded-md p-1 pl-2 pr-10 overflow-visible duration-300 hover:shadow-lg">
                    <p>{item.user.name}</p>
                    <img
                      alt=""
                      src={item.user.profile_image.large}
                      className="h-12 w-12 rounded-full absolute -right-5 border shadow-lg"
                    />
                  </div>
                </li>

                <li className="flex justify-start gap-5 items-center">
                  <span className="font-bold">Created:</span>
                  <span>
                    {item.created_at.split("T")[0].split("-").join(".")}
                  </span>
                </li>
              </ul>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default ImageInfo;
