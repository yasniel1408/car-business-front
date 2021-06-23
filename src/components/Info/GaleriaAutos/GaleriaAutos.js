import React from "react";
import { Box, Distribution, Text, Image } from "grommet";
import AnimateIn from "react-reveal/Fade";
import { theme } from "../../../theme/default";
const textShadow = {
  textShadow: "7px 3px " + theme.global.colors.background.secundary,
  color: theme.global.colors.background.primary,
};

export const GaleriaAutos = () => {
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
            Autos del año
          </AnimateIn>
        </Text>
      </Box>
      <AnimateIn bottom delay={200}>
        <Box
          align="center"
          justify="center"
          fill={false}
          margin="large"
          flex
          direction="row-responsive"
          responsive
          wrap={false}
        >
          <Distribution
            values={[
              {
                value: 50,
                src: "https://mms.businesswire.com/media/20150506005124/es/465931/5/%E6%95%B4%E8%BD%A645_%282%29.jpg",
              },
              {
                value: 30,
                src: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_69252020fb7b4187be4fa8dd94aa434d.jpg",
              },
              {
                value: 20,
                src: "https://www.actualidadmotor.com/wp-content/uploads/2018/03/GAC-GA4.jpg",
              },
              {
                value: 10,
                src: "https://acroadtrip.blob.core.windows.net/catalogo-imagenes/m/RT_V_7afab40737ba44008acd0cde4b95126c.jpg",
              },
            ]}
          >
            {(value) => (
              <Image style={{ borderRadius: 30 }} fit="cover" src={value.src} />
            )}
          </Distribution>
        </Box>
      </AnimateIn>
    </>
  );
};
