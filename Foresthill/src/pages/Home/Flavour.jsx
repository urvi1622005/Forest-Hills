import React from "react";
import { Box, Flex, Image, Text, VStack } from "@chakra-ui/react";
import { TbChefHat } from "react-icons/tb";
import { PiCallBellBold } from "react-icons/pi";
import { FaList } from "react-icons/fa";
import { GrGallery } from "react-icons/gr";
import { NavLink } from "react-router-dom";
import img from "../../assets/restaurantimages/g1.png"; 

const Flavour = () => {
  return (
    <Box
      paddingX={{ base: "1.5rem", sm: "8rem" }}
      paddingY={{ base: "4rem", sm: "5rem" }}
      justifyContent={"space-between"}
      wrap={"wrap"}
      maxW="1280px" 
      mx="auto" 
    >
      <Box>
        <Text fontSize={{ base: "1rem", sm: "2rem" }} fontWeight={"700"}>
          Flavours at Forest Hill
        </Text>
        <Flex
          paddingX={{ base: "1rem", sm: "0" }}
          gap={"1rem"}
          marginTop={{ base: "1rem", sm: "2rem" }}
          direction={"column"}
        >
          <Text
            display={"flex"}
            alignItems={"center"}
            gap={{ base: "1rem", sm: "0.5rem" }}
            fontSize={{ base: "0.7rem", sm: "1.1rem" }}
          >
            <TbChefHat />
            Crafting Culinary Magic, Helmed by Our Maestro Chef.
          </Text>
          <Text
            display={"flex"}
            alignItems={"center"}
            gap={{ base: "1rem", sm: "0.5rem" }}
            fontSize={{ base: "0.7rem", sm: "1.1rem" }}
          >
            <PiCallBellBold />
            Global Tastes, Local Flair: A Fusion Feast of Indian, Himachali, and Chinese Delights.
          </Text>
          <Text
            display={"flex"}
            alignItems={"center"}
            gap={{ base: "1rem", sm: "0.5rem" }}
            fontSize={{ base: "0.7rem", sm: "1.1rem" }}
          >
            <FaList />
            Savor Simplicity: Order with Ease from a Menu Tailored to Your Tastes.
          </Text>
          <Text
            display={"flex"}
            alignItems={"center"}
            gap={{ base: "1rem", sm: "0.5rem" }}
            fontSize={{ base: "0.7rem", sm: "1.1rem" }}
          >
            <GrGallery />
            Nature's Canvas Unveiled: Panoramic Views Through Our Enchanting Windows.
          </Text>
          <NavLink to="/restaurant" style={{ textDecoration: "none" }}>
            <VStack
              size={"sm"}
              color={"var(--lightText)"}
              backgroundColor={"var(--darkText)"}
              fontSize={{ base: "0.7rem", sm: "1rem" }}
              width={{ base: "30%", sm: "20%" }}
              borderRadius={"0.7rem"}
              paddingY={"0.5rem"}
              marginY={"1rem"}
              mx={{ base: "auto", sm: "0" }} 
            >
              <Flex gap={2} paddingX={"2rem"} alignItems={"center"}>
                <Text>Flavours</Text>
                <PiCallBellBold />
              </Flex>
            </VStack>
          </NavLink>
        </Flex>
      </Box>

      {/* Image Section */}
      <Box display="flex" justifyContent="center" width="100%">
        <Image
          src={img} 
          alt="Flavours at Forest Hill"
          marginTop={{ base: "2rem", sm: "-250px" }}
          maxW="100%" 
          // height="auto"
          marginLeft="900px"
          width="285px"
          height="230px"
        />
      </Box>
    </Box>
  );
};

export default Flavour;
