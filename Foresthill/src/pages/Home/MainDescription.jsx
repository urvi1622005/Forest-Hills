import React from "react";
import { Box, Center } from "@chakra-ui/react";
import Description  from "./Description.jsx";
import Flavour from "./Flavour.jsx";
import Localities from "./Localities.jsx";
 import Roomscape from "./Roomescape.jsx";
 import Strip from "./Strip.jsx";

const MainDescription = () => {
  return (
    <>
      <Box
        paddingX={{ base: "1.5rem", sm: "8rem" }}
        position="relative"
        zIndex="1"
        marginTop="-1rem"
        borderTopRadius="1rem"
        paddingTop="3rem"
        backgroundColor="#F4F8F1"
        paddingBottom="6rem"
        width="100vw"
        alignContent={"Center"}
        justifyContent="center"
        textAlign={"center"}
      >
        <Description />
      </Box>
      <Box textAlign="center"alignItems={"center"} justifyContent={"center"} color="var(--darkText)" width="100vw" backgroundColor="#F4F8F1">
        <Flavour />
         <Roomscape />
        <Localities />
        <Strip />
      </Box>
    </>
  );
};
<React/>
export default MainDescription;
