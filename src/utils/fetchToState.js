import { useState, useEffect} from 'react';

export default function FetchToState(url){
    //hook to fetch and store the returned data
  
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    

    useEffect(() => {


        async function fetchUrl(){
            try{
                const response = await fetch(url)
                const data = await response.json()
                
                  setData(data)
                  setLoading(false)
            } catch(e) {
                console.log(e)
            }
        }

            let isSubscribed = true
            if(isSubscribed) {fetchUrl()}

            return () => {isSubscribed = false;}
        },[url]);
    return [data,loading]
}