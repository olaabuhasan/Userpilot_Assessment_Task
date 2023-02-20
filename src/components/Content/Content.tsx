import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Avatar from "@material-ui/core/Avatar";
import { useContentStyle } from "./style";
import { FC } from "react";
import { ContentProps } from "./types";
import { useContent } from "./useContent";
export const Content: FC<ContentProps> = ({ childComponent }) => {
  const classes = useContentStyle();
  const { userData } = useContent();
  return (
    <Box className={classes.mainBox}>
      <Box className={classes.header}>
        <Typography className={classes.headerText}>Users</Typography>
        <Box className={classes.userInfoAndAvatar}>
          <span className={classes.userNameText}>
            {userData?.firstName} {userData?.lastName}{" "}
          </span>
          <span>
            <Avatar src={userData?.picture} />
          </span>
        </Box>
      </Box>
      <Box className={classes.childComponent}>{childComponent}</Box>
    </Box>
  );
};
