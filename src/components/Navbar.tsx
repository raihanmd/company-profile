import { Box, Flex, HStack, IconButton, useDisclosure, Stack, Text, Heading, Link } from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { motion } from "framer-motion";

import COLOR from "../constant/color";

interface INavLinkProps {
  children: React.ReactNode;
}

interface INavItem {
  label: string;
  href: string;
}

const NAV_ITEM: Array<INavItem> = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Careers", href: "#careers" },
  { label: "Contact Us", href: "#contact" },
];

const NavLink = (props: INavLinkProps) => {
  const { children } = props;

  return (
    <Heading
      px={"2"}
      py={"1"}
      fontSize={"md"}
      _hover={{
        color: `black`,
      }}
      color={"#F6F1F1"}
      fontWeight={"bold"}
      transition={"300ms ease"}
    >
      {children}
    </Heading>
  );
};

export default function Navbar() {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={"transparent"} px={{ base: "4", md: "32" }} position={"sticky"} top={"0"} zIndex={"10"} backdropFilter={"auto"} backdropBlur={window.scrollY > 0 || isOpen ? "md" : "none"}>
        <Flex h={{ base: "16", md: "32" }} alignItems={"center"} justifyContent={"space-between"}>
          <HStack spacing={"8"} alignItems={"center"} w={"full"}>
            <Stack textAlign={{ base: "center", md: "start" }} w={{ base: "full", md: "unset" }} display={{ md: "none" }}>
              <Text>Logo</Text>
            </Stack>
            <HStack as={"nav"} spacing={"10"} display={{ base: "none", md: "flex" }} justifyContent={"end"} w={"full"}>
              {NAV_ITEM.map((link, i) => (
                <motion.a
                  key={i}
                  transition={{
                    delay: (i + 0.5) * 0.15,
                    ease: "easeOut",
                  }}
                  initial={{
                    opacity: 0,
                    y: -20,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  href={link.href}
                >
                  <NavLink key={i}>{link.label}</NavLink>
                </motion.a>
              ))}
            </HStack>
          </HStack>
          <IconButton size={"md"} icon={isOpen ? <CloseIcon /> : <HamburgerIcon />} aria-label={"Open Menu"} display={{ md: "none" }} onClick={isOpen ? onClose : onOpen} bg={COLOR.MAIN} color={"white"} _hover={{ bg: COLOR.MAIN }} />
        </Flex>

        {isOpen ? (
          <Box px={"5"} display={{ md: "none" }} bg={"transparent"} position={"sticky"} backdropFilter={"auto"} backdropBlur={"md"}>
            <Stack as={"nav"} gap={"0"}>
              {NAV_ITEM.map((link, i) => (
                <Link href={link.href} borderRadius={"lg"} p={"2"} _hover={{ textDecor: "none", bg: COLOR.THIRD }}>
                  <NavLink key={i}>{link.label}</NavLink>
                </Link>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}
