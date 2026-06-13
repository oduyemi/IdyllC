import {
    Box,
    Heading,
    Text,
    Flex,
    Image,
    VStack,
    Divider,
    Button,
    useDisclosure,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalCloseButton,
    ModalBody,
    Icon,
  } from '@chakra-ui/react';
  import { motion } from 'framer-motion';
  import { MdLocationOn } from 'react-icons/md';
  
  const MotionFlex = motion(Flex);
  
export const PortHarcourtAddress: React.FC = () => {
    const { isOpen, onOpen, onClose } = useDisclosure();
  
    return (
      <Box as="section" py={[16, 20]} px={[4, 8]} bg="#fff">
        <MotionFlex
          direction={['column', 'row']}
          align="center"
          justify="center"
          maxW="6xl"
          mx="auto"
          borderRadius="2xl"
          overflow="hidden"
          bg="#fff"
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          {/* Image Section */}
          <Box flex="1" w="full">
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.6 }}
            >
              <Image
                src={require('../../assets/images/ph.jpg')}
                alt="Port Harcourt Office"
                objectFit="cover"
                h="100%"
                maxH={['250px', '400px']}
                w="full"
              />
            </motion.div>
          </Box>
  
          {/* Text Content */}
          <Box flex="1" py={[8, 12]} px={[6, 10]} bg="#fff">
            <VStack align="start" spacing={6}>
              <Flex align="center" gap={2}>
                <Icon as={MdLocationOn} color="#cf0000" w={6} h={6} />
                <Heading
                  fontSize={['2xl', '3xl']}
                  lineHeight="shorter"
                  color="#e7a449"
                  fontWeight="bold"
                >
                  Port Harcourt Office
                </Heading>
              </Flex>
  
              <Divider borderColor="#cf0000" w="12" borderWidth={2} />
  
              <Text fontSize="lg" color="gray.600">
                <strong>Address:</strong>
              </Text>
              <Text fontSize="xl" fontWeight="medium" color="gray.800">
                No. 245 Aba Road, Port Harcourt, <br />
                Rivers State, Nigeria
              </Text>
  
              <Button
                mt={4}
                bg="#cf0000"
                color="#fff"
                size="md"
                _hover={{
                  bg: '#b80000',
                  transform: 'scale(1.05)',
                  transition: 'transform 0.2s ease-in-out',
                }}
                onClick={onOpen}
              >
                Locate Us
              </Button>
            </VStack>
          </Box>
        </MotionFlex>
  
        {/* Map Modal */}
        <Modal isOpen={isOpen} onClose={onClose} size="4xl" isCentered>
          <ModalOverlay />
          <ModalContent bg="#fff" transition="transform 0.3s ease-out">
            <ModalHeader color="#e7a449">Our Port Harcourt Office</ModalHeader>
            <ModalCloseButton color="#cf0000" />
            <ModalBody p={0}>
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3970.0361482836713!2d7.008274374934899!3d4.832245440864413!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x1069cb1239c139f1%3A0xf8724a8e3e7509aa!2s245%20Aba%20Rd%2C%20Rumuola%2C%20Port%20Harcourt%2C%20Rivers!5e0!3m2!1sen!2sng!4v1713976458966!5m2!1sen!2sng"
                width="100%"
                title="Port Harcourt Office Location"
                height="450"
                style={{ border: 0 }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </ModalBody>
          </ModalContent>
        </Modal>
      </Box>
    );
};
  