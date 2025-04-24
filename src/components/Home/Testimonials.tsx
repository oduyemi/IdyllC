import React from "react";
import Slider from "react-slick";
import { Box, Text, Heading, Avatar, Flex, useColorModeValue } from "@chakra-ui/react";
import Precious from "../../assets/images/precious.jpeg";
import John from "../../assets/images/john.jpeg";
import MP from "../../assets/images/mp.jpg";
import Chioma from "../../assets/images/chioma.jpg";
import Oluchi from "../../assets/images/oluchi.jpg";


const testimonials = [
  {
    name: "Ojemaye P. Onyeka",
    text: "Our experience with Idyll Consult was one of a kind! I highly recommend working with the Idyll Consults. My application was processed, and I was super relaxed throughout the entire process.",
    image: Precious,
    university: "Niagara University, Canada",
  },
  {
    name: "Mmezi Precious",
    text: "I am impressed with this agency’s professional approach and their efficient staff. They completed my application on time and helped with my flight and even bus itinerary. I highly recommend them.",
    image: MP,
    university: "University of Windsor, Canada",
  },
  {
    name: "Ibekwe John",
    text: "Idyll Consults is the best company for studying abroad in Nigeria. I highly recommend them.",
    image: John,
    university: "University of East London (UK)",
  },
  {
    name: "CHIOMA UZOH",
    text: "I 100% recommend Idyll Consults and Allied Ltd. They handled my application professionally and made sure that my trust in them was not in futility",
    image: Chioma,
    university: "FDU VANCOUVER",
  },
  {
    name: "Oluchi Emmanuella Agwunobi",
    text: "Mr Jude of Idyll Consults was the driving force behind my successful application to study Nursing in Scotland. The team was very professional professional and the whole process was very smooth from start to finish. I strongly recommend this agency to anyone wishing to study abroad.",
    image: Oluchi,
    university: "GCU Scotland",
  },
];

const settings = {
  dots: false,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,
  autoplaySpeed: 3000,
  arrows: false,
  fade: true,
};

export const TestimonialSlider: React.FC = () => {
  const textColor = useColorModeValue("black", "white");
  const bgColor = useColorModeValue("white", "gray.900");
  const borderColor = useColorModeValue("gray.300", "gray.700");

  return (
    <Box py={20} px={4} bg={bgColor} color={textColor} maxW="6xl" mx="auto">
      <Heading textAlign="center" fontSize="3xl" mb={8} color="#E7A449">
        What Students Say
      </Heading>
      <Slider {...settings}>
        {testimonials.map((testimonial, index) => (
          <Box key={index} px={6}>
            <Flex
              direction="column"
              align="center"
              bg="transparent"
              p={10}
              borderRadius="xl"
              boxShadow="none"
              border="1px solid"
              borderColor={borderColor}
              maxW="xl"
              mx="auto"
            >
              <Avatar
                size="xl"
                name={testimonial.name}
                src={testimonial.image}
                mb={6}
                border="2px solid"
                borderColor={borderColor}
              />
              <Text fontSize="lg" fontStyle="italic" color={textColor} mb={4}>
                "{testimonial.text}"
              </Text>
              <Box textAlign="center">
                <Text fontWeight="bold" color={textColor}>
                  {testimonial.name}
                </Text>
                <Text fontSize="sm" color={textColor} opacity={0.7}>
                  {testimonial.university}
                </Text>
              </Box>
            </Flex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
