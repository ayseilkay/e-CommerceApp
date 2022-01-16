import {Grid,Box,Flex,Button } from '@chakra-ui/react'
import React from 'react'
import Card from '../../components/Card'
import {useInfiniteQuery } from 'react-query'
import { fetchproductList } from '../../api'

// import data from 'C:\Users\aayse\OneDrive\Masaüstü\e-commerce\client\src\data\data.json'

function Products() {
    const { data,
        error,
        fetchNextPage,
        hasNextPage,
        isFetchingNextPage,
        status, } = useInfiniteQuery ('products',fetchproductList,
    {
        getNextPageParam: (lastGroup, allGroups) => {
            const morePagesExist = lastGroup?.length === 20;
            if(!morePagesExist){
                return;
            }
            return allGroups.length +1;
        }
      })
   console.log("data::::",data)
 
   if (status==='loading') return 'Loading...'
 
   if (status ==='error') return 'An error has occurred: ' + error.message
    // console.log("data",data)
    return (
        <div>
         
        <Grid templateColumns='repeat(3, 1fr)' gap={4}>
           {/* {data.map((item,index)=> <Card key={index} item={item}/>)} */}

           {
               data.pages.map((group,i)=>(
                <React.Fragment key={i}>
                    {
                        group.map((item)=>(
                            <Box w="%100" key={item.id}>
                            <Card  item={item}/>
                            </Box>
                        ))
                    }
                </React.Fragment>
               )
               )
           }
        </Grid>

        <Flex mt="10" justifyContent="center">
         <Button
           onClick={() => fetchNextPage()}
           isLoading={isFetchingNextPage}
           disabled={!hasNextPage || isFetchingNextPage}
         >
           {isFetchingNextPage
             ? 'Loading more...'
             : hasNextPage
             ? 'Load More'
             : 'Nothing more to load'}
         </Button>
       </Flex>
        </div>
    )
}

export default Products
