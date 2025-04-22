import React from "react";
import { Box, Text, HStack, IconButton, Link as ChakraLink } from "@chakra-ui/react";
import {
  FaMapMarkerAlt,
  FaEnvelopeOpen,
  FaFacebookF,
  FaLinkedinIn,
  FaInstagram,
} from "react-icons/fa";

export const TopBar: React.FC = () => {
  return (
    <Box bg="#CF0000" color="white" px={8} py={2} display={{ base: "none", lg: "block" }}>
      <HStack justify="space-between" align="center">
        <HStack spacing={6} fontSize="sm" color="gray.300">
          <HStack spacing={2}>
            <FaMapMarkerAlt />
            <Text>82 Ibilola Nelson House, Allen Avenue, Ikeja</Text>
          </HStack>
          <HStack spacing={2}>
            <FaEnvelopeOpen />
            <Text>info@idyllconsults.com</Text>
          </HStack>
        </HStack>
        <HStack spacing={2}>
          <ChakraLink href="https://facebook.com/IdyllConsultsInternational" isExternal>
            <IconButton
              aria-label="Facebook"
              icon={<FaFacebookF />}
              size="sm"
              variant="ghost"
              colorScheme="gray.400"
              _hover={{ bg: "whiteAlpha.300" }}
            />
          </ChakraLink>
          <ChakraLink href="https://instagram.com/Idyllconsults" isExternal>
            <IconButton
              aria-label="Instagram"
              icon={<FaInstagram />}
              size="sm"
              variant="ghost"
              colorScheme="gray.400"
              _hover={{ bg: "whiteAlpha.300" }}
            />
          </ChakraLink>
          <ChakraLink href="https://www.linkedin.com/company/idyll-consults-and-allied-limited" isExternal>
            <IconButton
              aria-label="LinkedIn"
              icon={<FaLinkedinIn />}
              size="sm"
              variant="ghost"
              colorScheme="gray.400"
              _hover={{ bg: "whiteAlpha.300" }}
            />
          </ChakraLink>
        </HStack>
      </HStack>
    </Box>
  );
};
