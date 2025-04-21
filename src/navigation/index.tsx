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
import Admissions from "../pages/Admissions";
import VisaAssistance from "../pages/VisaAssistance";
import CareerCounselling from "../pages/CareerCounseling";
import StudentCounselling from "../pages/StudentCounseling";
import Accomodation from "../pages/Accomodation";
import Reservations from "../pages/Reservations";

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
                    <Route path="/services/admissions" element={<Admissions />} />
                    <Route path="/services/accomodation-assistance" element={<Accomodation />} />
                    <Route path="/services/visa-assistance" element={<VisaAssistance />} />
                    <Route path="/services/flight-reservation" element={<Reservations />} />
                    <Route path="/services/career-counselling" element={<CareerCounselling />} />
                    <Route path="/services/student-counselling" element={<StudentCounselling />} />
                    <Route path="*" element={<Error404 />} />
                </Routes>
            </BrowserRouter>
        </ChakraProvider>
    );
};
