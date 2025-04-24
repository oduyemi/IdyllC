import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { FlightReservationForm } from "../components/Forms/Applications";
import { motion } from 'framer-motion';

const MotionBox = motion(Box);




const Reservations: React.FC = () => {
    return(
        <Box>
            <MotionBox
                            position="relative"
                            py={28}
                            px={{ base: 6, md: 16 }}
                            textAlign="center"
                            color="white"
                            bgImage={`url(${require('../assets/images/flight.jpg')})`}
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
                                Flight Reservation
                                </Heading>
                                <Text fontSize="lg" color="gray.300">
                                    We provide expert guidance to help you navigate the flight reservation process smoothly and efficiently.
                                    Our team is dedicated to ensuring you have all the necessary documents and information to secure your flight without any hassle.
                                </Text>
                            </Box>
                        </MotionBox>
            <Box maxW="2xl" mx="auto" px={6} py={12}>
                <Heading as="h1" fontSize="3xl" mb={6} fontWeight="bold" color="#E7A449" textAlign="center">
                    Leave The Heavy-lifting to us
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
        </Box>
    )
}

export default Reservations;