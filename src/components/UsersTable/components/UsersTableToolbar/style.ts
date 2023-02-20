import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useUsersTableToolbar = makeStyles((theme: Theme) =>
  createStyles({
    title: {
      flex: "1 1 100%",
      fontSize: "19px",
      fontFamily: "Muli",
    },
  })
);
