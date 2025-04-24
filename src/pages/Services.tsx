import { Box } from "@chakra-ui/react";
import React from "react";
import { Services } from "../components/Services";
import { ServicesBanner } from "../components/Services/Banner";





const ServicePage: React.FC = () => {
    return(
        <Box>
            <ServicesBanner />
            <Services />
        </Box>
    )
}

export default ServicePage;