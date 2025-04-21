import { Box, Text, Flex, Button, Link, Icon, Stack } from "@chakra-ui/react";
import { FaFacebookSquare, FaLinkedin, FaInstagram } from "react-icons/fa";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="black" color="white" pt={8} pb={6}>
      <Box maxW="7xl" mx="auto" px={4}>
        <Flex flexWrap="wrap" justifyContent={{ base: "center", lg: "space-between" }} textAlign={{ base: "center", lg: "left" }}>
          <Box w={{ base: "full", lg: "50%" }} px={4}>
            <Text as="h4" fontSize="3xl" fontWeight="bold" color="white">
              Let's keep in touch!
            </Text>
            <Text fontSize="lg" mt={2} mb={4} color="gray.300">
              Find us on any of these platforms, we respond within 1-2 business days.
            </Text>
            <Stack direction="row" spacing={2} justify={{ base: "center", lg: "start" }}>
              <Button as="a" href="#" bg="white" color="black" boxShadow="md" rounded="full">
                <Icon as={FaFacebookSquare} />
              </Button>
              <Button as="a" href="#" bg="white" color="black" boxShadow="md" rounded="full">
                <Icon as={FaLinkedin} />
              </Button>
              <Button as="a" href="#" bg="white" color="black" boxShadow="md" rounded="full">
                <Icon as={FaInstagram} />
              </Button>
            </Stack>
          </Box>

          <Flex w={{ base: "full", lg: "50%" }} justify={{ base: "center", lg: "space-between" }} px={4} mt={{ base: 6, lg: 0 }}>
            <Box>
              <Text textTransform="uppercase" fontWeight="bold" fontSize="sm" color="gray.400" mb={2}>
                Useful Links
              </Text>
              <Stack spacing={2}>
                <Link href="#" color="gray.300" _hover={{ color: "white" }}>
                  About Us
                </Link>
                <Link href="#" color="gray.300" _hover={{ color: "white" }}>
                  Our Service
                </Link>
                <Link href="#" color="gray.300" _hover={{ color: "white" }}>
                  Our Courses
                </Link>
              </Stack>
            </Box>
            <Box>
              <Text textTransform="uppercase" fontWeight="bold" fontSize="sm" color="gray.400" mb={2}>
                Other Resources
              </Text>
              <Stack spacing={2}>
                <Link href="#" color="gray.300" _hover={{ color: "white" }}>
                  Terms & Conditions
                </Link>
                <Link href="#" color="gray.300" _hover={{ color: "white" }}>
                  Privacy Policy
                </Link>
                <Link href="#" color="gray.300" _hover={{ color: "white" }}>
                  Contact Us
                </Link>
              </Stack>
            </Box>
          </Flex>
        </Flex>

        <Box borderTop="1px solid" borderColor="gray.700" my={6} />

        <Flex justify="center" textAlign="center">
          <Text fontSize="sm" color="gray.400">
            Copyright © {new Date().getFullYear()} || Idyll Consults LTD.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
