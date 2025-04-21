import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../navigation/Footer";
import { ServicesBanner } from "../components/Services/Banner";
import { CareerCounsellingForm } from "../components/Forms/Counselling";





const CareerCounselling: React.FC = () => {
    return(
        <Box>
            <ServicesBanner />
            <Box maxW="2xl" mx="auto" px={6} py={12}>
                <Heading as="h1" fontSize="3xl" mb={6} fontWeight="bold" textAlign="center">
                    Navigate your career journey better
                </Heading>
                <Text fontSize="lg" lineHeight="1.6" textAlign="center" color="gray.600">
                    Our career counselling services focus on transforming your international education into a
                    successful career. We’ll help you stay ahead in a competitive world by providing insights,
                    strategies, and support to turn your global experience into long-term professional growth.
                </Text>
            </Box>
            <Box className="my-6">
                <CareerCounsellingForm />
            </Box>
            <Footer />
        </Box>
    )
}

export default CareerCounselling;