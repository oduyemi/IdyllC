import { Box } from "@chakra-ui/react";
import React from "react";
import { AboutBanner } from "../components/About/Banner";
import { MissionVision } from "../components/About/MissionVision";
import { WhyChooseUs } from "../components/About/WhyChoose";
import { AboutSection } from "../components/About";
import { ObjectivesAndGoals } from "../components/About/ObjectivesAndGoals";





const About: React.FC = () => {
    return(
        <Box>
            <AboutBanner />
            <AboutSection />
            <MissionVision />
            <WhyChooseUs />
            <ObjectivesAndGoals />
        </Box>
    )
}

export default About;