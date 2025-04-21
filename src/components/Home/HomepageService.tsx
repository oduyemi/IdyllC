import { Box, Image, Text, Button, SimpleGrid, Link } from "@chakra-ui/react";
import React from "react";
import { motion } from "framer-motion";
import admission from "../../assets/images/admission.jpg";
import graduate from "../../assets/images/graduate.jpg";
import visa from "../../assets/images/visa.jpg";

const MotionBox = motion(Box);

export const HomepageService: React.FC = () => {
  const services = [
    {
      title: "Career Counselling",
      imgSrc: graduate,
      altText: "career",
      link: "/services/career-counselling",
    },
    {
      title: "Admissions",
      imgSrc: admission,
      altText: "admission",
      link: "/services/admissions",
    },
    {
      title: "Visa Assistance",
      imgSrc: visa,
      altText: "visa",
      link: "/services/visa-assistance",
    },
  ];

  return (
    <Box py={16} px={{ base: 4, md: 8 }}>
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={6}>
        {services.map((service, index) => (
            <MotionBox
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 * index, duration: 0.8 }}
                bg="white"
                borderRadius="md"
                boxShadow="sm"
                overflow="hidden"
                _hover={{
                boxShadow: "md",
                transform: "translateY(-4px)",
                transition: "all 0.3s ease", // Put transition inside _hover where Chakra expects it
                }}
            >
        
                <Image
                src={service.imgSrc}
                alt={service.altText}
                objectFit="cover"
                width="100%"
                height="200px"
                filter="grayscale(30%) brightness(80%) contrast(110%)"
                />
            <Box
              px={4}
              py={3}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderTop="1px solid #E2E8F0"
            >
              <Text fontWeight="semibold" fontSize="lg" color="black" isTruncated>
                {service.title}
              </Text>
              <Button
                as={Link}
                href={service.link}
                variant="ghost"
                borderRadius="full"
                border="1px solid black"
                size="sm"
                _hover={{ bg: "black", color: "white" }}
              >
                →
              </Button>
            </Box>
          </MotionBox>
        ))}
      </SimpleGrid>

      <Box mt={12} textAlign="center">
        <Button
          as={Link}
          href="/services"
          variant="outline"
          size="lg"
          border="1px solid black"
          borderRadius="full"
          _hover={{ bg: "black", color: "white" }}
          px={8}
          py={6}
          fontWeight="medium"
        >
          Explore Services
        </Button>
      </Box>
    </Box>
  );
};
