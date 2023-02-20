import Box from "@material-ui/core/Box";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import Logo from "assets/svgs/logo.svg";
import { useLocation } from "react-router-dom";
import { useLeftSideMenu } from "./style";
import { useUtilData } from "./utils";

export const LeftSideMenu = () => {
  const classes = useLeftSideMenu();
  const { LeftMenuData } = useUtilData();
  const location = useLocation();

  return (
    <Box>
      <Box className={classes.logoBox}>
        <img src={Logo} alt="logo" />
      </Box>
      <Box>
        <List>
          {LeftMenuData?.map((item) => (
            <ListItem
              key={item?.text}
              style={{
                width: "100%",
              }}
              className={classes.listItem}
              button
              onClick={item?.onclick}
            >
              <img src={item?.img} alt={item?.text} />
              <span className={classes.listItemText}>{item?.text}</span>
            </ListItem>
          ))}
        </List>
      </Box>
    </Box>
  );
};
