// theme.ts or theme.js
import { extendTheme } from '@chakra-ui/react';

const theme = extendTheme({
  colors: {
    brand: {
      primary: "#FF5733", // Example color for primary
      secondary: "#C70039", // Example color for secondary
      accent: "#900C3F", // Example color for accent
      background: "#F4F4F4", // Example background color
      text: "#2C3E50", // Example text color
    },
  },
});

export default theme;
