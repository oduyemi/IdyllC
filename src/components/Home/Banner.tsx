import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Box, Heading, Text, Button, Flex, Image } from "@chakra-ui/react";
import { Link as RouterLink } from "react-router-dom";
import { motion } from "framer-motion";

import home1 from "../../assets/images/home1.jpg";
import home2 from "../../assets/images/home2.jpg";

// const MotionBox = motion(Box);
const MotionText = motion(Text);
const MotionHeading = motion(Heading);
const MotionFlex = motion(Flex);

export const Banner: React.FC = () => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 500,
    arrows: false,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 4000,
    pauseOnHover: true,
  };

  const overlayBg = "rgba(0, 0, 0, 0.65)";

  const buttonStyles = {
    variant: "outline",
    bg: "#CF0000",
    color: "#fff",
    borderColor: "#CF0000",
    _hover: {
        background: "transparent",
      borderColor: "#CF0000",
      color: "#CF0000",
    },
    borderRadius: "full",
    fontWeight: "medium",
    px: 6,
    py: 5,
  };

  const slides = [
    {
      img: home1,
      subheading: "Admission is FREE",
      heading: "Secure Your Admission Free of Charge",
      text: "We believe that no one should pay to be admitted. Aside from any university application fees, our services are absolutely free.",
      btn1Link: "/services/admissions",
      btn2Link: "/about",
    },
    {
      img: home2,
      subheading: "Visa Assistance",
      heading: "Smooth Visa Assistance for Every Journey",
      text: "Whether it's business, study, or leisure, we make your visa application process seamless and worry-free.",
      btn1Link: "/services/visa-assistance",
      btn2Link: "/about",
    },
  ];

  return (
    <Box className="banner" bg="black">
      <Slider {...settings}>
        {slides.map((slide, idx) => (
          <Box key={idx} position="relative">
            <Image
              src={slide.img}
              alt={slide.heading}
              width="100%"
              maxHeight={500}
              objectFit="cover"
              filter="grayscale(30%) brightness(80%) contrast(110%)"
            />
            <MotionFlex
              position="absolute"
              top="0"
              left="0"
              width="100%"
              height="100%"
              align="center"
              justify="center"
              bg={overlayBg}
              px={6}
              zIndex={1}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1 }}
            >
              <Box maxW="3xl" textAlign="center">
                <MotionText
                  textTransform="uppercase"
                  letterSpacing={3}
                  fontSize="sm"
                  color="gray.100"
                  mb={2}
                  initial={{ y: 20, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.3 }}
                >
                  {slide.subheading}
                </MotionText>

                <MotionHeading
                  fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
                  color="white"
                  fontWeight="extrabold"
                  mb={4}
                  lineHeight={1.2}
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.5 }}
                >
                  {slide.heading}
                </MotionHeading>

                <MotionText
                  fontSize={{ base: "md", md: "lg" }}
                  color="gray.200"
                  mb={6}
                  fontWeight="light"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.7 }}
                >
                  {slide.text}
                </MotionText>

                <MotionFlex
                  justify="center"
                  gap={4}
                  mt={4}
                  wrap="wrap"
                  initial={{ y: 30, opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  transition={{ delay: 0.9 }}
                >
                  <RouterLink to={slide.btn1Link}>
                    <Button size="md" {...buttonStyles}>
                      Read More
                    </Button>
                  </RouterLink>
                  <RouterLink to={slide.btn2Link}>
                    <Button size="md" {...buttonStyles}>
                      About Us
                    </Button>
                  </RouterLink>
                </MotionFlex>
              </Box>
            </MotionFlex>
          </Box>
        ))}
      </Slider>
    </Box>
  );
};
