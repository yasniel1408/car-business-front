import React, { useContext } from "react";
import {
  Box,
  InfiniteScroll,
} from "grommet";
import { EcomerceDataContext } from "./EcomerceProvider";
import { ItemAuto } from "./ItemAuto/ItemAuto";

export const EcomerceList = () => {
  const data = useContext(EcomerceDataContext);

  return (
    <Box
      columns="xsmall"
      rows="small"
      pad="small"
      flex
      justify="around"
      style={{ flexFlow: "wrap" }}
    >
      <InfiniteScroll items={data} step={1}>
        {(item) => (
            <ItemAuto key={item.id} item={item}/>
        )}
      </InfiniteScroll>
    </Box>
  );
};
