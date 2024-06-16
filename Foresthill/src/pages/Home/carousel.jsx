import React from 'react';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { Box, VStack, Text, Flex, Button } from '@chakra-ui/react';

import slider1 from '../../assets/Slider/slider1.jpg';
import slider2 from '../../assets/Slider/slider2.jpg';
import slider3 from '../../assets/Slider/slider3.jpg';
import slider4 from '../../assets/Slider/slider4.jpg';
import slider5 from '../../assets/Slider/slider5.jpg';

const items = [
  <img src={slider1} alt="Image 1" key="slider1" className="carousel-image" />,
  <img src={slider2} alt="Image 2" key="slider2" className="carousel-image" />,
  <img src={slider3} alt="Image 3" key="slider3" className="carousel-image" />,
  <img src={slider4} alt="Image 4" key="slider4" className="carousel-image" />,
  <img src={slider5} alt="Image 5" key="slider5" className="carousel-image" />,
];

const Carousel = () => (
  <Box
    position="relative"
    width="100vw"
    height="100vh"
    overflow="hidden"
    display="flex"
    justifyContent="center"
    alignItems="center"
  >
    <Box
      position="absolute"
      width="100%"
      height="100%"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <AliceCarousel
        animationType="fadeout"
        animationDuration={800}
        disableButtonsControls
        infinite
        items={items}
        mouseTracking
        className="alice-carousel"
      />
    </Box>

    <Box
      zIndex={1}
      position="absolute"
      top="50%"
      left="50%"
      transform="translate(-50%, -50%)"
      textAlign="center"
      color="gray.50"
      maxWidth="80%"
    >
      <VStack spacing={4}>
        <Text
          fontSize={{ base: "2rem", md: "4rem" }}
          fontWeight="bold"
          fontFamily="Poppins"
        >
          Forest Hill
        </Text>
        <Text
          fontSize={{ base: "1rem", md: "1.5rem" }}
          px={{ base: "2rem", sm: "0" }}
          fontFamily="Poppins"
        >
          Discover Tranquil Luxury: A Mountain Retreat in the Heart of Nature's Embrace
        </Text>
        <Flex
          mt={{ base: "1rem", sm: "2rem" }}
          gap={{ base: "3", sm: "10" }}
          direction={{ base: "column-reverse", sm: "row" }}
        >
          <Button
            fontWeight={{ base: 400, sm: "600" }}
            fontFamily="Poppins"
            borderRadius="15px"
            bg="gray.200"
            color="gray.800"
            size={{ base: "sm", sm: "lg" }}
            _hover={{
              color: "gray.50",
              backgroundColor: "gray.800",
            }}
          >
            Contact Us
          </Button>
          <Button
            fontWeight={{ base: 400, sm: "600" }}
            fontFamily="Poppins"
            color="gray.50"
            borderRadius="15px"
            bg="var(--darkText)"
            size={{ base: "sm", sm: "lg" }}
            _hover={{
              backgroundColor: "green.500",
              color: "gray.800",
            }}
          >
            Book Now
          </Button>
        </Flex>
      </VStack>
    </Box>
  </Box>
);

export default Carousel;
