import React, { useState } from "react";
import {
  Box,
  Text,
  Link,
  Button,
  Collapse,
  Stack,
  IconButton,
  HStack,
} from "@chakra-ui/react";
import {
  FaPhoneAlt,
  FaHome,
  FaInfoCircle,
  FaServicestack,
  FaEnvelope,
} from "react-icons/fa";
import { HamburgerIcon } from "@chakra-ui/icons";

export const NavBar: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Box bg="white" borderBottom="1px solid" borderColor="gray.200">
      <Box
        maxW="7xl"
        mx="auto"
        px={6}
        py={4}
        display="flex"
        justifyContent="space-between"
        alignItems="center"
      >
        <Link href="/" fontWeight="bold" fontSize="2xl" color="black">
          <img src={require("../assets/images/logo.png")} alt="site logo" width="50%" />
        </Link>

        <IconButton
          aria-label="Toggle Menu"
          icon={<HamburgerIcon />}
          display={{ base: "flex", lg: "none" }}
          onClick={toggleMenu}
          variant="ghost"
        />

        <HStack
          spacing={8}
          display={{ base: "none", lg: "flex" }}
          alignItems="center"
        >
          <Link href="/" color="gray.700" _hover={{ color: "#CF0000" }}>
            <HStack spacing={1}>
              <FaHome />
              <Text>Home</Text>
            </HStack>
          </Link>
          <Link href="/about" color="gray.700" _hover={{ color: "#CF0000" }}>
            <HStack spacing={1}>
              <FaInfoCircle />
              <Text>About</Text>
            </HStack>
          </Link>
          <Link href="/services" color="gray.700" _hover={{ color: "#CF0000" }}>
            <HStack spacing={1}>
              <FaServicestack />
              <Text>Services</Text>
            </HStack>
          </Link>
          <Link href="/contact" color="gray.700" _hover={{ color: "#CF0000" }}>
            <HStack spacing={1}>
              <FaEnvelope />
              <Text>Contact</Text>
            </HStack>
          </Link>
        </HStack>

        <HStack
          spacing={3}
          bg="#CF0000"
          color="white"
          px={4}
          py={2}
          rounded="md"
          display={{ base: "none", lg: "flex" }}
        >
          <Box
            bg="white"
            color="#E7A449"
            p={2}
            rounded="full"
            display="flex"
            alignItems="center"
            justifyContent="center"
          >
            <FaPhoneAlt />
          </Box>
          <Box fontSize="sm">
            <Text>Support 24/7</Text>
            <Text fontWeight="medium">+234 706 220 3392</Text>
            <Text fontWeight="medium">+234 808 369 5430</Text>
          </Box>
        </HStack>
      </Box>

      <Collapse in={isOpen} animateOpacity>
        <Box bg="white" px={6} py={4} shadow="sm" display={{ lg: "none" }}>
          <Stack spacing={3}>
            <Link href="/" color="gray.700" _hover={{ color: "black" }}>
              Home
            </Link>
            <Link href="/about" color="gray.700" _hover={{ color: "black" }}>
              About
            </Link>
            <Link href="/services" color="gray.700" _hover={{ color: "black" }}>
              Services
            </Link>
            <Link href="/contact" color="gray.700" _hover={{ color: "black" }}>
              Contact
            </Link>
          </Stack>
        </Box>
      </Collapse>
    </Box>
  );
};
