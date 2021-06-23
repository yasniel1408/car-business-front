import { Box, Carousel, Image, Text } from "grommet";
import React from "react";
import { theme } from "../../theme/default";
const textShadow = { textShadow: "7px 3px " + theme.global.colors.background.secundary, color: theme.global.colors.background.light };



export const CarouselLanding = () => {
  return (
    <Box style={{position: "relative"}}>
      <Carousel fill controls play={3000}>
        <Box align="center" justify="center" style={{height: "90vh"}}>
          <Image
            src="https://gossipvehiculo.com/wp-content/uploads/2020/12/Grupo-VW2.jpg"
            fit="cover"
            fill
          />
        </Box>
        <Box align="center" justify="center" style={{height: "90vh"}}>
          <Image
            src="https://img.autosblogmexico.com/2019/11/06/27PgLqGM/2018-maserati-ghibli-gransport-4k-interior-hd-db80.jpg"
            fit="cover"
            fill
          />
        </Box>
        <Box align="center" justify="center" style={{height: "90vh"}}>
          <Image
            src="https://www.solofondos.com/wp-content/uploads/2016/01/Im%C3%A1genes-de-autos-en-HD-para-fondo-de-pantalla.jpg"
            fit="cover"
            fill
          />
        </Box>
      </Carousel>
      <Box style={{position: "absolute", top: 160, left: 30}} animation={{ type: "slideRight", delay: 400, size: "xlarge" }}>
        <Text size="3xl" weight="bold" style={textShadow}>Compra el auto de tus  sueños!</Text>
      </Box>
      <Box style={{position: "absolute", top: 280, left: 30}} animation={{ type: "slideRight", delay: 800, size: "xlarge" }}>
        <Text size="large" weight="bold" style={textShadow}>Autos de lujos y modernos!</Text>
      </Box>
    </Box>
  );
};
