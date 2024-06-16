import React from "react";
import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { PiMapPinBold } from "react-icons/pi";
import { TiPlaneOutline } from "react-icons/ti";
import { RiGasStationLine } from "react-icons/ri";
import { MdOutlineDirectionsBusFilled } from "react-icons/md";

const Localities = () => {
  return (
    <Box paddingBottom="4rem" paddingX={{ base: "1.5rem", sm: "7rem" }}>
      <Text
        color="var(--darkText)"
        marginTop={{ base: "3rem", sm: "4rem" }}
        fontSize={{ base: "1rem", sm: "2.2rem" }}
        fontWeight="700"
      >
        Nearest Localities.
      </Text>
      <VStack color="var(--darkText)">
        <Flex
          marginTop="2rem"
          paddingX={{ base: "2rem", md: "20rem" }}
          width="100vw"
          justifyContent="space-between"
        >
          <Text fontWeight="500" fontSize={{ base: "0.8rem", sm: "1.5rem" }}>
            <Flex gap="0.5rem" alignItems="center">
              <PiMapPinBold />
              Shimla
            </Flex>
          </Text>

          <Text fontWeight="500" fontSize={{ base: "0.8rem", sm: "1.5rem" }}>
            Ghanahatti (12km)
          </Text>
        </Flex>
        {/* #2 */}
        <Flex
          marginTop="0.5rem"
          paddingX={{ base: "2rem", md: "20rem" }}
          width="100vw"
          justifyContent="space-between"
        >
          <Text fontWeight="500" fontSize={{ base: "0.8rem", sm: "1.5rem" }}>
            <Flex gap="0.5rem" alignItems="center">
              <TiPlaneOutline />
              Nearest Airport
            </Flex>
          </Text>

          <Text fontWeight="500" fontSize={{ base: "0.8rem", sm: "1.5rem" }}>
            Jubbarhatti (17km)
          </Text>
        </Flex>
        {/*  */}
        <Flex
          marginTop="0.5rem"
          paddingX={{ base: "2rem", md: "20rem" }}
          width="100vw"
          justifyContent="space-between"
        >
          <Text fontWeight="500" fontSize={{ base: "0.8rem", sm: "1.5rem" }}>
            <Flex gap="0.5rem" alignItems="center">
              <RiGasStationLine />
              Nearest Fuel Station
            </Flex>
          </Text>

          <Text fontWeight="500" fontSize={{ base: "0.8rem", sm: "1.5rem" }}>
            Banuti (3.5km)
          </Text>
        </Flex>
        {/*  */}
        <Flex
          marginTop="0.5rem"
          paddingX={{ base: "2rem", md: "20rem" }}
          width="100vw"
          justifyContent="space-between"
        >
          <Text fontWeight="500" fontSize={{ base: "0.8rem", sm: "1.5rem" }}>
            <Flex gap="0.5rem" alignItems="center">
              <MdOutlineDirectionsBusFilled />
              Nearest Bus Stand
            </Flex>
          </Text>

          <Text fontWeight="500" fontSize={{ base: "0.8rem", sm: "1.5rem" }}>
            ISBT Shimla (13km)
          </Text>
        </Flex>
      </VStack>
    </Box>
  );
};
<React/>
export default Localities;
