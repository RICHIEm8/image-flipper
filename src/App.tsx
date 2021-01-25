import { AspectRatio, Box, Button, Flex, Heading, Image } from '@chakra-ui/react';
import React from 'react';

function App() {
  return (
    <Flex flexDirection="column" alignItems="center" bgColor="green.500" minHeight="100vh">
      <Heading as="h1" color="white">
        Image Flipper
      </Heading>
      <Flex my={7.5}>
        <Button>Flip Vertical</Button>
        <Button>Flip Horizontal</Button>
        <Button>Rotate 90°</Button>
        <Button>Rotate 180°</Button>
      </Flex>
      <AspectRatio width="100%" maxW="500px" ratio={1}>
        <Image src="rushia.jpg" alt="rushia" />
      </AspectRatio>
    </Flex>
  );
}

export default App;
