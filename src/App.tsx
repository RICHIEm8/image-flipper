import { Box, Button, Flex, Heading, HStack, Image, Input, useToast } from '@chakra-ui/react';
import { AiOutlineRotateLeft, AiOutlineRotateRight } from 'react-icons/ai';
import { GiHorizontalFlip, GiVerticalFlip } from 'react-icons/gi';
import { BiReset } from 'react-icons/bi';
import { MdCropRotate } from 'react-icons/md';
import React, { useState } from 'react';

export const App = () => {
  const [query, setQuery] = useState('');
  const [img, setImg] = useState('');
  const [rotateAngle, setRotateAngle] = useState(0);
  const [flipAxis, setFlipAxis] = useState([1, 1]);

  const toast = useToast();

  const onSubmit = (e: any) => {
    e.preventDefault();
    setImg(query);
    setQuery('');
  };

  const onError = (error: string | React.SyntheticEvent<HTMLImageElement, Event>) => {
    toast({
      title: 'Invalid image url',
      status: 'error',
      position: 'top',
      duration: 3000,
    });
    setImg('');
    setQuery('');
  };

  const rotate = (deg: number) => {
    const newAngle = rotateAngle + deg;
    setRotateAngle(newAngle);
  };

  const flip = (xAxis: number, yAxis: number) => {
    const newXAxis = flipAxis[0] * xAxis;
    const newYAxis = flipAxis[1] * yAxis;
    setFlipAxis([newXAxis, newYAxis]);
  };

  const reset = () => {
    setRotateAngle(0);
    setFlipAxis([1, 1]);
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
            <Button rightIcon={<BiReset />} onClick={() => reset()}>
              Reset
            </Button>
          </HStack>
        </form>
      </Flex>
      <Flex my={7.5}>
        <Button rightIcon={<GiHorizontalFlip />} onClick={() => flip(-1, 1)}>
          Flip Horizontal
        </Button>
        <Button rightIcon={<GiVerticalFlip />} onClick={() => flip(1, -1)}>
          Flip Vertical
        </Button>
        <Button rightIcon={<AiOutlineRotateLeft />} onClick={() => rotate(-90)}>
          90°
        </Button>
        <Button rightIcon={<AiOutlineRotateRight />} onClick={() => rotate(90)}>
          90°
        </Button>
        <Button rightIcon={<MdCropRotate />} onClick={() => rotate(180)}>
          Rotate 180°
        </Button>
      </Flex>
      {img ? (
        <Box transform={`rotate(${rotateAngle}deg) scale(${flipAxis[0]}, ${flipAxis[1]})`}>
          <Image className="image" src={img} boxSize={750} onError={onError} fit="scale-down" />
        </Box>
      ) : null}
    </Flex>
  );
};

export default App;
