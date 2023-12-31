import {useState} from 'react';
import axios from 'axios';

const usePost = () => {
    const [error,setError] = useState(null)
    const [data, setData] = useState(null);
    const [loading, setLoading] = useState(false);

    const post = async (url,apiData) => {
        try {
            setLoading(true)
            const {data:response} = await axios.post(url,apiData);
            setData(response)
            setLoading(false)
            setError(false)
        } catch (error) {
            console.error('İstek hatası:', error);
            setError(true)
            setLoading(false)
        }
    };

    return { data, loading, error, post }; 
}
export default usePost;