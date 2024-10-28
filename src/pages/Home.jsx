// components
import { Search, ImageContainer } from "../components";

// react router dom 
import { useActionData } from "react-router-dom";

// action
export const action = async ({ request }) => {
  let formData = await request.formData()
  let search = formData.get('search')
  return search
};

// custom hook
import { useFetch } from "../hooks/useFetch";
import { useEffect, useState, useRef } from "react";


function Home() {
  const searchParamFromAction = useActionData()
  const [allImages, setAllImages] = useState([])
  const [pageParam, setPageParam] = useState(1)

  const prevSearchParam = useRef(searchParamFromAction)

  const { data, isPending, error } = useFetch(
    `https://api.unsplash.com/search/photos?client_id=${import.meta.env.ACCESS_KEY
    }&query=${searchParamFromAction ?? 'all'}&page=${pageParam}`
  )


  console.log(allImages, 'allimages');
  
  useEffect(() => {
    if (data && data.results) {
      setAllImages((prevImages)=>{
        return pageParam === 1 ? data.results : [...prevImages, ...data.results]
      })
    }
  }, [data])

  useEffect(()=>{
    if(searchParamFromAction !== prevSearchParam.current){
      setAllImages([])
      setPageParam(1)
      prevSearchParam.current = searchParamFromAction;
    }

  }, [searchParamFromAction])



  if (error) {
    return <h1>Error: {error}</h1>
  }

  return (
    <div className="align-elements">
      <div className="my-5 align-elements ">
        <Search />
      </div>
      {isPending && <h1>Loading...</h1>}
      {allImages.length > 0 && <ImageContainer images={allImages} />}
      <div className="my-10">
        <button onClick={()=>setPageParam((prev)=>prev+1)} className="btn btn-secondary btn-block">Read More</button>
      </div>
    </div>
  );
}

export default Home;