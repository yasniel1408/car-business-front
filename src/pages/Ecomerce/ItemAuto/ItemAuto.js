import React, { useState } from "react";
import {
  Box,
  Text,
  Image,
  Card,
  CardBody,
  CardFooter,
  CardHeader,
  Button,
} from "grommet";
import { Car, Currency } from "grommet-icons";
import { LayerInfo } from "../LayerInfo/LayerInfo";

export const ItemAuto = ({ item }) => {
  const [open, setOpen] = useState(false);
  const [modal, setModal] = useState(false);

  const handleLayerInfo = () => {
    setOpen(true);
    setModal(true);
  };

  return (
    <>
      <LayerInfo
        open={open}
        setOpen={setOpen}
        modal={modal}
        setModal={setModal}
        item={item}
      />
      <Box
        key={item}
        as="article"
        pad="medium"
        width="medium"
        animation={{ type: "slideUp", delay: 200, size: "medium" }}
        onClick={handleLayerInfo}
      >
        <Card background="light-1" style={{ cursor: "pointer" }}>
          <CardHeader pad="medium">
            <Image
              src={`https://car-strapi.herokuapp.com/${item.photo.url}`}
              width="100%"
              height="200"
              fit="cover"
              style={{ borderRadius: 6 }}
            />
          </CardHeader>
          <CardBody pad="medium">
            <Text size="medium">{item.name}</Text>
            <Text size="small">{item.description.substring(0, 50)}...</Text>
            <Text>precio: {item.price}</Text>
          </CardBody>
          <CardFooter pad="8px" background="light-2">
            <Button
              icon={<Car color="blue" />}
              label="Alquilar"
              hoverIndicator
            />
            <Button
              icon={<Currency color="green" />}
              label="Comprar"
              hoverIndicator
            />
          </CardFooter>
        </Card>
      </Box>
    </>
  );
};
