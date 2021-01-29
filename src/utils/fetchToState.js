import { useState, useEffect} from 'react';

export default function FetchToState(url){
    //hook to fetch and store the returned data
    let isSubscribed = true
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

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
    useEffect(() => {
            
            if(isSubscribed) {fetchUrl()}
            return () => {const localSubscribed = isSubscribed = false;}
        },[]);
    return [data,loading]
}