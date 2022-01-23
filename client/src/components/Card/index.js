import {Box, Image, Button } from '@chakra-ui/react'
import { Link } from 'react-router-dom'
import { useBasket } from '../../contexts/BasketContext'

function Card({item}) {
    const {addToBasket,items} =useBasket();

    const findBasketItem = items.find((basket_item)=>basket_item.id == item.id)
    console.log("item",item)
    return (
        <Box borderWidth="1px" borderRadius="lg" overflow="hidden" p="3px">
           <Link to={`/product/${item.id}`}>
               <Image src={item.image} alt={item.description} boxSize='250px' loading='lazy' ></Image>

               <Box p="6">
                    <Box d="flex" alignItems="baseline">
                    
                    </Box>
                    <Box mt="1" fontWeight="semibold" as="h4" lineHeight="tight">
                        {item.title}
                    </Box>
                    <Box>{item.price}</Box>
               </Box>
           </Link>
           <Button colorScheme={findBasketItem ? 'orange' : 'green'} variant="solid" onClick={()=>addToBasket(item,findBasketItem)}> 
           {findBasketItem ? 'Remove From Basket' :'Add to Basket'
           
           }</Button>
        </Box>
    )
}

export default Card
