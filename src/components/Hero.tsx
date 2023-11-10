import { Box, Heading, Text, Stack } from "@chakra-ui/react";
import { TypeAnimation } from "react-type-animation";

import COLOR from "../constant/color";

export default function Hero() {
  return (
    <>
      <Stack maxW={"3xl"} minH={"70vh"} zIndex={"2"} pos={"sticky"} justify={"center"} mx={"auto"}>
        <Stack as={Box} spacing={{ base: "5", md: "10" }} align={"center"} px={"6"}>
          <Heading fontWeight={"bold"} fontSize={{ base: "4xl", sm: "5xl", md: "7xl" }} lineHeight={"110%"} textAlign={"center"} color={"white"}>
            Welcome to <br />
            <Text as={"span"} color={COLOR.YELLOW}>
              Lypan's Group
            </Text>
          </Heading>
          <Text color={COLOR.MAIN} fontSize={{ md: "lg" }} textAlign={"center"} fontWeight={"bold"}>
            <TypeAnimation preRenderFirstString={true} sequence={["We create competent developers", 1000, "We create high quality developers", 1000, "We create reliable developers", 1000]} speed={50} repeat={Infinity} />
          </Text>
          <Text color={"white"} fontSize={{ md: "lg" }} textAlign={"center"}>
            Unleashing Innovation, One Code at a Time. Elevate Your Skills with Cutting-Edge Tech Education. Where Excellence Meets Animation – Join Us and Transform Your Future!.
          </Text>
        </Stack>
      </Stack>
    </>
  );
}
