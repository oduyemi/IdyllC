import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { StudentCounsellingForm } from "../components/Forms/Counselling";
import { motion } from 'framer-motion';

const MotionBox = motion(Box);




const StudentCounselling: React.FC = () => {
    return(
        <Box>
            <MotionBox
                position="relative"
                py={28}
                px={{ base: 6, md: 16 }}
                textAlign="center"
                color="white"
                bgImage={`url(${require('../assets/images/studentgroup.jpg')})`}
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
                    Student Counselling
                    </Heading>
                    <Text fontSize="lg" color="gray.300">
                        We are committed to guiding students on their academic journeys by offering expert counselling, global admissions support, and dedicated care.
                    </Text>
                </Box>
            </MotionBox>
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
        </Box>
    )
}

export default StudentCounselling;