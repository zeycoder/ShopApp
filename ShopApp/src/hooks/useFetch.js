import { useState, useEffect } from "react";
import axios from "axios";

const useFetch = (url) => {
    const [error,setError] = useState(null)
    const [data, setData] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        try {
            const response = await axios.get(url);
            setData(response.data)
            setLoading(false)
            
        } catch (error) {
            setLoading(false)
            setError(error.message)
        }
    } 
    useEffect(() => {
        fetchData();
    }, [])

    return{loading, data, error}
}
export default useFetch;