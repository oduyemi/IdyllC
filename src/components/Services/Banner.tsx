import React from 'react';
import { Box, Heading, Text } from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);


export const ServicesBanner: React.FC = () => {
  return (
      <MotionBox
        position="relative"
        py={28}
        px={{ base: 6, md: 16 }}
        textAlign="center"
        color="white"
        bgImage={`url(${require('../../assets/images/worker2b.jpg')})`}
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
            Services
          </Heading>
          <Text fontSize="lg" color="gray.300">
            We are committed to guiding students on their academic journeys by offering expert counselling, global admissions support, and dedicated care.
          </Text>
        </Box>
      </MotionBox>
  );
};
