import { Box, Flex, HStack, IconButton, useDisclosure, Stack, Text, Heading } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";

interface Props {
  children: React.ReactNode;
}

const Links = ["Home", "About Us", "Careers", "Contact Us"];

const NavLink = (props: Props) => {
  const { children } = props;

  return (
    <Heading
      as="a"
      px={"2"}
      py={"1"}
      fontSize={"md"}
      transition={"all 300ms ease-out"}
      _hover={{
        color: `black`,
      }}
      color={"#F6F1F1"}
      fontWeight={"bold"}
      href={"#"}
    >
      {children}
    </Heading>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={"transparent"} px={{ base: "4", md: "32" }} position={"sticky"} zIndex={"10"}>
        <Flex h={{ base: "16", md: "32" }} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={"8"} alignItems={"center"} w={"full"}>
            <Stack textAlign={{ base: "center", md: "start" }} w={{ base: "full", md: "unset" }} display={{ md: "none" }}>
              <Text>Logo</Text>
            </Stack>
            <HStack as={"nav"} spacing={"10"} display={{ base: "none", md: "flex" }} justifyContent={"end"} w={"full"}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </HStack>
          </HStack>
          <IconButton size={"md"} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={"Open Menu"} display={{ md: "none" }} onClick={isOpen ? onClose : onOpen} />
        </Flex>

        {isOpen ? (
          <Box pb={"4"} display={{ md: "none" }}>
            <Stack as={"nav"}>
              {Links.map((link) => (
                <NavLink key={link}>{link}</NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
