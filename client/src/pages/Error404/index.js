import { Alert ,AlertTitle,CloseButton,AlertDescription,AlertIcon} from '@chakra-ui/react';
import React from 'react';

function Error404() {
  return <div>
<Alert status='error'>
  <AlertIcon />
  <AlertTitle mr={2}>Error 404</AlertTitle>
  <AlertDescription>This Page was not found</AlertDescription>
  <CloseButton position='absolute' right='8px' top='8px' />
</Alert>
  </div>;
}

export default Error404;
