import { Box,Text,Button ,Image} from '@chakra-ui/react';
import {useQuery} from 'react-query'
import { useParams } from 'react-router-dom'
import { fetchOneProduct } from '../../api';
import ImageGallery from 'react-image-gallery'
import { useBasket } from '../../contexts/BasketContext';


function ProductDetail() {
    const { product_id } = useParams();
    const {isLoading,error,data} = useQuery(['product',product_id] ,()=>fetchOneProduct(product_id));
    const {addToBasket,items}=useBasket();
    if (isLoading) return 'Loading...'
 
    if (error) return 'An error has occurred: ' + error.message
    console.log("items",items)
    console.log("product_id",product_id)
    const findBasketItem = items.find((item)=> item.id == product_id)// sepette varsa true yoksa false döncek
    console.log("findBasketItem",findBasketItem);
    return (
        <div>
           <Button colorScheme={findBasketItem ? "orange" : "green"} onClick={()=> addToBasket(data,findBasketItem)} > 
           
           {
               findBasketItem ? 'Remove from Basket' :  'Add to Basket'
           }
           </Button>
           <Text as="h2" fontSize="2xl">{data.title}</Text>
           <p>{data.description}</p>
           <Box>
           <Image src={data.image} boxSize='250px' loading='lazy' ></Image>
           </Box>
        </div>
    )
}

export default ProductDetail
