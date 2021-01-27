import {
  AspectRatio,
  Button,
  Flex,
  Heading,
  HStack,
  Image,
  Input,
  useToast,
} from '@chakra-ui/react';
import React, { useState } from 'react';
import _ from 'lodash';

export const App = () => {
  const [query, setQuery] = useState('');
  const [img, setImg] = useState('');

  const toast = useToast();

  const onSubmit = (e: any) => {
    e.preventDefault();

    if (_.includes(query, 'jpg' || 'png')) {
      setImg(query);
      setQuery('');
    } else {
      toast({
        title: 'Invalid image url',
        status: 'error',
        position: 'top',
        duration: 3000,
      });
      setImg('');
      setQuery('');
    }
  };

  return (
    <Flex flexDirection="column" alignItems="center" bgColor="green.500" minHeight="100vh">
      <Heading as="h1" color="white">
        Image Flipper
      </Heading>
      <Flex justifyContent="center">
        <form onSubmit={onSubmit}>
          <HStack spacing={0}>
            <Input
              w={412}
              placeholder="Enter image URL..."
              bgColor="white"
              onChange={(e) => setQuery(e.target.value)}
              value={query}
            />
            <Button type="submit">Submit</Button>
          </HStack>
        </form>
      </Flex>
      <Flex my={7.5}>
        <Button>Flip Vertical</Button>
        <Button>Flip Horizontal</Button>
        <Button>Rotate 90°</Button>
        <Button>Rotate 180°</Button>
      </Flex>
      {img ? (
        <AspectRatio width="100%" maxW="500px" ratio={1}>
          <Image src={img} />
        </AspectRatio>
      ) : null}
    </Flex>
  );
};

export default App;
