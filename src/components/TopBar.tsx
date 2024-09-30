import React from "react";
import { Box, Text, IconButton, Link, HStack } from "@chakra-ui/react";
import { FaMapMarkerAlt, FaEnvelopeOpen, FaFacebookF, FaTwitter, FaLinkedinIn, FaInstagram } from "react-icons/fa";

export const TopBar: React.FC = () => {
    return (
        <Box className="container-fluid bg-light hidden lg:block">
            <div className="flex items-center justify-between p-4 bg-gray-100">
                <div className="text-center lg:text-left">
                    <Link href="" className="navbar-brand">
                        <Text fontSize="2xl" color="blue" className="m-0">IdyllC</Text>
                    </Link>
                </div>
                <div className="flex items-center">
                    <HStack spacing={4}>
                        <HStack className="items-center">
                            <FaMapMarkerAlt className="text-yellow-400 mr-2" />
                            <Text className="m-0">
                                82 Ibilola Nelson House (Top Floor)
                                Allen Avenue, Ikeja
                            </Text>
                        </HStack>
                        <HStack className="items-center">
                            <FaEnvelopeOpen className="text-yellow-400 mr-2" />
                            <Text className="m-0">info@idyllconsults.com</Text>
                        </HStack>
                        <HStack className="items-center">
                            <IconButton aria-label="Facebook" icon={<FaFacebookF />} variant="outline" className="text-blue-500 border border-blue-500" />
                            <IconButton aria-label="Twitter" icon={<FaTwitter />} variant="outline" className="text-blue-500 border border-blue-500" />
                            <IconButton aria-label="LinkedIn" icon={<FaLinkedinIn />} variant="outline" className="text-blue-500 border border-blue-500" />
                            <IconButton aria-label="Instagram" icon={<FaInstagram />} variant="outline" className="text-blue-500 border border-blue-500" />
                        </HStack>
                    </HStack>
                </div>
            </div>
        </Box>
    );
};
