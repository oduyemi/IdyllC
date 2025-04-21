"use client";
import React from "react";
import { Box, Divider, Heading, Image, SimpleGrid, Stack, Text, useColorModeValue } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

const objectives = [
  "Increasing Enrollment",
  "Providing Comprehensive Support",
  "Ensuring Ethical Practices",
  "Improving Student Experience",
  "Building Partnerships"
];

const usps = [
  "Inclusivity",
  "Trust & Reliability",
  "Global Connectivity",
  "Student-Centric Approach",
  "Innovation & Adaptability"
];

export const ObjectivesAndGoals: React.FC = () => {
  const textColor = useColorModeValue("gray.800", "gray.200");
  const accentColor = useColorModeValue("gray.600", "gray.400");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box py={16} px={{ base: 4, md: 20 }}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.9, duration: 0.8 }}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center" className="my-6">
            <Box>
              <Heading size="lg" color={textColor} mb={4}>
                The Catch
              </Heading>
              <Text fontSize="md" color={accentColor}>
                Admission is free at Idyll. No agent fees, only university application fees apply.
              </Text>
            </Box>
            <Image
              src={require("../../assets/images/abt.jpg")}
              alt="Free admissions"
              borderRadius="2xl"
            />
          </SimpleGrid>
        </MotionBox>
        {/* <Divider borderColor={borderColor} className="my-5" /> */}
      <Stack spacing={12}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
            
          {/* <Heading size="lg" color={textColor} mb={6}>
            Our Objectives & Goals
          </Heading> */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {objectives.map((obj, index) => (
              <MotionBox
                key={index}
                p={5}
                border="1px"
                borderColor={borderColor}
                borderRadius="2xl"
                whileHover={{ scale: 1.02 }}
              >
                <Text color={accentColor} fontWeight="bold">{obj}</Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>

        <Divider borderColor={borderColor} />

        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.8 }}
        >
          {/* <Heading size="lg" color={textColor} mb={6}>
            Why Choose Idyll
          </Heading> */}
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {usps.map((usp, index) => (
              <MotionBox
                key={index}
                p={5}
                border="1px"
                borderColor={borderColor}
                borderRadius="2xl"
                whileHover={{ scale: 1.02 }}
              >
                <Text color={accentColor} fontWeight="bold">{usp}</Text>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Stack>
    </Box>
  );
};
