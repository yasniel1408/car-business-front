import React from "react";
import {
  Box,
  Text,
  Layer,
  Button,
  CardFooter,
  Image,
} from "grommet";
import { FormClose, Car, Currency } from "grommet-icons";

export const LayerInfo = ({ open, setOpen, modal, setModal, item }) => {
  const ref = React.useRef();
  const onClose = () => setOpen(undefined);

  return (
    <>
      {open ? (
        <Layer
          full="vertical"
          position="right"
          modal={modal}
          target={ref.current}
          onClickOutside={onClose}
          onEsc={onClose}
        >
          <Box fill style={{ minWidth: "100%" }}>
            <Box
              direction="row"
              align="center"
              as="header"
              elevation="small"
              justify="between"
            >
              <Text margin={{ left: "small" }}>{item.name}</Text>
              <Button icon={<FormClose />} onClick={onClose} />
            </Box>
            <Box width="xlarge" flex pad="xsmall" justify="top" direction="row" overflow="auto" wrap >
              <Box width="50%" pad="small">
                <Image
                  src={`${item.photo.url}`}
                  width="100%"
                  fit="cover"
                  style={{ borderRadius: 6 }}
                />
              </Box>
              <Box width="50%" pad="small">
                <Text size="medium"></Text>
                <Text size="small">{item.description}</Text>
                <Text>precio: {item.price}</Text>
                <CardFooter>
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
              </Box>
            </Box>
            <Box
              as="footer"
              border={{ side: "top" }}
              pad="small"
              justify="end"
              direction="row"
              align="center"
            >
              <Button primary label="Exit" onClick={onClose} />
            </Box>
          </Box>
        </Layer>
      ) : (
        ""
      )}
    </>
  );
};
