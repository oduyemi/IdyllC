import {
  Box,
  Image,
  Text,
  Button,
  SimpleGrid,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
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
      altText: "Career counseling support",
      link: "/services/career-counselling",
    },
    {
      title: "Admissions",
      imgSrc: admission,
      altText: "University admission assistance",
      link: "/services/admissions",
    },
    {
      title: "Visa Assistance",
      imgSrc: visa,
      altText: "Visa application support",
      link: "/services/visa-assistance",
    },
  ];

  const bgColor = useColorModeValue("#CF0000", "#CF0000");
  const textColor = useColorModeValue("#fff", "#fff");

  return (
    <Box py={16} px={{ base: 4, md: 8 }} bg="#fefefe">
      <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
        {services.map((service, index) => (
          <MotionBox
            key={index}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 * index, duration: 0.8 }}
            bg={bgColor}
            borderRadius="lg"
            boxShadow="md"
            overflow="hidden"
            _hover={{
              boxShadow: "xl",
              transform: "translateY(-6px)",
              transition: "all 0.3s ease-in-out",
            }}
          >
            <Image
              src={service.imgSrc}
              alt={service.altText}
              objectFit="cover"
              width="100%"
              height="220px"
              transition="transform 0.3s ease"
            />
            <Box
              px={5}
              py={4}
              display="flex"
              justifyContent="space-between"
              alignItems="center"
              borderTop="1px solid #E2E8F0"
            >
              <Text
                fontWeight="semibold"
                fontSize="lg"
                color={textColor}
                isTruncated
              >
                {service.title}
              </Text>
              <Button
                as={Link}
                href={service.link}
                variant="ghost"
                borderRadius="full"
                border="1px solid"
                color={textColor}
                borderColor={textColor}
                size="sm"
                _hover={{
                  bg: "#fff",
                  color: "#CF0000",
                  textDecoration: "none",
                }}
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
          border="2px solid #CF0000"
          color="#CF0000"
          borderRadius="full"
          fontWeight="medium"
          px={10}
          py={6}
          _hover={{ bg: "#CF0000", color: "#fff", textDecoration: "none" }}
        >
          Explore All Services
        </Button>
      </Box>
    </Box>
  );
};
