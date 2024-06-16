import React from "react";
import { Box, Text } from "@chakra-ui/react";
import { NavLink } from "react-router-dom";
import { GrView } from "react-icons/gr";

const Description = () => {
  return (
    
    <Box width="80%" px={{ base: "1.5rem", sm: "8rem" }} mt="1rem"  p="2rem" justifyContent={"center"}alignItems={"center"}> 
      
      <Box>
        <Text fontFamily="poppins" fontSize={{ base: "1rem", sm: "2rem" }} color="var(--darkText)" fontWeight="700" textAlign={"left"}>
          What is Forest Hill?
        </Text>
        <Text fontFamily="poppins" color="var(--darkText)" mt="0.5rem" textAlign={"left"} fontSize={{ base: "0.7rem", sm: "1.1rem" }}>
          Forest Hill is a combination of hotel and cottage located near Shimla, surrounded by beautiful hills. It's a perfect spot to relax and enjoy nature away from the city.
        </Text>
      </Box>

  
      <Box mt={{ base: "2rem", sm: "4rem" }}>
        <Text fontFamily="poppins" fontSize={{ base: "1rem", sm: "2rem" }} color="var(--darkText)" textAlign={"left"} fontWeight="700">
          Forest Hill Retreat
        </Text>
        <Text fontFamily="poppins" color="var(--darkText)" mt="0.5rem" textAlign={"left"}fontSize={{ base: "0.7rem", sm: "1.1rem" }}>
          "Forest Hill is just 12 km from Shimla. It's a peaceful hotel-cottage in the hills, perfect for escaping the city and enjoying nature. Experience local food and relax in the calm surroundings."
        </Text>
      </Box>

      
      <NavLink to="/about" style={{ textDecoration: "none" }}>
        <Box
          as="button"
          color="white" 
          bg="var(--darkText)" 
          border="1px solid var(--darkText)"
          fontSize={{ base: "0.7rem", sm: "1rem" }}
          width={{ base: "25%", sm: "15%" }}
          borderRadius="0.7rem"
          mx={{ base: "1rem", sm: "0" }}
          py="0.5rem"
          mt="2rem"
          
          display="flex"
          alignItems="center"
          justifyContent="center"
          
        >
          <GrView style={{ marginRight: "0.5rem" }} /> 
          <Text fontFamily="poppins" fontSize={{ base: "0.7rem", sm: "1rem" }}>
            View
          </Text>
        </Box>
      </NavLink>
    </Box>
  );
};

export default Description;
