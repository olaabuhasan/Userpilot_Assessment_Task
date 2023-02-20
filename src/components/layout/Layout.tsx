import Box from "@material-ui/core/Box";
import { FC } from "react";
import { useLayout } from "./style";
import { LayoutProps } from "./types";
export const Layout: FC<LayoutProps> = ({ leftChild, rightChild }) => {
  const classes = useLayout();
  return (
    <Box className={classes.mainLayout}>
      <Box className={classes.leftSection}>{leftChild}</Box>
      <Box className={classes.rightSection}>{rightChild}</Box>
    </Box>
  );
};
