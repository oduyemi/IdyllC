import { Box, Text, Flex, Button, Link, Icon, Stack } from "@chakra-ui/react";
import { FaTwitter, FaFacebookSquare, FaDribbble, FaGithub } from "react-icons/fa";
import React from "react";

export const Footer: React.FC = () => {
  return (
    <Box as="footer" bg="gray.200" pt={8} pb={6}>
      <Box maxW="7xl" mx="auto" px={4}>
        <Flex flexWrap="wrap" justifyContent={{ base: "center", lg: "space-between" }} textAlign={{ base: "center", lg: "left" }}>
          <Box w={{ base: "full", lg: "50%" }} px={4}>
            <Text as="h4" fontSize="3xl" fontWeight="bold" color="gray.700">
              Let's keep in touch!
            </Text>
            <Text fontSize="lg" mt={2} mb={4} color="gray.600">
              Find us on any of these platforms, we respond within 1-2 business days.
            </Text>
            <Stack direction="row" spacing={2} justify={{ base: "center", lg: "start" }}>
              <Button as="a" href="#" bg="white" color="blue.400" boxShadow="lg" rounded="full">
                <Icon as={FaTwitter} />
              </Button>
              <Button as="a" href="#" bg="white" color="blue.600" boxShadow="lg" rounded="full">
                <Icon as={FaFacebookSquare} />
              </Button>
              <Button as="a" href="#" bg="white" color="pink.400" boxShadow="lg" rounded="full">
                <Icon as={FaDribbble} />
              </Button>
              <Button as="a" href="#" bg="white" color="gray.800" boxShadow="lg" rounded="full">
                <Icon as={FaGithub} />
              </Button>
            </Stack>
          </Box>

          <Flex w={{ base: "full", lg: "50%" }} justify={{ base: "center", lg: "space-between" }} px={4} mt={{ base: 6, lg: 0 }}>
            <Box>
              <Text textTransform="uppercase" fontWeight="bold" fontSize="sm" color="gray.500" mb={2}>
                Useful Links
              </Text>
              <Stack spacing={2}>
                <Link href="#" color="gray.600" _hover={{ color: "gray.800" }}>
                  About Us
                </Link>
                <Link href="#" color="gray.600" _hover={{ color: "gray.800" }}>
                  Blog
                </Link>
                <Link href="#" color="gray.600" _hover={{ color: "gray.800" }}>
                  Github
                </Link>
                <Link href="#" color="gray.600" _hover={{ color: "gray.800" }}>
                  Free Products
                </Link>
              </Stack>
            </Box>
            <Box>
              <Text textTransform="uppercase" fontWeight="bold" fontSize="sm" color="gray.500" mb={2}>
                Other Resources
              </Text>
              <Stack spacing={2}>
                <Link href="#" color="gray.600" _hover={{ color: "gray.800" }}>
                  MIT License
                </Link>
                <Link href="#" color="gray.600" _hover={{ color: "gray.800" }}>
                  Terms & Conditions
                </Link>
                <Link href="#" color="gray.600" _hover={{ color: "gray.800" }}>
                  Privacy Policy
                </Link>
                <Link href="#" color="gray.600" _hover={{ color: "gray.800" }}>
                  Contact Us
                </Link>
              </Stack>
            </Box>
          </Flex>
        </Flex>

        <Box borderTop="1px solid" borderColor="gray.300" my={6} />

        <Flex justify="center" textAlign="center">
          <Text fontSize="sm" color="gray.500">
            Copyright © {new Date().getFullYear()} || Idyll Consults LTD.
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};
