import { Box, Heading, Text, Button, Flex, Image } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import React from "react";

export const PageNotFound: React.FC = () => {
  return (
    <Box 
      className="h-screen w-full bg-gray-100 flex items-center justify-center"
      bgGradient="linear(to-r, blue.400, teal.400)"
    >
      <Flex
        direction="column"
        align="center"
        justify="center"
        textAlign="center"
        bg="white"
        p={10}
        rounded="lg"
        shadow="xl"
        maxW="md"
      >
        <Image
          src="https://via.placeholder.com/150"
          alt="404 Illustration"
          boxSize="150px"
          mb={5}
        />
        <Heading
          as="h1"
          fontSize="6xl"
          fontWeight="bold"
          color="blue.500"
        >
          404
        </Heading>
        <Text fontSize="lg" color="gray.600" mt={4}>
          Oops! The page you're looking for doesn't exist.
        </Text>
        <Text fontSize="md" color="gray.500" mb={6}>
          It seems you've found a broken link or entered a page that no longer exists.
        </Text>
        <Link to="/">
          <Button
            bg="teal.500"
            color="white"
            _hover={{ bg: "teal.600" }}
            px={6}
            py={4}
            rounded="full"
            size="lg"
            className="transition-all duration-300 ease-in-out"
          >
            Back to Home
          </Button>
        </Link>
      </Flex>
    </Box>
  );
};
