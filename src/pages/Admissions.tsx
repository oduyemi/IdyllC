import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../navigation/Footer";
import { ServicesBanner } from "../components/Services/Banner";
import { AdmissionForm } from "../components/Forms/Applications";





const Admissions: React.FC = () => {
    return(
        <Box>
            <ServicesBanner />
            <Box maxW="2xl" mx="auto" px={6} py={12}>
                <Heading as="h1" fontSize="3xl" mb={6} fontWeight="bold" textAlign="center">
                    Secure your admission today
                </Heading>
                <Text fontSize="lg" lineHeight="1.6" textAlign="center" color="gray.600">
                    Applying to universities abroad can feel overwhelming, but we’re here to simplify the
                    process. We guides you through every step: finding the right program, crafting standout
                    personal statements, gathering documents, and meeting deadlines. We match your
                    academic background and goals with the best-fit schools in your preferred study
                    destinations. Our goal is to reduce stress, streamline the process, and maximise your
                    chances of receiving that acceptance letter.
                </Text>
            </Box>

            <Box className="my-6">
                <AdmissionForm />
            </Box>
            <Footer />
        </Box>
    )
}

export default Admissions;