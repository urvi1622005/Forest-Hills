import React from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import CardHome from "../../components/Card/CardHome";
import img1 from "../../assets/homes/1.jpeg";
import img2 from "../../assets/homes/2.jpeg";
import img3 from "../../assets/homes/3.jpeg";

const Roomscape = () => {
  return (
    <Box width="1280px" marginTop="2rem" paddingX={{ base: "1.5rem", sm: "7rem" }}>
      <VStack>
        <Text fontSize={{ base: "1rem", sm: "2rem" }} fontWeight={700}>
          "Roomscape"
        </Text>
        <Text textAlign="center" fontSize={{ base: "0.7rem", sm: "1.5rem" }}>
          "Five Rooms, Five Worlds: Tailored Experiences Await Your Stay."
        </Text>
      </VStack>
      <Flex
        gap={4}
        flexDirection={{ base: "column", sm: "row" }}
        paddingY="1rem"
        paddingX={{ base: "", sm: "2rem" }}
        justifyContent="space-between"
        
      >
        <CardHome
          title="Family Room"
          image={img1}
          desc="4 People Occupancy"
          footer="rollaway bed"
          nav="/rooms"
        />
        <CardHome
          title="Friend's Room"
          image={img2}
          desc="2 People Occupancy"
          footer="rollaway bed"
          nav="/rooms"
          
        />
        <CardHome
          title="Couples Room"
          image={img3}
          desc="2 People Occupancy"
          footer="Balcony View"
          nav="/rooms"
        />
      </Flex>
    </Box>
  );
};

export default Roomscape;
