import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../navigation/Footer";
import { ServicesBanner } from "../components/Services/Banner";
import { StudentCounsellingForm } from "../components/Forms/Counselling";
import { motion } from 'framer-motion';

const MotionBox = motion(Box);




const StudentCounselling: React.FC = () => {
    return(
        <Box>
            <ServicesBanner />
            <Box maxW="2xl" mx="auto" px={6} py={12}>
                <Heading as="h1" fontSize="3xl" mb={6} fontWeight="bold" color="#e7a449" textAlign="center">
                    Make The Best Decisions For Your Future
                </Heading>
                <Text fontSize="lg" lineHeight="1.6" textAlign="center" color="gray.600">
                    Whether you're unsure about which country to choose or need guidance on balancing
                    studies with life abroad, our experienced counsellors are here to listen to your dreams and
                    concerns. We’ll help clarify your academic goals, boost your confidence, and guide you
                    toward a program that aligns with your passions.
                </Text>
            </Box>
            <Box className="my-6">
                <StudentCounsellingForm />
            </Box>
            <Footer />
        </Box>
    )
}

export default StudentCounselling;