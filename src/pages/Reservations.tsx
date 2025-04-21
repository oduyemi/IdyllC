import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../navigation/Footer";
import { ServicesBanner } from "../components/Services/Banner";
import { AdmissionForm, FlightReservationForm } from "../components/Forms/Applications";





const Reservations: React.FC = () => {
    return(
        <Box>
            <ServicesBanner />
            <Box maxW="2xl" mx="auto" px={6} py={12}>
                <Heading as="h1" fontSize="3xl" mb={6} fontWeight="bold" textAlign="center">
                    Leave the heavy-lifting to us
                </Heading>
                <Text fontSize="lg" lineHeight="1.6" textAlign="center" color="gray.600">
                    Our flight reservation service takes the stress out of travel planning. We help you find
                    affordable flights, create flexible itineraries, and book tickets that align with your program
                    start date and visa requirements—so you can begin your journey smoothly.
                </Text>
            </Box>
            <Box className="my-6">
                <FlightReservationForm />
            </Box>
            <Footer />
        </Box>
    )
}

export default Reservations;