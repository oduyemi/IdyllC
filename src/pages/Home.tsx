import { Box } from "@chakra-ui/react";
import React from "react";
import { Banner } from "../components/Banner";
import { HomepageService } from "../components/HomepageService";
import { HomepageAbout } from "../components/HomepageAbout";
import { Facts } from "../components/Facts";
import { ExploreCourses } from "../components/ExploreCourses";
import { Booking } from "../components/Booking";
import { Footer } from "../components/Footer";





const Home: React.FC = () => {
    return(
        <Box>
            <Banner />
            <HomepageService />
            <HomepageAbout />
            <Facts />
            <ExploreCourses />
            <Booking />
            <Footer />
        </Box>
    )
}

export default Home;