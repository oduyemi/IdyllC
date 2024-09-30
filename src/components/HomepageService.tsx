import { Box, Image, Text, Button, SimpleGrid, Link } from "@chakra-ui/react";
import React from "react";
import admission from "../assets/images/admission.jpg"
import graduate from "../assets/images/graduate.jpg"
import visa from "../assets/images/visa.jpg"

export const HomepageService: React.FC = () => {
    return (
        <Box py={10}>
            <Box className="container mx-auto">
                <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={4}>
                    {[
                        {
                            title: "Career counselling",
                            imgSrc: graduate,
                            altText: "career"
                        },
                        {
                            title: "Admission (application)",
                            imgSrc: admission,
                            altText: "admission"
                        },
                        {
                            title: "Visa Assistance",
                            imgSrc: visa,
                            altText: "visa"
                        }
                    ].map((service, index) => (
                        <Box 
                            key={index}
                            className="bg-white rounded-md shadow-md overflow-hidden transform transition-transform duration-200 hover:scale-105"
                        >
                            <Image 
                                src={service.imgSrc} 
                                alt={service.altText} 
                                objectFit="cover" 
                                width="100%" 
                                height="200px" 
                            />
                            <Box className="p-4 flex items-center justify-between bg-gray-100">
                                <Text fontWeight="bold" isTruncated>
                                    {service.title}
                                </Text>
                                <Link href="#">
                                    <Button 
                                        variant="outline" 
                                        colorScheme="blue" 
                                        borderRadius="full" 
                                        borderWidth={2} 
                                        borderColor="blue.500"
                                    >
                                        <i className="fa fa-arrow-right"></i>
                                    </Button>
                                </Link>
                            </Box>
                        </Box>
                    ))}
                </SimpleGrid>
                <Box className="my-5 text-center">
                                <Link href="">
                                    <Button variant="outline" size="lg" className="py-3 px-5">
                                        Explore Services
                                    </Button>
                                </Link>
                            </Box>
            </Box>
        </Box>
    );
};
