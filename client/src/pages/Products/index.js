import {Grid } from '@chakra-ui/react'
import React from 'react'
import Card from '../../components/Card'
import {useQuery} from 'react-query'
import { fetchproductList } from '../../api'

// import data from 'C:\Users\aayse\OneDrive\Masaüstü\e-commerce\client\src\data\data.json'

function Products() {
    const { isLoading, error, data } = useQuery('products',fetchproductList)
   
 
   if (isLoading) return 'Loading...'
 
   if (error) return 'An error has occurred: ' + error.message
    // console.log("data",data)
    return (
        <div>
         
        <Grid templateColumns='repeat(3, 1fr)' gap={4}>
           {data.map((item,index)=> <Card key={index} item={item}/>)}
        </Grid>
        </div>
    )
}

export default Products
