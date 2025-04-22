import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

export const AboutBanner: React.FC = () => {
  return (
    <MotionBox
      position="relative"
      py={28}
      px={{ base: 6, md: 16 }}
      textAlign="center"
      color="white"
      bgImage={`url(${require('../../assets/images/worker1.jpg')})`}
      bgSize="cover"
      bgRepeat="no-repeat"
      sx={{ backgroundPositionY: "25%" }}
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
          About Us
        </Heading>
        <Text fontSize="lg" color="gray.300">
          Excellence is not just a goal; it's our commitment. We are dedicated to providing the highest quality services to help you achieve your dreams.
          Our team of experts is here to guide you every step of the way, ensuring that you have the support and resources you need to succeed.
        </Text>
      </Box>
    </MotionBox>
  );
};
