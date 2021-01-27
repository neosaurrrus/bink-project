
import { useState, useEffect} from 'react';

export default function fetchToState(url){
    const [data, setData] = useState([])
    const [loading, setLoading] = useState(true)

    async function fetchUrl(){
        const response = await fetch(url)
        const data = await response.json()
        setData(data)
        setLoading(false)
    }


    useEffect(() => {
        fetchUrl();
    },[]);
    return [data,loading]
}

