import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ChakraProvider } from "@chakra-ui/react";
import Home from "../pages/Home";
import { TopBar } from "../components/TopBar";
import { NavBar } from "../components/NavBar";
import Error404 from "../pages/Error404";

export const Navigation: React.FC = () => {
    return (
        <ChakraProvider>
            <BrowserRouter>
                <TopBar />
                <NavBar />
                <Routes>
                    <Route path="/" element={<Home />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
};
