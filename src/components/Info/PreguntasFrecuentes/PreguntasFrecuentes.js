import React from "react";
import {
  Box,
  Text,
  Main,
  Accordion,
  AccordionPanel,
  Image,
} from "grommet";
import AnimateIn from "react-reveal/Fade";
import AnimateInZoom from "react-reveal/Zoom";

import foto from "../../../img/undraw_Wall_post_re_y78d.svg";
import { theme } from "../../../theme/default";

const textShadow = {
  textShadow: "7px 3px " + theme.global.colors.background.secundary,
  color: theme.global.colors.background.primary,
};

export const PreguntasFrecuentes = () => {
  return (
    <Main fill="vertical" flex="grow" overflow="auto" pad="xlarge">
      <Box
        flex
        justify="center"
        direction="row-responsive"
        pad="medium"
        responsive
      >
        <Box flex fill align="center" justify="center">
          <AnimateInZoom top delay={200}>
            <Image
              src={foto}
              width="380"
              height="380"
              style={{ padding: 20 }}
            />
          </AnimateInZoom>
        </Box>
        <Box flex fill align="center" justify="center">
          <Accordion animate multiple>
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
                  Preguntas frecuentes
                </AnimateIn>
              </Text>
            </Box>
            <AnimateIn bottom delay={200}>
              <AccordionPanel label="Lorem ipsum dolor sit, amet consectetur.">
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit orci
                  cum at velit, felis facilisi aliquet molestie natoque tellus
                  congue laoreet ac. Lobortis potenti rhoncus odio urna nascetur
                  phasellus netus auctor sem, tempor in molestie magnis nostra
                  magna laoreet natoque convallis inceptos, lectus vel erat
                  nullam gravida sapien sagittis aliquam. Donec himenaeos netus
                  tellus ullamcorper suscipit vivamus cum quam aliquet, dictum
                  ligula dis parturient fringilla nibh mattis venenatis blandit
                  pretium, in placerat nisi magna ultrices natoque semper dui.
                </Text>
              </AccordionPanel>
            </AnimateIn>
            <AnimateIn bottom delay={400}>
              <AccordionPanel label="Lorem ipsum dolor sit, amet consectetur.">
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit orci
                  cum at velit, felis facilisi aliquet molestie natoque tellus
                  congue laoreet ac. Lobortis potenti rhoncus odio urna nascetur
                  phasellus netus auctor sem, tempor in molestie magnis nostra
                  magna laoreet natoque convallis inceptos, lectus vel erat
                  nullam gravida sapien sagittis aliquam. Donec himenaeos netus
                  tellus ullamcorper suscipit vivamus cum quam aliquet, dictum
                  ligula dis parturient fringilla nibh mattis venenatis blandit
                  pretium, in placerat nisi magna ultrices natoque semper dui.
                </Text>
              </AccordionPanel>
            </AnimateIn>
            <AnimateIn bottom delay={600}>
              <AccordionPanel label="Lorem ipsum dolor sit, amet consectetur.">
                <Text>
                  Lorem ipsum dolor sit amet consectetur adipiscing elit orci
                  cum at velit, felis facilisi aliquet molestie natoque tellus
                  congue laoreet ac. Lobortis potenti rhoncus odio urna nascetur
                  phasellus netus auctor sem, tempor in molestie magnis nostra
                  magna laoreet natoque convallis inceptos, lectus vel erat
                  nullam gravida sapien sagittis aliquam. Donec himenaeos netus
                  tellus ullamcorper suscipit vivamus cum quam aliquet, dictum
                  ligula dis parturient fringilla nibh mattis venenatis blandit
                  pretium, in placerat nisi magna ultrices natoque semper dui.
                </Text>
              </AccordionPanel>
            </AnimateIn>
          </Accordion>
        </Box>
      </Box>
    </Main>
  );
};
