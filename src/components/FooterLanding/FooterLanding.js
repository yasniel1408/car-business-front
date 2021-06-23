import React from "react";
import { Box, Button, Text, Footer, Form, TextInput, TextArea } from "grommet";
import { Mail, Send } from "grommet-icons";
import { theme } from "../../theme/default";
import AnimateIn from "react-reveal/Fade";
const textShadow = { textShadow: "7px 3px " + theme.global.colors.background.secundary };

export const FooterLanding = () => {
  return (
    <>
      <Box color="control" style={{ height: 150, overflow: "hidden" }}>
        <svg
          color="control"
          viewBox="0 0 500 150"
          preserveAspectRatio="none"
          style={{ height: "100%", width: "100%" }}
        >
          <path
            d="M-4.22,10.36 C149.99,150.00 349.20,-49.98 539.78,144.56 L500.00,150.00 L0.00,150.00 Z"
            style={{
              stroke: "none",
              fill: theme.global.colors.background.primary,
            }}
          ></path>
        </svg>
      </Box>
      <Footer
        align="center"
        direction="column"
        flex={false}
        justify="center"
        gap="medium"
        background={{ color: "control" }}
      >
        <Box align="center" justify="center">
          <Text textAlign="center" size="5xl" weight="bold" style={textShadow}>
            <AnimateIn top delay={200}>
              Contacto
            </AnimateIn>
          </Text>
        </Box>
        <Box
          align="stretch"
          justify="between"
          pad="large"
          direction="row-responsive"
        >
          <Form>
            <AnimateIn top delay={200}>
              <Box
                align="center"
                justify="center"
                margin={{ bottom: "medium" }}
              >
                <TextInput
                  icon={<Mail />}
                  placeholder="Escribe tu email"
                  type="text"
                  size="large"
                  plain={false}
                />
              </Box>
            </AnimateIn>

            <AnimateIn top delay={300}>
              <TextArea
                placeholder="Cuerpo del mensasje"
                resize
                plain={false}
                fill
                size="large"
              />
            </AnimateIn>

            <AnimateIn top delay={400}>
              <Button
                label="Enviar"
                fill="horizontal"
                active={false}
                hoverIndicator={{ color: "accent-2" }}
                size="large"
                type="submit"
                margin={{ top: "small" }}
                style={{ color: "white" }}
                icon={<Send color="white" />}
              />
            </AnimateIn>
          </Form>
        </Box>
      </Footer>
    </>
  );
};
