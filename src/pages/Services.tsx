import { Box } from "@chakra-ui/react";
import React from "react";
import { Services } from "../components/Services";
import { Footer } from "../navigation/Footer";
import { ServicesBanner } from "../components/Services/Banner";





const ServicePage: React.FC = () => {
    return(
        <Box>
            <ServicesBanner />
            <Services />
            <Footer />
        </Box>
    )
}

export default ServicePage;