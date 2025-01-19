import { useEffect } from "react";
import { useState } from "react"





function UseFetch(url) {
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState('');
    
   
    const FetchData = async () => {
         setLoading(true);
         try {
          const response = await fetch(url)   
          if (!response.ok) {
              throw new Error(response.statusText)
          }

          const data = await response.json()
            setData(data)
          setLoading(false)



         } catch (error) {
            console.log(error)
            setError(error)
         }

     }


     useEffect(()=>{
        FetchData()
     },[url])


     return {data, loading, error}

}

export default UseFetch