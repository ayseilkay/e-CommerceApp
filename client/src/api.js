import axios from 'axios'
//getAll Product
export const fetchproductList = async({ pageParam = 1 }) =>{
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}/products?page=${pageParam}`);
    return data;
}

//get oneProduct
export const fetchOneProduct = async(id)=>{
    // console.log(`https://fakestoreapi.com/products/${id}`)
    const {data} = await axios.get(`${process.env.REACT_APP_BASE_ENDPOINT}products/${id}`);
    return data;
}
// post -> add a User


export const fetchRegister = async(input)=>{
    const {data} = await axios.post(`https://reqres.in/api/users`,{input});
    return data; 
}