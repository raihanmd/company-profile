import { motion } from "framer-motion";
import { Box, keyframes } from "@chakra-ui/react";

import COLOR from "../constant/color";

const animationKeyframes = keyframes`
  0% { transform: scale(1) rotate(0); border-radius: 20%;}
  25% { transform: scale(2) rotate(0); border-radius: 20%; }
  50% { transform: scale(2) rotate(270deg); border-radius: 50%;}
  75% { transform: scale(1) rotate(270deg); border-radius: 50%;}
  100% { transform: scale(1) rotate(0); border-radius: 20%; top:}
`;

const animation = `${animationKeyframes} 4s ease-in-out infinite`;

const Decoration = () => {
  return (
    <>
      <Box as={motion.div} pos={"absolute"} right={"12"} bottom={"12"} animation={animation} padding="2" bg={COLOR.MAIN} width="12" height="12" display="flex" zIndex={"2"} />
      <Box as={motion.div} pos={"absolute"} left={"12"} bottom={"12"} animation={animation} padding="2" bg={COLOR.THIRD} width="12" height="12" display="flex" zIndex={"2"} />
      <Box as={motion.svg} position={"absolute"} w={{ base: "lg", md: "3xl" }} viewBox="0 0 200 200" xmlns="http://www.w3.org/2000/svg" zIndex={"1"}>
        <Box
          as={motion.path}
          fill="#9E5A3A"
          d="M41.9,-71.5C52.9,-66.3,59.5,-52.2,67.5,-38.8C75.5,-25.4,85.1,-12.7,81.3,-2.2C77.5,8.3,60.2,16.6,52.4,30.3C44.5,44,46.1,63.2,38.9,72.8C31.7,82.3,15.9,82.1,1.6,79.4C-12.7,76.7,-25.5,71.5,-31.2,61.1C-37,50.8,-35.7,35.3,-43.5,24.3C-51.2,13.3,-68,6.6,-75.4,-4.3C-82.8,-15.2,-80.9,-30.4,-69.3,-34.7C-57.6,-39,-36.3,-32.4,-23.1,-36.3C-9.9,-40.3,-5,-54.8,5.3,-63.9C15.5,-73,30.9,-76.7,41.9,-71.5Z"
        />
      </Box>
    </>
  );
};

export default Decoration;
