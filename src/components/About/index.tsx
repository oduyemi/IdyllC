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
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10} alignItems="center">
          <MotionBox
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Heading size="2xl" color="#E7A449" mb={4} textAlign={{ base: "center", md: "left" }}>
              About Idyll Consults
            </Heading>
            <Text fontSize="lg" color={accentColor} textAlign={{ base: "center", md: "left" }}>
              At Idyll Consults, we believe in creating a worthwhile service through accurate information, ethical recruitment, and meaningful student support. Our mission is to empower students globally by connecting them with the right educational opportunities.
            </Text>
          </MotionBox>

          <MotionBox
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            viewport={{ once: true }}
          >
            <Image
              src={require("../../assets/images/workers.jpg")}
              alt="Global students"
              borderRadius="2xl"
              shadow="lg"
            />
          </MotionBox>
        </SimpleGrid>

        <Divider borderColor={borderColor} />
      </Stack>
    </Box>
  );
};
