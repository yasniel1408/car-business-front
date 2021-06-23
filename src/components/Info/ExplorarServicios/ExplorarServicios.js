import React from "react";
import { Box, Text, Image, Button } from "grommet";
import { Cart } from "grommet-icons";
import imagecar from "../../../img/undraw_city_driver_re_0x5e.svg";
import { theme } from "../../../theme/default";
import AnimateIn from "react-reveal/Fade";
import AnimateInZoom from "react-reveal/Zoom";
import { NavLink } from "react-router-dom";
const textShadow = {
  textShadow: "7px 3px " + theme.global.colors.background.secundary,
};

export const ExplorarServicios = () => {
  return (
    <>
      <Box
        flex
        direction="row-responsive"
        justify="center"
        background={{ color: "control" }}
      >
        <Box
          margin="xlarge"
          direction="column"
          flex
          justify="center"
          width="100"
        >
          <Box>
            <Text
              size="4xl"
              textAlign="center"
              truncate={false}
              weight="bold"
              margin={{ bottom: "10px" }}
              style={textShadow}
            >
              <AnimateIn left delay={200}>
                Explorar servicios
              </AnimateIn>
            </Text>
          </Box>
          <Box animation={{ type: "slideUp", delay: 300 }}>
            <Text
              size="2xl"
              textAlign="center"
              truncate={false}
              weight="bold"
              margin={{ bottom: "10px" }}
              style={textShadow}
            >
              <AnimateIn right delay={200}>
                Lo mejor de lo mejor
              </AnimateIn>
            </Text>
          </Box>
          <Box flex align="center" justify="center" pad="small" width="100">
            <AnimateIn bottom delay={400}>
              <NavLink to="/ecomerce">
                <Button
                  hoverIndicator={{ color: "accent-2" }}
                  color="accent-2"
                  icon={<Cart color="white" />}
                  primary
                  secondary
                  style={{ width: "250px", height: "60px", color: "white" }}
                  label="Ver ofertas!"
                />
              </NavLink>
            </AnimateIn>
          </Box>
        </Box>

        <Box
          animation={{ type: "slideUp", delay: 500, size: "medium" }}
          flex
          align="center"
          justify="center"
          width="50"
        >
          <AnimateInZoom bottom delay={500}>
            <Image src={imagecar} width="340" />
          </AnimateInZoom>
        </Box>
      </Box>
      <Box color="control" style={{ height: 150, overflow: "hidden" }}>
        <svg
          color="control"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M9.87,11.34 C149.99,150.00 271.49,-49.98 525.11,152.45 L500.00,0.00 L0.00,0.00 Z"
            style={{
              stroke: "none",
              fill: theme.global.colors.background.primary,
            }}
          ></path>
        </svg>
      </Box>
    </>
  );
};
