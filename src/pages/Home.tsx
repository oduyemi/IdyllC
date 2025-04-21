import { Box } from "@chakra-ui/react";
import React from "react";
import { Banner } from "../components/Home/Banner";
import { HomepageService } from "../components/Home/HomepageService";
import { HomepageAbout } from "../components/Home/HomepageAbout";
import { Facts } from "../components/Home/Facts";
import { ExploreCourses } from "../components/Home/ExploreCourses";
import { Booking } from "../components/Home/Booking";
import { Footer } from "../navigation/Footer";
import { TestimonialSlider } from "../components/Home/Testimonials";





const Home: React.FC = () => {
    return(
        <Box>
            <Banner />
            <HomepageService />
            <HomepageAbout />
            <Facts />
            <ExploreCourses />
            <TestimonialSlider />
            <Booking />
            <Footer />
        </Box>
    )
}

export default Home;