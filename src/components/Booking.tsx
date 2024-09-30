import { Box, Text, Heading, Flex, Button, Input, Select, Textarea } from "@chakra-ui/react";
import React from "react";

export const Booking: React.FC = () => {
  return (
    <Box className="my-5">
      {/* Hero Section */}
      <Flex
        position="relative"
        className="video"
        alignItems="center"
        justifyContent="center"
        height="300px"
        bg="blue.600"
        data-wow-delay="0.1s"
      >
        <Button
          className="btn-play"
          bg="transparent"
          borderRadius="full"
          border="2px solid white"
          width="80px"
          height="80px"
          _hover={{ bg: "transparent" }}
          data-src="https://www.youtube.com/embed/DWRcNpR6Kdc"
          data-bs-target="#videoModal"
        >
          <Box as="span" color="white" fontSize="3xl">▶</Box>
        </Button>
        <Box
          position="absolute"
          bottom="20px"
          textAlign="center"
          color="white"
        >
          <Heading size="lg">Emergency Plumbing Service</Heading>
          <Text fontSize="xl">24 Hours 7 Days a Week</Text>
        </Box>
      </Flex>

      {/* Form Section */}
      <Box className="container position-relative" marginTop="-6rem">
        <Flex justifyContent="center">
          <Box bg="gray.100" p={10} textAlign="center" rounded="md" shadow="lg">
            <Heading as="h1" mb={4}>
              Book For A Service
            </Heading>
            <form>
              <Flex direction="column" gap={3}>
                <Input
                  placeholder="Your Name"
                  size="lg"
                  borderRadius="md"
                  bg="white"
                  borderColor="gray.300"
                  focusBorderColor="blue.400"
                />
                <Input
                  type="email"
                  placeholder="Your Email"
                  size="lg"
                  borderRadius="md"
                  bg="white"
                  borderColor="gray.300"
                  focusBorderColor="blue.400"
                />
                <Select
                  placeholder="Select A Service"
                  size="lg"
                  borderRadius="md"
                  bg="white"
                  borderColor="gray.300"
                  focusBorderColor="blue.400"
                >
                  <option value="1">Service 1</option>
                  <option value="2">Service 2</option>
                  <option value="3">Service 3</option>
                </Select>
                <Input
                  placeholder="Service Date"
                  size="lg"
                  borderRadius="md"
                  bg="white"
                  borderColor="gray.300"
                  focusBorderColor="blue.400"
                />
                <Textarea
                  placeholder="Special Request"
                  size="lg"
                  borderRadius="md"
                  bg="white"
                  borderColor="gray.300"
                  focusBorderColor="blue.400"
                />
                <Button
                  type="submit"
                  bg="blue.600"
                  color="white"
                  size="lg"
                  py={6}
                  _hover={{ bg: "blue.700" }}
                  width="100%"
                >
                  Book Now
                </Button>
              </Flex>
            </form>
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};
