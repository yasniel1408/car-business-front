import React from "react";
import { Box } from "grommet";
import { CarouselLanding } from "../../components/CarouselLanding/CarouselLanding";
import { Info } from "../../components/Info/Info";

export const LandingPage = () => {
  return (
    <Box
      align="stretch"
      justify="between"
      animation="fadeIn"
      responsive
      wrap
      direction="column"
    >
      <CarouselLanding />
      <Info />
    </Box>
  );
};

export default LandingPage