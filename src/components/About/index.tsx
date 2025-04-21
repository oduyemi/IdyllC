import { Box, Heading, Text, Stack, SimpleGrid, Image, useColorModeValue, Divider } from "@chakra-ui/react";
import { motion } from "framer-motion";

const MotionBox = motion(Box);

export const AboutSection = () => {
  const textColor = useColorModeValue("gray.800", "gray.200");
  const accentColor = useColorModeValue("gray.600", "gray.400");
  const borderColor = useColorModeValue("gray.200", "gray.700");

  return (
    <Box py={16} px={{ base: 4, md: 20 }}>
      <Stack spacing={12}>
        <MotionBox
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
        >
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
            <Box>
              <Heading size="2xl" color={textColor} mb={4}>
                About Idyll Consults
              </Heading>
              <Text fontSize="lg" color={accentColor}>
                At Idyll Consults, we believe in creating a worthwhile service through accurate information, ethical recruitment, and meaningful student support. Our mission is to empower students globally by connecting them with the right educational opportunities.
              </Text>
            </Box>
            <Image src={require("../../assets/images/allied1.jpg")} alt="Global students" borderRadius="2xl" />
          </SimpleGrid>
        </MotionBox>

        <Divider borderColor={borderColor} />
      </Stack>
    </Box>
  );
};

