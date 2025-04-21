import {
  Box,
  Text,
  SimpleGrid,
  Heading,
  Flex,
  Icon,
  Link,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import { FaCheck, FaArrowRight } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
const spring = {
  type: "spring",
  damping: 25,
  stiffness: 200,
};

export const ExploreCourses: React.FC = () => {
  const bg = useColorModeValue("white", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("blackAlpha.200", "whiteAlpha.300");
  const textPrimary = useColorModeValue("black", "white");
  const textSecondary = useColorModeValue("gray.600", "gray.400");

  const degrees = [
    {
      title: "Bachelor’s Degree (BSc)",
      values: ["Foundational knowledge", "Diverse fields", "Career-ready skills"],
    },
    {
      title: "Master’s Degree",
      values: ["Advanced depth", "Focused learning", "Industry-prepared"],
    },
    {
      title: "MRes Programs",
      values: ["Research-driven", "Academic rigor", "Postgraduate-ready"],
    },
    {
      title: "PhD Programs",
      values: ["Independent research", "Expert guidance", "Thesis development"],
    },
  ];

  return (
    <Box py={24} px={{ base: 6, lg: 24 }} bg={bg} color={textPrimary}>
      <Grid
        templateColumns={{ base: "1fr", lg: "0.6fr 1.4fr" }}
        gap={12}
      >
        {/* Left Tagline */}
        <Flex
          display={{ base: "none", lg: "flex" }}
          alignItems="center"
          justifyContent="center"
        >
          <MotionHeading
            as="h1"
            fontSize="6xl"
            fontWeight="light"
            transform="rotate(-90deg)"
            color="blackAlpha.600"
            letterSpacing="wider"
            textAlign="center"
            opacity={0.2}
            animate={{ opacity: 1 }}
            transition={spring}  
          >
            Learn. Grow. Excel.
          </MotionHeading>
        </Flex>

        {/* Right Content */}
        <Box>
          <Box textAlign={{ base: "center", lg: "left" }} mb={12}>
            <Text
              fontSize="xs"
              textTransform="uppercase"
              color="blackAlpha.500"
              letterSpacing="wide"
            >
              Academic Pathways
            </Text>
            <Heading fontSize="3xl" fontWeight="medium" mb={3}>
              Explore Your Future with Us
            </Heading>
            <Text fontSize="md" color={textSecondary} maxW="xl">
              We offer a wide range of degree programs tailored to your goals. 
              Our counselling sessions help match students with the right academic path—whether it's an undergraduate, postgraduate, or research degree.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {degrees.map((degree, index) => (
              <MotionBox
                key={index}
                bg={cardBg}
                p={6}
                rounded="xl"
                border="1px solid"
                borderColor={borderColor}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.05,
                  boxShadow: "0 8px 20px rgba(0, 0, 0, 0.08)",
                  transition: { duration: 0.3 },
                }}
              >
                <Heading fontSize="xl" fontWeight="semibold" mb={3}>
                  {degree.title}
                </Heading>
                <Box mb={4}>
                  {degree.values.map((val, i) => (
                    <Text key={i} fontSize="sm" mb={1} color={textSecondary}>
                      <Icon
                        as={FaCheck}
                        color="black"
                        mr={2}
                        fontSize="xs"
                        verticalAlign="middle"
                      />
                      {val}
                    </Text>
                  ))}
                </Box>
                <Link
                  href="/services/student-counselling"
                  fontSize="sm"
                  fontWeight="medium"
                  display="inline-flex"
                  alignItems="center"
                  color="black"
                  mt={2}
                  _hover={{ textDecoration: "underline", color: "blackAlpha.800" }}
                >
                  Talk to a Counselor <Icon as={FaArrowRight} ml={2} />
                </Link>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>
      </Grid>
    </Box>
  );
};
