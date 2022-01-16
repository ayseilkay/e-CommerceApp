import axios from 'axios'
export const fetchproductList = async({ pageParam = 1 }) =>{
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}?page=${pageParam}`);
    return data;
}

export const fetchOneProduct = async(id)=>{
    console.log(`https://fakestoreapi.com/products/${id}`)
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/${id}`);
    return data;
}