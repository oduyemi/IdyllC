import { Box } from "@chakra-ui/react";
import React from "react";
import { Banner } from "../components/Banner";
import { HomepageService } from "../components/HomepageService";
import { HomepageAbout } from "../components/HomepageAbout";





const Home: React.FC = () => {
    return(
        <Box>
            <Banner />
            <HomepageService />
            <HomepageAbout />
        </Box>
    )
}

export default Home;