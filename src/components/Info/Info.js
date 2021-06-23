import React from "react";
import { Main } from "grommet";
import { ExplorarServicios } from "./ExplorarServicios/ExplorarServicios";
import { Cards } from "./Cards/Cards";
import { PreguntasFrecuentes } from "./PreguntasFrecuentes/PreguntasFrecuentes";
import { TodasPartes } from "./TodasPartes/TodasPartes";
import { GaleriaAutos } from "./GaleriaAutos/GaleriaAutos";

export const Info = () => {
  return (
    <Main justify="center" direction="column" style={{ overflow: "hidden" }}>
      <ExplorarServicios />
      <Cards />
      <GaleriaAutos />
      <PreguntasFrecuentes />
      <TodasPartes />
    </Main>
  );
};
