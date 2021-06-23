import React from "react";
import { Box, Spinner } from "grommet";
export const Loading = ({ size }) => {
  return (
    <Box
      align="center"
      direction="row"
      gap="small"
      pad="small"
      width="100%"
      height="100%"
      flex
      justify="center"
    >
      <Spinner size={size} />
    </Box>
  );
};
