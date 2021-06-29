import React from "react";
import { NavLink } from "react-router-dom";
import { Box, Text, Card, Button, Image } from "grommet";
import { Article, Cart, ScheduleNew } from "grommet-icons";
import AnimateIn from "react-reveal/Flip";

import venta from "../../../img/undraw_Vehicle_sale_a645.svg";
import alquilerCar from "../../../img/undraw_fast_car_p4cu.svg";
import webCar from "../../../img/undraw_My_documents_re_13dc.svg";
import { theme } from "../../../theme/default";

export const Cards = () => {
  return (
    <Box style={{ position: "relative" }}>
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
        <AnimateIn left delay={200}>
          <Box align="center" justify="center" pad="small">
            <Card
              pad="medium"
              style={{ background: theme.global.colors.background.light }}
            >
              <Box align="center" justify="center" direction="row">
                <Image src={venta} width="150" height="120" />
                <Text margin="medium" weight="bold">
                  Venta de autos
                </Text>
              </Box>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit felis
                accumsan libero at mus arcu, aptent tortor ultrices a taciti.
                Parturient mauris donec nullam cursus augue, vestibulum dictumst
                nisi.
              </Text>
              <Box pad="medium" width="100">
                <NavLink to="/ecomerce">
                  <Button
                    primary
                    secondary
                    color="accent-2"
                    style={{ color: "white", height: 40, width: 170 }}
                    label="Ver Mas..."
                    icon={<Cart color="white" />}
                  />
                </NavLink>
              </Box>
            </Card>
          </Box>
        </AnimateIn>

        <AnimateIn top delay={400}>
          <Box align="center" justify="center" pad="small">
            <Card
              pad="medium"
              style={{ background: theme.global.colors.background.light }}
            >
              <Box align="center" justify="center" direction="row">
                <Image src={alquilerCar} width="150" height="120" />
                <Text margin="medium" weight="bold">
                  Alquiler de autos
                </Text>
              </Box>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit felis
                accumsan libero at mus arcu, aptent tortor ultrices a taciti.
                Parturient mauris donec nullam cursus augue, vestibulum dictumst
                nisi.
              </Text>
              <Box pad="medium" width="100">
                <Button
                  primary
                  secondary
                  color="accent-2"
                  style={{ color: "white", height: 40, width: 170 }}
                  label="Ver Mas..."
                  icon={<ScheduleNew color="white" />}
                />
              </Box>
            </Card>
          </Box>
        </AnimateIn>

        <AnimateIn right delay={600}>
          <Box align="center" justify="center" pad="small">
            <Card
              pad="medium"
              style={{ background: theme.global.colors.background.light }}
            >
              <Box align="center" justify="center" direction="row">
                <Image src={webCar} width="150" height="120" />
                <Text margin="medium" weight="bold">
                  Noticias de autos
                </Text>
              </Box>
              <Text>
                Lorem ipsum dolor sit amet consectetur adipiscing, elit felis
                accumsan libero at mus arcu, aptent tortor ultrices a taciti.
                Parturient mauris donec nullam cursus augue, vestibulum dictumst
                nisi.
              </Text>
              <Box pad="medium" width="100">
                <Button
                  primary
                  secondary
                  color="accent-2"
                  style={{ color: "white", height: 40, width: 170 }}
                  label="Ver Mas..."
                  icon={<Article color="white" />}
                />
              </Box>
            </Card>
          </Box>
        </AnimateIn>
      </Box>
    </Box>
  );
};
