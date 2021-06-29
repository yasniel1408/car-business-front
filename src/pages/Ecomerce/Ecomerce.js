import React from "react";
import { EcomerceProvider } from "./EcomerceProvider";
import { EcomerceList } from "./EcomerceList";

export const Ecomerce = () => {
  return (
    <EcomerceProvider>
      <EcomerceList />
    </EcomerceProvider>
  );
};

export default Ecomerce