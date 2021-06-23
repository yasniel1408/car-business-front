import React from "react";
import { Box, Text, WorldMap, Image } from "grommet";
import { Facebook, Youtube, Twitter, Linkedin } from "grommet-icons";
import AnimateIn from "react-reveal/Fade";
import AnimateIncon from "react-reveal/Bounce";

import foto from "../../../img/undraw_Order_ride_re_372k.svg";
import { theme } from "../../../theme/default";

const textShadow = { textShadow: "7px 3px " + theme.global.colors.background.secundary, color: theme.global.colors.background.primary };

export const TodasPartes = () => {
  return (
    <>
      <Box align="center" justify="center">
        <Text
          size="4xl"
          textAlign="center"
          truncate={false}
          weight="bold"
          margin={{ top: "large", bottom: "large" }}
          style={textShadow}
        >
          <AnimateIn top delay={200}>
            Estamos en todas partes
          </AnimateIn>
        </Text>
      </Box>

      <Box align="center" justify="center">
        <AnimateIn bottom delay={200}>
          <Image src={foto} width="380" height="100" />
        </AnimateIn>
      </Box>

      <Box align="center" justify="center" direction="column" pad="xlarge">
        <AnimateIn bottom delay={200}>
          <WorldMap
            color="brand"
            fill="horizontal"
            continents={[
              {
                name: "Africa",
                color: "accent-2",
              },
              {
                name: "North America",
                color: "accent-2",
              },
              {
                name: "Australia",
                color: "accent-2",
              },
              {
                name: "Europe",
                color: "accent-2",
              },
            ]}
            places={[
              {
                name: "Sydney",
                location: [-33.8830555556, 151.216666667],
                color: "accent-2",
              },
            ]}
          />
        </AnimateIn>
      </Box>
      <Box
        align="center"
        justify="center"
        direction="row"
        height="xxsmall"
        background={{ color: "white" }}
        round="medium"
      >
        <Box align="center" justify="center" pad={{ horizontal: "medium" }}>
          <AnimateIncon top delay={200}>
            <Facebook size="large" color="control" />
          </AnimateIncon>
        </Box>
        <Box align="center" justify="center" pad={{ horizontal: "medium" }}>
          <AnimateIncon top delay={400}>
            <Youtube size="large" color="control" />
          </AnimateIncon>
        </Box>
        <Box align="center" justify="center" pad={{ horizontal: "medium" }}>
          <AnimateIncon top delay={600}>
            <Twitter size="large" color="control" />
          </AnimateIncon>
        </Box>
        <Box
          align="center"
          justify="center"
          wrap
          pad={{ horizontal: "medium" }}
        >
          <AnimateIncon top delay={800}>
            <Linkedin size="large" color="control" />
          </AnimateIncon>
        </Box>
      </Box>
    </>
  );
};
