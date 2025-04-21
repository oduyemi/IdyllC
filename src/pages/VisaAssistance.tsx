import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../navigation/Footer";
import { ServicesBanner } from "../components/Services/Banner";
import { VisaAssistanceForm } from "../components/Forms/Applications";





const VisaAssistance: React.FC = () => {
    return(
        <Box>
            <ServicesBanner />
            <Box maxW="2xl" mx="auto" px={6} py={12}>
                <Heading as="h1" fontSize="3xl" mb={6} fontWeight="bold" textAlign="center">
                    Secure your visa without hassle
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