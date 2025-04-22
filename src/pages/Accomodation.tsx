import { Box, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../navigation/Footer";
import { ServicesBanner } from "../components/Services/Banner";
import { AccomodationAssistanceForm } from "../components/Forms/Applications";
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const Accomodation: React.FC = () => {
    return (
        <Box bg="white" color="black" fontFamily="sans-serif">
            <MotionBox
                position="relative"
                py={28}
                px={{ base: 6, md: 16 }}
                textAlign="center"
                color="white"
                bgImage={`url(${require('../assets/images/house.jpg')})`}
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
                    Accomodation Assistance
                    </Heading>
                    <Text fontSize="lg" color="gray.300">
                    We are committed to guiding students on their academic journeys by offering expert counselling, global admissions support, and dedicated care.
                    </Text>
                </Box>
            </MotionBox>
            
            <Box maxW="2xl" mx="auto" px={6} py={12}>
                <Heading as="h1" fontSize="3xl" mb={6} color="#E7A449" fontWeight="bold" textAlign="center">
                    Your Perfect Home Abroad Awaits
                </Heading>
                <Text fontSize="lg" lineHeight="1.6" textAlign="center" color="gray.600">
                    Finding the right place to live is key to a great study-abroad experience. We connect you
                    with safe, comfortable housing options that fit your budget and lifestyle. From booking
                    processes to lease agreements and understanding utility costs, we’ll guide you so you can
                    focus on settling in and making the most of your time abroad.
                </Text>
            </Box>

            {/* Form Section */}
            <Box className="my-6">
                <AccomodationAssistanceForm />
            </Box>

            <Footer />
        </Box>
    );
};

export default Accomodation;
