import React from "react";
import { Box, Text } from "@chakra-ui/react";
import Marquee from "react-fast-marquee";
import Ascencia from "../../assets/images/partners/ascencia.png";
import CollegeDeParis from "../../assets/images/partners/collegedeparis.png";
import Eastern from "../../assets/images/partners/eastern.png";
import Idea from "../../assets/images/partners/idea.png";
import IdeaDubai from "../../assets/images/partners/ideadubai.png";
import MacroMedia from "../../assets/images/partners/macromedia.png";
import Munich from "../../assets/images/partners/munich.png";
import RegentCollege from "../../assets/images/partners/regentcollege.png"

export const Partners: React.FC = () => {
  const logos = [Ascencia, CollegeDeParis, Eastern, Idea, IdeaDubai, MacroMedia, Munich, RegentCollege];

  return (
    <Box
      width="95%"
      height={{ base: "50px", sm: "87px" }}
      display="flex"
      flexDirection={{ base: "column", sm: "row" }}
      alignItems="center"
      margin={{ base: "60px 2%", sm: "120px 2%" }}
      marginBottom={{ base: "100px", sm: "0px" }}
    >
      {/* Header Section */}
      <Box
        display="flex"
        alignItems="center"
        justifyContent="center"
        height={{ base: "50px", sm: "87px" }}
        width={{ base: "100%", sm: "30%" }}
      >

        {/* Title */}
        <Text
          color="#E7A449"
          fontSize={{ base: "18px", sm: "24px" }}
          fontWeight="600"
          lineHeight="32px"
          textAlign="center"
          width={{ base: "87%", sm: "70%" }}
        >
          Meet some of our Partner Schools
        </Text>
      </Box>

      {/* Marquee Section */}
      <Box
        width="100%"
        height={{ base: "50px", sm: "87.35px" }}
        overflow="hidden"
        display="flex"
        alignItems="center"
        justifyContent="center"
        borderRadius="2"
        padding={{ base: "24px 8px", sm: "16px" }}
        paddingLeft="0px"
        marginTop={{ base: "10px", sm: "0px" }}
      >
        <Marquee speed={130} pauseOnHover gradient={false}>
          {logos.map((logo, index) => (
            <Box
              key={index}
              mx={{ base: 2, sm: 4 }}
              height={{ base: "49.8px", sm: "87.35px" }}
              display="flex"
              alignItems="center"
            >
              <PartnerLogo src={logo} alt={`Logo ${index}`} />
            </Box>
          ))}
        </Marquee>
      </Box>
    </Box>
  );
};


const PartnerLogo: React.FC<{ src: string; alt: string }> = ({ src, alt }) => {
  return (
    <Box
      width={{ base: "60px", sm: "120px" }}
      height={{ base: "49.8px", sm: "87.35px" }}
      display="flex"
      alignItems="center"
      justifyContent="center"
    >
      <img
        src={src}
        alt={alt}
        style={{
          width: "100%",
          height: "100%",
          objectFit: "contain",
        }}
      />
    </Box>
  );
};
