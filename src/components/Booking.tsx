import { Box, Text, Heading, Flex, Button, Input, Select, Textarea } from "@chakra-ui/react";
import React from "react";

export const Booking: React.FC = () => {
  return (
    <Box className="my-5">
      <Flex
        position="relative"
        className="video"
        alignItems="center"
        justifyContent="center"
        height="300px"
        bg="blue.600"
        data-wow-delay="0.1s"
      >
        
        <Box
          position="absolute"
          bottom="120px"
          textAlign="center"
          color="white"
        >
          <Heading size="lg">International Student Booking</Heading>
          <Text fontSize="xl">Guidance & Support, 24/7</Text>
        </Box>
      </Flex>

      {/* Form Section */}
      <Box className="container position-relative" marginTop="2rem">
        <Flex justifyContent="center">
          <Box bg="gray.100" p={10}  className="md:ml-32" textAlign="center" rounded="md" shadow="lg" width={{ base: "90%", sm: "80%", md: "60%", lg: "50%" }}>
            <Heading as="h1" color="blue.600" mb={4}>
              Book Your Consultation
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
                  <option value="visa-assistance">Visa Assistance</option>
                  <option value="admission-counseling">Admission Counseling</option>
                  <option value="accommodation-help">Accommodation Help</option>
                </Select>
                <Input
                  type="date"
                  size="lg"
                  borderRadius="md"
                  bg="white"
                  borderColor="gray.300"
                  focusBorderColor="blue.400"
                />
                <Textarea
                  placeholder="Special Requests or Concerns"
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
