import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { CareerCounsellingForm } from "../components/Forms/Counselling";
import { motion } from 'framer-motion';

const MotionBox = motion(Box);




const CareerCounselling: React.FC = () => {
    return(
        <Box>
            <MotionBox
                position="relative"
                py={28}
                px={{ base: 6, md: 16 }}
                textAlign="center"
                color="white"
                bgImage={`url(${require('../assets/images/worker3.jpg')})`}
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
                    Career Counselling
                    </Heading>
                    <Text fontSize="lg" color="gray.300">
                        We help you navigate your career path with personalized guidance and support.
                        Our expert team is dedicated to helping you identify your strengths, explore career options, and develop a roadmap for success.
                    </Text>
                </Box>
            </MotionBox>
            <Box maxW="2xl" mx="auto" px={6} py={12}>
                <Heading as="h1" fontSize="3xl" mb={6} fontWeight="bold" color="#E7A449" textAlign="center">
                    Navigate Your Career Journey Better
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
        </Box>
    )
}

export default CareerCounselling;