import axios from 'axios'
export const fetchproductList = async() =>{
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}`);
    return data;
}

export const fetchOneProduct = async(id)=>{
    console.log(`https://fakestoreapi.com/products/${id}`)
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/${id}`);
    return data;
}