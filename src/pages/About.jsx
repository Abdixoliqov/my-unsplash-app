import { useState, useEffect } from "react";
import { useFetch } from "../hooks/useFetch";


function About() {
  // const searchParamFromAction = useActionData()
  const [fond, setFond] = useState([])

  const { data, isPending, error } = useFetch(
    'http://10.0.1.75:8001/api/v1/fond/'
  )

  useEffect(() => {
    if (data) {
      setFond(data)
    }
  }, [data])
  console.log(fond, 'data1');



  // useEffect(() => {
  //   fetch('http://127.0.0.1:8000/api/v1/fond/').then((data) => data.json()).then((data) => console.log(data)
  //   )
  // }, [])

  return (
    <div className="contianer aligin-elements">
      <ul>
        {
          fond.map((item, idx)=>{
            return <li key={item.id}>{item.name}</li>
          })
        }
      </ul>
    </div>
  );
}

export default About;