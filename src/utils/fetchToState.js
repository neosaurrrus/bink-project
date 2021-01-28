import { useState, useEffect} from 'react';

export default function FetchToState(url){
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
            fetchUrl();
        },[]);
    return [data,loading]
}