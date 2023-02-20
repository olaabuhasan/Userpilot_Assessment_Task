import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useUserTableHead = makeStyles((theme: Theme) =>
  createStyles({
    head: {
      "& .MuiTableCell-head": {
        color: "#9FA2B4",
        fontFamily: "Muli",
        fontSize: "14px",
      },
    },
  })
);
