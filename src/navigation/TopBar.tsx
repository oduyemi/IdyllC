import React from "react";
import { Box, Text, HStack, IconButton } from "@chakra-ui/react";
import {
  FaMapMarkerAlt,
  FaEnvelopeOpen,
  FaFacebookF,
  FaTwitter,
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
          {[FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram].map((Icon, idx) => (
            <IconButton
              key={idx}
              aria-label="social"
              icon={<Icon />}
              size="sm"
              variant="ghost"
              colorScheme="gray.400"
              _hover={{ bg: "whiteAlpha.300" }}
            />
          ))}
        </HStack>
      </HStack>
    </Box>
  );
};
