import {
    Box,
    Heading,
    Text,
    VStack,
    SimpleGrid,
    useColorModeValue,
    Divider,
  } from "@chakra-ui/react";
  import React from "react";
  import { ContactBanner } from "../components/Contact/Banner";
  import { Footer } from "../navigation/Footer";
  import { ContactInfo } from "../components/Contact/ContactInfo";
  import { ContactForm } from "../components/Forms/ContactForm";
  import { motion } from "framer-motion";
  
  const MotionBox = motion(Box);
  
  const Contact: React.FC = () => {
    const bg = useColorModeValue("#ffffff", "#1a1a1a");
    const sectionBg = useColorModeValue("#f9f9f9", "#121212");
    const textColor = useColorModeValue("#222222", "#eaeaea");
    const borderColor = useColorModeValue("#e2e2e2", "#333");
  
    return (
      <Box bg={bg}>
        <ContactBanner />
  
        <Box py={[12, 20]} px={[4, 6, 10]} maxW="7xl" mx="auto">
          <VStack spacing={16} align="stretch">
            <MotionBox
              textAlign="center"
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
            >
              <Heading
                size="2xl"
                fontFamily="Georgia, serif"
                fontWeight="normal"
                color={textColor}
                mb={4}
              >
                Get in Touch
              </Heading>
              <Text fontSize="lg" color={textColor} maxW="2xl" mx="auto" lineHeight="taller">
                We’d love to hear from you. Reach out with questions, feedback, or just to say hello.
              </Text>
              <Divider mt={6} borderColor={borderColor} maxW="100px" mx="auto" />
            </MotionBox>
  
            <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
              <MotionBox
                bg={sectionBg}
                p={[6, 8]}
                border="1px solid"
                borderColor={borderColor}
                borderRadius="lg"
                initial={{ opacity: 0, x: -20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ContactInfo />
              </MotionBox>
  
              <MotionBox
                bg={sectionBg}
                p={[6, 8]}
                border="1px solid"
                borderColor={borderColor}
                borderRadius="lg"
                initial={{ opacity: 0, x: 20 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.6 }}
              >
                <ContactForm />
              </MotionBox>
            </SimpleGrid>
          </VStack>
        </Box>
  
        <Footer />
      </Box>
    );
  };
  
  export default Contact;
  