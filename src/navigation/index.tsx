import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "../pages/Home";
import { TopBar } from "./TopBar";
import { NavBar } from "./NavBar";
import Error404 from "../pages/Error404";
import ServicePage from "../pages/Services";
import About from "../pages/About";
import Contact from "../pages/Contact";

export const Navigation: React.FC = () => {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <TopBar />
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="/about" element={<About />} />
                    <Route path="/services" element={<ServicePage />} />
                    <Route path="/contact" element={<Contact />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
};
