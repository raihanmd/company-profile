import { Box } from "@chakra-ui/react";
import Navbar from "../components/Navbar";
import Wave from "react-wavify";
import Hero from "../components/Hero";
import Decoration from "../components/Decoration";
import COLOR from "../constant/color";

export default function Header() {
  return (
    <>
      <Box bg={COLOR.SECOND}>
        <Decoration />
        <Navbar />
        <Hero />
      </Box>
      <Wave
        fill={COLOR.SECOND}
        paused={false}
        style={{ position: "absolute", transform: "rotate(180deg)", zIndex: "1", marginTop: "-40px" }}
        options={{
          amplitude: 40,
          speed: 0.2,
          points: 5,
        }}
      />
      <Wave
        fill={COLOR.THIRD}
        paused={false}
        style={{ position: "absolute", transform: "rotate(180deg)" }}
        options={{
          amplitude: 60,
          speed: 0.1,
          points: 8,
        }}
      />
    </>
  );
}
