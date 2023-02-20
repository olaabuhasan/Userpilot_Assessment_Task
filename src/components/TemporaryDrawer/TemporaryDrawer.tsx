import { Avatar, Box, Typography } from "@material-ui/core";
import Drawer from "@material-ui/core/Drawer";
import { FC } from "react";
import { useTemporaryDrawerStyles } from "./style";
import { TemporaryDrawerProps } from "./types";

export const TemporaryDrawer: FC<TemporaryDrawerProps> = (props) => {
  const { open, data } = props;
  const classes = useTemporaryDrawerStyles();
  return (
    <Drawer className={classes.paper} anchor="right" open={open} key={data?.id}>
      <Box className={classes.header} />
      <Box className={classes.mainBox}>
        <Box className={classes.avatar}>
          <Avatar src={data?.imgUrl} alt="Avatar"/>
        </Box>
        <Box>
          <Typography className={classes.name}>{data?.name}</Typography>
        </Box>
        <Box>
          <Typography className={classes.location}>{data?.location}</Typography>
        </Box>
      </Box>
    </Drawer>
  );
};
