"use client";
import React from 'react';
import {
  Box,
  Heading,
  Text,
  SimpleGrid,
  Icon,
  VStack,
  Button,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';
import {
  FaUserGraduate,
  FaBriefcase,
  FaUniversity,
  FaPlaneDeparture,
  FaHome,
  FaPassport,
} from 'react-icons/fa';
import { Link } from 'react-router-dom';
import "animate.css";

const MotionBox = motion(Box);

const services = [
  {
    title: 'Student Counselling',
    description: 'Personalized guidance tailored to your educational journey and personal development.',
    icon: FaUserGraduate,
    link: "/services/student-counselling"
  },
  {
    title: 'Career Counselling',
    description: 'Explore your strengths and align your academic path with a meaningful career.',
    icon: FaBriefcase,
    link: "/services/career-counselling"
  },
  {
    title: 'Admission',
    description: 'Get expert help with your university or college application process.',
    icon: FaUniversity,
    link: "/services/admissions"
  },
  {
    title: 'Visa Assistance',
    description: 'Support with visa applications and required documentation for international studies.',
    icon: FaPassport,
    link: "/services/visa-assistance"
  },
  {
    title: 'Accommodation Assistance',
    description: 'Find safe, student-friendly housing options close to your institution.',
    icon: FaHome,
    link: "/services/accomodation-assistance"
  },
  {
    title: 'Flight Reservation',
    description: 'Get assistance with flight bookings and travel planning to your study destination.',
    icon: FaPlaneDeparture,
    link: "/services/flight-reservation"
  },
];

export const Services: React.FC = () => {
  return (
    <Box className="py-20 px-6 md:px-16 bg-white">
      <Box maxW="7xl" mx="auto" textAlign="center" mb={16}>
        <Heading
          as="h2"
          size="2xl"
          className="animate__animated animate__fadeInDown"
          fontFamily="Georgia, serif"
          fontWeight="medium"
          color="black"
          mb={4}
        >
          Empowering Your Educational Journey
        </Heading>
        <Text
          fontSize="lg"
          color="black"
          maxW="2xl"
          mx="auto"
          className="animate__animated animate__fadeInUp"
        >
          Discover our suite of services crafted to support your academic and professional goals with clarity and care.
        </Text>
      </Box>

      <SimpleGrid columns={{ base: 1, sm: 2, lg: 3 }} spacing={10}>
        {services.map((service, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.15 * index, duration: 0.6 }}
            bg="white"
            border="1px solid black"
            borderRadius="xl"
            p={6}
            whileHover={{
              y: -4,
              boxShadow: 'lg',
            }}
          >
            <VStack spacing={4} align="start">
              <Box
                px={2}
                display="flex"
                gap={4}
                alignItems="center"
                justifyContent="space-between"
                w="full"
              >
                <Icon as={service.icon} w={6} h={6} color="black" />
                <Heading as="h3" size="md" color="black" fontWeight="medium">
                  {service.title}
                </Heading>
                <Button
                  as={Link}
                  to={service.link}
                  variant="ghost"
                  borderRadius="full"
                  border="1px solid black"
                  size="sm"
                  _hover={{ bg: "black", color: "white" }}
                >
                  →
                </Button>
              </Box>
              <Text fontSize="sm" color="black" lineHeight="tall">
                {service.description}
              </Text>
            </VStack>
          </MotionBox>
        ))}
      </SimpleGrid>
    </Box>
  );
};
