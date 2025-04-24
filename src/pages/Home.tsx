import { Box } from "@chakra-ui/react";
import React from "react";
import { Banner } from "../components/Home/Banner";
import { HomepageService } from "../components/Home/HomepageService";
import { HomepageAbout } from "../components/Home/HomepageAbout";
import { Facts } from "../components/Home/Facts";
import { ExploreCourses } from "../components/Home/ExploreCourses";
import { Booking } from "../components/Home/Booking";
import { TestimonialSlider } from "../components/Home/Testimonials";
import { Partners } from "../components/Home/Partners";
import { VideoTestimonialGallery } from "../components/About/VideoTestimonials";





const Home: React.FC = () => {
    return(
        <Box>
            <Banner />
            <Box mt={{md:-20}}>
                <Partners />
            </Box>
            <HomepageService />
            <HomepageAbout />
            <VideoTestimonialGallery />
            <Facts />
            <ExploreCourses />
            <TestimonialSlider />
            <Booking />
        </Box>
    )
}

export default Home;