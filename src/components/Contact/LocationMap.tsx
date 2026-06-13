import {
    Box,
    Heading,
    useColorModeValue
    // useTheme,
    // useBreakpointValue,
  } from '@chakra-ui/react';
  import { motion } from 'framer-motion';
  import React from 'react';
  
  const MotionBox = motion(Box);
  
export const LocationMap: React.FC = () => {
    const bg = useColorModeValue('gray.50', 'gray.900');
    const cardBg = useColorModeValue('white', 'gray.800');
    const borderColor = useColorModeValue('#cf0000', '#e7a449');
    const float = {
      y: [0, -4, 0],
      transition: {
        duration: 4,
        ease: 'easeInOut',
        repeat: Infinity,
      },
    };
  
    return (
      <Box as="section" py={16} px={4} bg={bg}>
        <MotionBox
          maxW="6xl"
          mx="auto"
          px={[4, 6, 8]}
          py={[4, 8]}
          bg={cardBg}
          borderRadius="2xl"
          boxShadow="lg"
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ delay: 0.2, duration: 0.6, ease: 'easeOut' }}
          >
            <Heading
              as="h2"
              mb={8}
              textAlign="center"
              bgGradient="linear(to-r, #cf0000, #e7a449)"
              bgClip="text"
              fontWeight="extrabold"
              fontSize={['2xl', '3xl', '4xl']}
            >
              Visit Our Office
            </Heading>
          </motion.div>
  
          <motion.div
            className="rounded-2xl overflow-hidden"
            animate={float}
          >
            <Box
              w="full"
              h={['300px', '400px', '450px']}
              border="4px solid"
              borderColor={borderColor}
              borderRadius="2xl"
              overflow="hidden"
              transition="transform 0.3s ease, box-shadow 0.3s ease"
              _hover={{
                transform: 'scale(1.01)',
                boxShadow: `0 0 20px ${borderColor}`,
              }}
            >
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.3517269733356!2d3.348852074947899!3d6.603139322232863!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b935c891f1785%3A0x61fb37e6299fd8a1!2sIDYLL%20Consults%20International!5e0!3m2!1sen!2sng!4v1745485431254!5m2!1sen!2sng"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                loading="lazy"
                allowFullScreen
                referrerPolicy="no-referrer-when-downgrade"
              ></iframe>
            </Box>
          </motion.div>
        </MotionBox>
      </Box>
    );
};
  