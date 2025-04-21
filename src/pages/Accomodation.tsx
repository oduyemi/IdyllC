import { Box, Text, Heading } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../navigation/Footer";
import { ServicesBanner } from "../components/Services/Banner";
import { AccomodationAssistanceForm } from "../components/Forms/Applications";

const Accomodation: React.FC = () => {
    return (
        <Box bg="white" color="black" fontFamily="sans-serif">
            <ServicesBanner />
            <Box maxW="2xl" mx="auto" px={6} py={12}>
                <Heading as="h1" fontSize="3xl" mb={6} fontWeight="bold" textAlign="center">
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
