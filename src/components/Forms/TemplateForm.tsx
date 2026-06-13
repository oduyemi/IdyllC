import React from 'react';
import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Input,
  Select,
  Textarea,
  VStack,
  Heading,
  useBreakpointValue,
  // FormErrorMessage,
} from '@chakra-ui/react';
import { motion } from 'framer-motion';

const MotionBox = motion(Box);

const fadeIn = {
  initial: { opacity: 0, y: 30 },
  whileInView: { opacity: 1, y: 0 },
  transition: { duration: 0.6, ease: 'easeOut' },
  viewport: { once: true },
};

export const MonochromeForm: React.FC<{ title: string; fields: any[] }> = ({ title, fields }) => {
  return (
    <MotionBox
      {...fadeIn}
      maxW="3xl"
      mx="auto"
      py={16}
      px={{ base: 6, md: 10 }}
      bg="white"
      border="1px solid black"
      borderRadius="2xl"
      color="black"
      boxShadow="lg"
    >
      <Heading
        fontSize={useBreakpointValue({ base: '2xl', md: '3xl' })}
        mb={10}
        textAlign="center"
        fontWeight="medium"
        letterSpacing="tight"
        color="#e7a449"
      >
        {title}
      </Heading>
      <VStack spacing={6} as="form">
        {fields.map((field, idx) => (
          <FormControl key={idx} isRequired>
            <FormLabel
              fontWeight="semibold"
              textTransform="uppercase"
              fontSize="sm"
              letterSpacing="wide"
            >
              {field.label}
            </FormLabel>

            {field.type === 'textarea' ? (
              <Textarea
                placeholder={field.label}
                borderColor="black"
                borderRadius="md"
                _focus={{ borderColor: 'black', boxShadow: 'none' }}
                _hover={{ borderColor: 'black' }}
              />
            ) : field.type === 'select' ? (
              <Select
                placeholder={`Select ${field.label}`}
                borderColor="black"
                borderRadius="md"
                _focus={{ borderColor: 'black', boxShadow: 'none' }}
                _hover={{ borderColor: 'black' }}
              >
                {field.options.map((opt: string, i: number) => (
                  <option key={i} value={opt} style={{ color: 'black' }}>
                    {opt}
                  </option>
                ))}
              </Select>
            ) : field.type === 'date' ? (
              <Input
                type="date"
                placeholder={field.label}
                borderColor="black"
                borderRadius="md"
                _focus={{ borderColor: 'black', boxShadow: 'none' }}
                _hover={{ borderColor: 'black' }}
              />
            ) : (
              <Input
                type={field.type}
                placeholder={field.label}
                borderColor="black"
                borderRadius="md"
                _focus={{ borderColor: 'black', boxShadow: 'none' }}
                _hover={{ borderColor: 'black' }}
              />
            )}
            {/* Optional: Add Form Error message here */}
            {/* <FormErrorMessage>{error}</FormErrorMessage> */}
          </FormControl>
        ))}
        <Button
          type="submit"
          mt={4}
          bg="#CF0000"
          color="white"
          borderRadius="md"
          px={8}
          py={6}
          fontWeight="medium"
          _hover={{ bg: 'red.800' }}
          w="full"
        >
          Submit
        </Button>
      </VStack>
    </MotionBox>
  );
};
