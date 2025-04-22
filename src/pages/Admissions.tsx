import { Box, Heading, Text } from "@chakra-ui/react";
import React from "react";
import { Footer } from "../navigation/Footer";
import { ServicesBanner } from "../components/Services/Banner";
import { AdmissionForm } from "../components/Forms/Applications";
import { motion } from 'framer-motion';

const MotionBox = motion(Box);




const Admissions: React.FC = () => {
    return(
        <Box>
            <MotionBox
                    position="relative"
                    py={28}
                    px={{ base: 6, md: 16 }}
                    textAlign="center"
                    color="white"
                    bgImage={`url(${require('../assets/images/admissions.jpg')})`}
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
                        Admissions
                      </Heading>
                      <Text fontSize="lg" color="gray.300">
                        We provide expert guidance to help you navigate the admissions process smoothly and efficiently.
                        Our team is dedicated to ensuring you have all the necessary documents and information to secure your admission without any hassle.
                      </Text>
                    </Box>
                  </MotionBox>

            <Box maxW="2xl" mx="auto" px={6} py={12}>
                <Heading as="h1" fontSize="3xl" mb={6} color="#E7A449" fontWeight="bold" textAlign="center">
                    Secure Your Admission Today
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