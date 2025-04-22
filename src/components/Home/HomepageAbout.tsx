import { Box, Image, Text, Heading, Flex, Icon } from "@chakra-ui/react";
import React from "react";
import { PhoneIcon } from "@chakra-ui/icons";
import homeAbout from "../../assets/images/homeAbout.jpg";
import facts from "../../assets/images/facts.jpg";

export const HomepageAbout: React.FC = () => {
  return (
    <Box py={16} px={{ base: 4, md: 8 }}>
      <Flex
        flexDirection={{ base: "column", lg: "row" }}
        gap={10}
        align="stretch"
      >
        {/* Left Column */}
        <Box flex="1">
          <Heading
            as="h2"
            fontSize="2xl"
            mb={4}
            textTransform="uppercase"
            color="#E7A449"
          >
            About Us
          </Heading>

          <Text fontSize="xl" fontWeight="medium" mb={4} color="gray.600">
            Your educational journey becomes our shared success
          </Text>

          <Text mb={6} color="gray.700" lineHeight="1.8">
            Idyll Consults is committed to{" "}
            <Text as="span" fontWeight="bold" color="#CF0000">
              transforming the international student journey
            </Text>{" "}
            by offering comprehensive support—from visa assistance to
            accommodation arrangements. We prioritize ethical recruitment,
            transparency, and personalized guidance, treating every student as
            part of our extended family.
            <br />
            <br />
            With a focus on inclusivity and a student-centric approach, we stay
            connected with students beyond admission, ensuring they succeed
            academically and personally.{" "}
            <Text as="span" fontWeight="bold" color="#CF0000">
              Our services are 100% free for admission processing
            </Text>
            , making education accessible to all. At Idyll Consults, your
            educational success is our priority!
          </Text>

          {[
            "Expert guidance for studying in the UK, Canada, and more",
            "Visa support, accommodation help, and post-arrival check-ins",
            "100% free admission processing",
          ].map((item, idx) => (
            <Text key={idx} fontWeight="medium" color="gray.700" mb={2}>
              — {item}
            </Text>
          ))}

          <Flex
            mt={8}
            p={5}
            border="1px solid #E2E8F0"
            borderRadius="md"
            align="center"
            gap={4}
          >
            <Box
              p={2}
              borderRadius="full"
              border="1px solid #CF0000"
              display="flex"
              alignItems="center"
              justifyContent="center"
            >
              <Icon as={PhoneIcon} w={6} h={6} color="#E7A449" />
            </Box>
            <Box>
              <Text fontSize="md" color="gray.500">
                Support 24/7
              </Text>
              <Text fontSize="lg" fontWeight="medium" color="gray.700">
                +234 706 220 3392
              </Text>
              <Text fontSize="lg" fontWeight="medium" color="gray.700">
                +234 808 369 5430
              </Text>
            </Box>
          </Flex>
        </Box>

        {/* Right Column */}
        <Box flex="1" position="relative" minH={{ base: "300px", md: "500px" }}>
          <Image
            src={homeAbout}
            alt="Student receiving admission support from Idyll Consults"
            objectFit="cover"
            width="100%"
            height="100%"
            position="absolute"
            top={0}
            left={0}
            borderRadius="md"
            filter="grayscale(30%) brightness(80%) contrast(110%)"
          />
          <Image
            src={facts}
            alt="Happy students studying abroad with Idyll Consults"
            objectFit="cover"
            width="50%"
            height="50%"
            position="absolute"
            bottom={0}
            left={0}
            bg="white"
            p={2}
            borderRadius="md"
            filter="grayscale(30%) brightness(80%) contrast(110%)"
          />
        </Box>
      </Flex>
    </Box>
  );
};
