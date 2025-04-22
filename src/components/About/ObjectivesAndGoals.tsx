"use client";
import React from "react";
import {
  Box,
  Divider,
  Heading,
  Image,
  SimpleGrid,
  Stack,
  Text,
  useColorModeValue,
  HStack,
} from "@chakra-ui/react";
import { motion } from "framer-motion";
import {
  FaBullseye,
  FaHandsHelping,
  FaBalanceScale,
  FaUserGraduate,
  FaHandshake,
  FaUsers,
  FaShieldAlt,
  FaGlobe,
  FaSmile,
  FaLightbulb,
} from "react-icons/fa";

const MotionBox = motion(Box);

const objectives = [
  { text: "Increasing Enrollment", icon: FaBullseye },
  { text: "Providing Comprehensive Support", icon: FaHandsHelping },
  { text: "Ensuring Ethical Practices", icon: FaBalanceScale },
  { text: "Improving Student Experience", icon: FaUserGraduate },
  { text: "Building Partnerships", icon: FaHandshake },
];

const usps = [
  { text: "Inclusivity", icon: FaUsers },
  { text: "Trust & Reliability", icon: FaShieldAlt },
  { text: "Global Connectivity", icon: FaGlobe },
  { text: "Student-Centric Approach", icon: FaSmile },
  { text: "Innovation & Adaptability", icon: FaLightbulb },
];

export const ObjectivesAndGoals: React.FC = () => {
  // Use brand colors from theme
  const textColor = useColorModeValue("brand.text", "brand.text");
  const accentColor = useColorModeValue("brand.primary", "brand.secondary");
  const borderColor = useColorModeValue("brand.accent", "brand.accent");
  const hoverBgColor = useColorModeValue("brand.background", "brand.background");

  return (
    <Box py={16} px={{ base: 4, md: 20 }} bg="brand.background">
      <MotionBox
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9, duration: 0.8 }}
      >
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center" className="my-6">
          <Box>
            <Heading size="lg" color="#E7A449" mb={4}>
              The Catch
            </Heading>
            <Text fontSize="md" color={accentColor}>
              Admission is free at Idyll. No agent fees, only university application fees apply.
            </Text>
          </Box>
          <Image
            src={require("../../assets/images/abt.jpg")}
            alt="Happy students celebrating admission success"
            borderRadius="2xl"
          />
        </SimpleGrid>
      </MotionBox>

      <Stack spacing={12}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.8 }}
        >
          <Heading size="lg" color="#E7A449" mb={6}>
            Our Objectives & Goals
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {objectives.map((item, index) => (
              <MotionBox
                key={index}
                p={5}
                border="1px"
                borderColor={borderColor}
                borderRadius="2xl"
                whileHover={{ scale: 1.02 }}
                _hover={{ bg: hoverBgColor }}
              >
                <HStack spacing={4}>
                  <Box as={item.icon} color="#CF0000" boxSize={5} />
                  <Text color={textColor} fontWeight="bold">{item.text}</Text>
                </HStack>
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
          <Heading size="lg" color="#E7A449" mb={6}>
            Why Choose Idyll
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {usps.map((item, index) => (
              <MotionBox
                key={index}
                p={5}
                border="1px"
                borderColor={borderColor}
                borderRadius="2xl"
                whileHover={{ scale: 1.02 }}
                _hover={{ bg: hoverBgColor }}
              >
                <HStack spacing={4}>
                  <Box as={item.icon} color="#CF0000" boxSize={5} />
                  <Text color={textColor} fontWeight="bold">{item.text}</Text>
                </HStack>
              </MotionBox>
            ))}
          </SimpleGrid>
        </MotionBox>
      </Stack>
    </Box>
  );
};
