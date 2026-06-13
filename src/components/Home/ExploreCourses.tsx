import {
  Box,
  Text,
  SimpleGrid,
  Heading,
  Flex,
  Icon,
  Link,
  Button,
  useColorModeValue,
  Grid,
} from "@chakra-ui/react";
import { FaCheck, FaArrowRight, FaGraduationCap } from "react-icons/fa";
import { motion } from "framer-motion";
import React from "react";

const MotionBox = motion(Box);
const MotionHeading = motion(Heading);
// const spring = {
//   type: "spring",
//   damping: 25,
//   stiffness: 200,
// };

export const ExploreCourses: React.FC = () => {
  const bg = useColorModeValue("white", "gray.900");
  const cardBg = useColorModeValue("white", "gray.800");
  const borderColor = useColorModeValue("gray.200", "whiteAlpha.300");
  const textPrimary = useColorModeValue("gray.900", "white");
  const textSecondary = useColorModeValue("gray.600", "gray.400");
  const brandRed = "#CF0000";
  const brandGold = "#E7A449";

  const degrees = [
    {
      title: "BSc Nursing in Malta with EU RN",
      values: ["Foundational knowledge", "Diverse fields", "Career-ready skills"],
    },
    {
      title: "Medicine and Surgery in Europe",
      values: ["Advanced depth", "Focused learning", "Industry-prepared"],
    },
    {
      title: "I.T Courses in Europe",
      values: ["Research-driven", "Academic rigor", "Postgraduate-ready"],
    },
    {
      title: "Health, Social Care and Wellbeing in England",
      values: ["Independent research", "Expert guidance", "Thesis development"],
    },
    {
      title: "MBA in Europe",
      values: ["Independent research", "Expert guidance", "Thesis development"],
    },
    {
      title: "BSc/Top-Up/MSc/PHD",
      values: ["Independent research", "Expert guidance", "Thesis development"],
    }
  ];

  return (
    <Box py={24} px={{ base: 6, lg: 24 }} bg={bg} color={textPrimary}>
      <Grid templateColumns={{ base: "1fr", lg: "0.6fr 1.4fr" }} gap={12}>
        {/* Left Enhancement */}
        <Flex
          direction="column"
          align="center"
          justify="center"
          bgGradient={`linear(to-b, ${brandRed} 0%, ${brandRed}70 100%)`}
          px={6}
          py={10}
          rounded="2xl"
          shadow="md"
        >
          <Icon as={FaGraduationCap} boxSize={12} color="white" mb={4} />
          <MotionHeading
            as="h1"
            fontSize="3xl"
            fontWeight="bold"
            color="white"
            letterSpacing="wide"
            textAlign="center"
            animate={{ y: [10, 0, 10] }}
            transition={{ repeat: Infinity, duration: 3 }}
          >
            Learn. Grow. Excel.
          </MotionHeading>
          <Text mt={4} fontSize="md" color="whiteAlpha.800" textAlign="center" maxW="xs">
            Empowering your academic journey through personalized pathways and global partnerships.
          </Text>
        </Flex>

        {/* Main Content */}
        <Box>
          <Box textAlign={{ base: "center", lg: "left" }} mb={12}>
            <Text
              fontSize="sm"
              textTransform="uppercase"
              color="gray.500"
              letterSpacing="wider"
              mb={2}
            >
              Academic Pathways
            </Text>
            <Heading
              fontSize={{ base: "2xl", md: "3xl" }}
              color={brandGold}
              fontWeight="semibold"
              mb={4}
              lineHeight="shorter"
            >
              Explore Your Future with Us
            </Heading>
            <Text fontSize="md" color={textSecondary} maxW="xl">
              We offer a wide range of degree programs tailored to your goals. 
              Our counseling sessions help match students with the right academic path—
              whether it's an undergraduate, postgraduate, or research degree.
            </Text>
          </Box>

          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
            {degrees.map((degree, index) => (
              <MotionBox
                key={index}
                bg={cardBg}
                p={6}
                rounded="2xl"
                border="1px solid"
                borderColor={borderColor}
                shadow="sm"
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.2 }}
                whileHover={{
                  scale: 1.03,
                  shadow: "lg",
                  transition: { duration: 0.3 },
                }}
              >
                <Heading fontSize="xl" fontWeight="semibold" mb={4} color={brandGold}>
                  {degree.title}
                </Heading>
                <Box mb={4}>
                  {degree.values.map((val, i) => (
                    <Text key={i} fontSize="sm" color={textSecondary} mb={2}>
                      <Icon
                        as={FaCheck}
                        color={brandRed}
                        mr={2}
                        fontSize="sm"
                        verticalAlign="middle"
                      />
                      {val}
                    </Text>
                  ))}
                </Box>
                <Button
                  size="sm"
                  rightIcon={<FaArrowRight />}
                  colorScheme="red"
                  bg={brandRed}
                  _hover={{ bg: "#b00000" }}
                  as={Link}
                  href="/services/student-counselling"
                  mt={2}
                >
                  Talk to a Counselor
                </Button>
              </MotionBox>
            ))}
          </SimpleGrid>
        </Box>
      </Grid>
    </Box>
  );
};
