import React, { useState } from "react";
import { Box, Text, Link, Button, Collapse, Stack } from "@chakra-ui/react";
import { FaPhoneAlt, FaHome, FaInfoCircle, FaServicestack, FaEnvelope } from "react-icons/fa";

export const NavBar: React.FC = () => {
    const [isOpen, setIsOpen] = useState(false);

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    return (
        <Box className="bg-white shadow-lg">
            <nav className="container mx-auto flex justify-between items-center p-4">
                <Link href="/" className="text-blue-600 text-2xl font-bold">IdyllC</Link>
                <Button className="navbar-toggler lg:hidden" onClick={toggleMenu}>
                    <span className="fa fa-bars"></span>
                </Button>
                <Box className="flex-grow flex justify-center nav-items">
                    <Box className="flex space-x-6">
                        <Link href="index.html" className="nav-link flex items-center text-gray-700 hover:text-blue-600 transition">
                            <FaHome className="mr-2" /> Home
                        </Link>
                        <Link href="/about" className="nav-link flex items-center text-gray-700 hover:text-blue-600 transition">
                            <FaInfoCircle className="mr-2" /> About
                        </Link>
                        <Link href="/service" className="nav-link flex items-center text-gray-700 hover:text-blue-600 transition">
                            <FaServicestack className="mr-2" /> Services
                        </Link>
                        <div className="relative group">
                            <Link href="#" className="nav-link flex items-center text-gray-700 hover:text-blue-600 transition">
                                Pages
                            </Link>
                            <Box className="absolute hidden group-hover:block bg-white shadow-lg rounded mt-2">
                                <Link href="/booking" className="dropdown-item block px-4 py-2 text-gray-700 hover:bg-gray-200">Booking</Link>
                                <Link href="/team" className="dropdown-item block px-4 py-2 text-gray-700 hover:bg-gray-200">Technicians</Link>
                                <Link href="/testimonial" className="dropdown-item block px-4 py-2 text-gray-700 hover:bg-gray-200">Testimonial</Link>
                            </Box>
                        </div>
                        <Link href="/contact" className="nav-link flex items-center text-gray-700 hover:text-blue-600 transition">
                            <FaEnvelope className="mr-2" /> Contact
                        </Link>
                    </Box>
                </Box>
                <Box className="flex items-center mt-4 mt-lg-0 bg-gray-600 py-3 px-4 rounded nav-items">
                    <Box className="flex items-center justify-center bg-white w-10 h-10 rounded-full">
                        <FaPhoneAlt className="text-yellow-600" />
                    </Box>
                    <Box className="ml-3">
                        <Text className="text-white mb-1">Support 24/7</Text>
                        <Text className="text-white">+234 706 220 3392</Text>
                        <Text className="text-white">+234 808 369 5430</Text>
                    </Box>
                </Box>
            </nav>
            {/* Mobile Menu */}
            <Collapse in={isOpen} className="lg:hidden">
                <Box p={4} bg="white" shadow="md">
                    <Stack spacing={2}>
                        <Link href="/" className="block text-gray-700 py-2 hover:text-blue-600 transition">Home</Link>
                        <Link href="/about" className="block text-gray-700 py-2 hover:text-blue-600 transition">About</Link>
                        <Link href="/service" className="block text-gray-700 py-2 hover:text-blue-600 transition">Services</Link>
                        <Link href="/contact" className="block text-gray-700 py-2 hover:text-blue-600 transition">Contact</Link>
                    </Stack>
                </Box>
            </Collapse>
        </Box>
    );
};
