import { Box } from "@chakra-ui/react";
import React from "react";
import { Banner } from "../components/Banner";
import { HomepageService } from "../components/HomepageService";
import { HomepageAbout } from "../components/HomepageAbout";
import { Facts } from "../components/Facts";
import { MoreHomepageServices } from "../components/MoreHomepageServices";
import { Booking } from "../components/Booking";
import { Footer } from "../components/Footer";





const Home: React.FC = () => {
    return(
        <Box>
            <Banner />
            <HomepageService />
            <HomepageAbout />
            <Facts />
            <MoreHomepageServices />
            <Booking />
            <Footer />
        </Box>
    )
}

export default Home;