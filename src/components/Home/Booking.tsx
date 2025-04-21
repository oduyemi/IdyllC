"use client";
import {
  Box,
  Text,
  Heading,
  Flex,
  Button,
  Input,
  Select,
  Textarea,
  useColorModeValue,
  Stack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import React from "react";

const MotionBox = motion(Box);
const MotionFlex = motion(Flex);

export const Booking: React.FC = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const inputBg = useColorModeValue("white", "gray.700");
  const border = useColorModeValue("gray.200", "gray.600");

  return (
    <Box my={10}>
      {/* Header */}
      <MotionFlex
        alignItems="center"
        justifyContent="center"
        height="300px"
        bgImage={`url(${require('../../assets/images/students.jpg')})`}
        bgPos="center"
        bgSize="cover"
        position="relative"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Box
          position="absolute"
          bg="rgba(0,0,0,0.5)"
          top={0}
          left={0}
          w="100%"
          h="100%"
        />
        <Box position="relative" zIndex={1} textAlign="center" color="white">
          <Heading size="2xl">International Student Booking</Heading>
          <Text fontSize="xl" color="gray.200" mt={2}>
            Guidance & Support, 24/7
          </Text>
        </Box>
      </MotionFlex>

      {/* Form */}
      <MotionBox
        mt={16}
        px={4}
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.3, duration: 0.8 }}
      >
        <Flex justifyContent="center">
          <Box
            bg={cardBg}
            p={10}
            borderRadius="xl"
            boxShadow="2xl"
            width={{ base: "100%", sm: "90%", md: "70%", lg: "50%" }}
            border="1px solid"
            borderColor={border}
          >
            <Heading mb={6} fontSize="2xl" color={useColorModeValue("gray.800", "white")}>
              Book Your Consultation
            </Heading>
            <form>
              <Stack spacing={5}>
                <Input placeholder="Your Name" size="lg" bg={inputBg} borderColor={border} />
                <Input type="email" placeholder="Your Email" size="lg" bg={inputBg} borderColor={border} />
                <Select placeholder="Select A Service" size="lg" bg={inputBg} borderColor={border}>
                  <option value="visa-assistance">Visa Assistance</option>
                  <option value="admission-counseling">Admission Counseling</option>
                  <option value="accommodation-help">Accommodation Help</option>
                </Select>
                <Input type="date" size="lg" bg={inputBg} borderColor={border} />
                <Textarea
                  placeholder="Special Requests or Concerns"
                  size="lg"
                  bg={inputBg}
                  borderColor={border}
                />
                <Button
                  type="submit"
                  bg="black"
                  color="white"
                  size="lg"
                  _hover={{ bg: "gray.700" }}
                  py={6}
                >
                  Book Now
                </Button>
              </Stack>
            </form>
          </Box>
        </Flex>
      </MotionBox>
    </Box>
  );
};
