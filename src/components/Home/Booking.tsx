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
const MotionHeading = motion(Heading);
const MotionText = motion(Text);

export const Booking: React.FC = () => {
  const cardBg = useColorModeValue("white", "gray.800");
  const inputBg = useColorModeValue("white", "gray.700");
  const border = useColorModeValue("gray.200", "gray.600");

  return (
    <Box my={10}>
      {/* Header Section */}
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
          bg="rgba(244,0,0,0.5)"
          top={0}
          left={0}
          w="100%"
          h="100%"
        />
        <Box position="relative" zIndex={1} textAlign="center" color="white">
          <MotionHeading
            size="2xl"
            initial={{ y: -20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.4 }}
          >
            International Student Booking
          </MotionHeading>
          <MotionText
            fontSize="xl"
            color="gray.200"
            mt={2}
            initial={{ y: 20, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ delay: 0.6 }}
          >
            Guidance & Support, 24/7
          </MotionText>
        </Box>
      </MotionFlex>

      {/* Booking Form */}
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
            <MotionHeading
              mb={6}
              fontSize="2xl"
              color={useColorModeValue("#E7A449", "white")}
              initial={{ y: 10, opacity: 0 }}
              animate={{ y: 0, opacity: 1 }}
              transition={{ delay: 0.4 }}
            >
              Book Your Consultation
            </MotionHeading>
            <form>
              <Stack spacing={5}>
                {[
                  <Input key="name" placeholder="Your Name" size="lg" bg={inputBg} borderColor={border} />,
                  <Input key="email" type="email" placeholder="Your Email" size="lg" bg={inputBg} borderColor={border} />,
                  <Select key="service" placeholder="Select A Service" size="lg" bg={inputBg} borderColor={border}>
                    <option value="accomodation">Accomodation Assistance</option>
                    <option value="career">Career Counselling</option>
                    <option value="flight">Flight Reservation</option>
                    <option value="admission">Secure Admission</option>
                    <option value="student-counseling">Student Counseling</option>
                    <option value="visa-assistance">Visa Assistance</option>
                  </Select>,
                  <Input key="date" type="date" size="lg" bg={inputBg} borderColor={border} />,
                  <Textarea key="message" placeholder="Special Requests or Concerns" size="lg" bg={inputBg} borderColor={border} />,
                ].map((field, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5 + index * 0.1 }}
                  >
                    {field}
                  </motion.div>
                ))}
                <motion.div
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.1 }}
                >
                  <Button
                    type="submit"
                    bg="#CF0000"
                    color="white"
                    size="lg"
                    _hover={{ bg: "red.700" }}
                    py={6}
                    w="100%"
                  >
                    Book Now
                  </Button>
                </motion.div>
              </Stack>
            </form>
          </Box>
        </Flex>
      </MotionBox>
    </Box>
  );
};
