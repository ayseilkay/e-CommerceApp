import { Box,Text,Button ,Image} from '@chakra-ui/react';
import {useQuery} from 'react-query'
import { useParams } from 'react-router-dom'
import { fetchOneProduct } from '../../api';
import ImageGallery from 'react-image-gallery'


function ProductDetail() {
    const { product_id } = useParams();
    const {isLoading,error,data} = useQuery(['product',product_id] ,()=>fetchOneProduct(product_id));
    if (isLoading) return 'Loading...'
 
    if (error) return 'An error has occurred: ' + error.message
    return (
        <div>
           <Button colorScheme="orange" > Add to Basket</Button>
           <Text as="h2" fontSize="2xl">{data.title}</Text>
           <p>{data.description}</p>
           <Box>
           <Image src={data.image} boxSize='250px' loading='lazy' ></Image>
           </Box>
        </div>
    )
}

export default ProductDetail
