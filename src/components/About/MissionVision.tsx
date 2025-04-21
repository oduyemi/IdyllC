import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  useBreakpointValue,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export const MissionVision: React.FC = () => {
  const fadeInUp = {
    initial: { opacity: 0, y: 40 },
    whileInView: { opacity: 1, y: 0 },
    transition: { duration: 0.6, ease: 'easeOut' },
    viewport: { once: true },
  };

  const headingSize = useBreakpointValue({ base: '2xl', md: '3xl' });

  return (
    <Box py={24} px={{ base: 6, md: 24 }} bg="white" color="black">
      <SimpleGrid columns={{ base: 1, md: 2 }} spacing={16}>
        <MotionBox
          {...fadeInUp}
          borderLeft="3px solid black"
          pl={6}
        >
          <Heading
            as="h2"
            fontSize={headingSize}
            fontWeight="medium"
            textTransform="uppercase"
            letterSpacing="wider"
            mb={4}
          >
            Our Mission
          </Heading>
          <Text
            fontSize="md"
            color="gray.800"
            lineHeight="taller"
            opacity={0.85}
          >
            To provide personalized educational guidance that empowers students to achieve academic and career excellence through international study.
          </Text>
        </MotionBox>

        <MotionBox
          {...fadeInUp}
          borderLeft="3px solid black"
          pl={6}
          transition={{ delay: 0.2 }}
        >
          <Heading
            as="h2"
            fontSize={headingSize}
            fontWeight="medium"
            textTransform="uppercase"
            letterSpacing="wider"
            mb={4}
          >
            Our Vision
          </Heading>
          <Text
            fontSize="md"
            color="gray.800"
            lineHeight="taller"
            opacity={0.85}
          >
            To be the most trusted academic partner for students seeking global education opportunities by delivering expert support and fostering lifelong success.
          </Text>
        </MotionBox>
      </SimpleGrid>
    </Box>
  );
};
