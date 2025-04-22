import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../navigation/Footer";
import { ServicesBanner } from "../components/Services/Banner";
import { VisaAssistanceForm } from "../components/Forms/Applications";
import { motion } from 'framer-motion';

const MotionBox = motion(Box);




const VisaAssistance: React.FC = () => {
    return(
        <Box>
            <MotionBox
                position="relative"
                py={28}
                px={{ base: 6, md: 16 }}
                textAlign="center"
                color="white"
                bgImage={`url(${require('../assets/images/visa2.jpg')})`}
                bgSize="cover"
                bgRepeat="no-repeat"
                sx={{ backgroundPositionY: "45%" }}
                initial={{ opacity: 0, y: 40 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.8 }}
                _before={{
                    content: '""',
                    position: 'absolute',
                    inset: 0,
                    bg: 'blackAlpha.700',
                }}
                >
                <Box position="relative" zIndex={1} maxW="3xl" mx="auto">
                    <Heading
                    as="h1"
                    size="2xl"
                    fontWeight="medium"
                    fontFamily="Georgia, serif"
                    mb={4}
                    >
                    Visa Assistance
                    </Heading>
                    <Text fontSize="lg" color="gray.300">
                        We provide expert guidance to help you navigate the visa process smoothly and efficiently.
                        Our team is dedicated to ensuring you have all the necessary documents and information to secure your visa without any hassle.
                    </Text>
                </Box>
            </MotionBox>
            <Box maxW="2xl" mx="auto" px={6} py={12}>
                <Heading as="h1" fontSize="3xl" mb={6} fontWeight="bold" color="#e7a449" textAlign="center">
                    Secure Your Visa Without Hassle
                </Heading>
                <Text fontSize="lg" lineHeight="1.6" textAlign="center" color="gray.600">
                    Navigating visa requirements can be tricky, but our step-by-step support makes it easier.
                    We provide up-to-date information on visa types (such as the UK’s Student Visa),
                    application forms, financial proof, and interview preparation. Our team double-checks your
                    documents to avoid delays and keeps you updated on processing times. The result? You’ll
                    be fully prepared to step onto campus with confidence and peace of mind.
                </Text>
            </Box>
            <Box className="my-6">
                <VisaAssistanceForm />
            </Box>
            <Footer />
        </Box>
    )
}

export default VisaAssistance;