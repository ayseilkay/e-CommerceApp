import { Alert, Box, Button, Image,Text, Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,useDisclosure,FormControl,FormLabel,Input, Textarea } from '@chakra-ui/react';
import {React,useRef, useState} from 'react';
import { Link } from 'react-router-dom';
import { postOrder } from '../../api';
import { useBasket } from '../../contexts/BasketContext';


function Basket() {

    const [address,setAddress]=useState();
    const {items,removeFromBasket,emptyBasket} = useBasket();
    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef()
    const finalRef = useRef()
    const total = items.reduce((acc,obj)=> acc + obj.price,0)

    const handleSubmitForm = async()=>{
         const itemIds = items.map((item)=> item.id);
         console.log(itemIds)
         const input ={
             address,
             items: JSON.stringify(itemIds)
         }
         const response = await postOrder(input);//siparis ver 
         emptyBasket(); // siparis verdikten sonra sepeti bosalt
         onClose(); // modalı kapat
         console.log(response)
    }
  return <Box p={10}>
      {/* console.log(items); */}

      {
          items.length <1 && <Alert status="warning">You have not any items in your basket</Alert>
      }
      {
          items.length >0 && <>
          
          <ul>
              {
                  items.map((item)=>(
                      <li key={item.id} style={{marginBottom:10}}>
                            <Link to={`/product/${item.id}`}>
                                {`${item.title} - ${item.price} TL`}
                                <Image htmlWidth={200} src={item.image} loading='lazy'></Image>
                            </Link>
                            <Button mt="2" colorScheme="orange" onClick={()=> removeFromBasket(item.id)}> Remove From Basket</Button>
                      </li>
                  ) )
              }
          </ul>
          </>
      }
      {!items.length <1 && 
      <Box mt="10">
          <Text fontSize="22">Total : {total} TL </Text>
            <Button mt="2" size="sm" colorScheme="green" onClick={onOpen}>Order</Button>
            <Modal
        initialFocusRef={initialRef}
        finalFocusRef={finalRef}
        isOpen={isOpen}
        onClose={onClose}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Create your order</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            <FormControl>
              <FormLabel>Address</FormLabel>
              <Textarea ref={initialRef} placeholder='Address' value={address} onChange={(e)=>setAddress(e.target.value)} />
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Button colorScheme='blue' mr={3} onClick={handleSubmitForm}>
              Save
            </Button>
            <Button onClick={onClose}>Cancel</Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
      </Box>}
      
  </Box>;
}

export default Basket;
