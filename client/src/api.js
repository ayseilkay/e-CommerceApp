import axios from 'axios'



//Not: İstek yapılmadan önce local storage daki tokeni kullanıp headere ekleme yapacagız.
// For GET requests
// axios.interceptors.request.use(
//     (req) => {
//        const {origin}=new URL(req.URL);
//        const allowedOrigins = [process.env.REACT_APP_BASE_ENDPOINT]
//        const token = localStorage.getItem('access-token');
//        if(allowedOrigins.includes(origin)){
//         req.headers.authorization = token
//        }
//        return req;
//     },
//     (err) => {
//        return Promise.reject(err);
//     }
//  );

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

// export const fetchMe = async()=>{
//     const {data}= await axios.get(`https://localhost:4000/auth/me`);
//     return data;
// }

export const fetchLogout = async()=>{
    const {data} = await axios.post(`https://localhost:4000/auth/logout`,{
        refresh_token :localStorage.getItem("refresh-token")
    });
    return data;
}

export const fetchSignIn = async (input)=>{
    const {data} = await axios.post(`https://fakestoreapi.com/auth/login`,{input});
    return data;
}

export const postOrder = async (input)=>{
    const {data} = await axios.post(`https://fakestoreapi.com/order`,{input});
    return data;
}