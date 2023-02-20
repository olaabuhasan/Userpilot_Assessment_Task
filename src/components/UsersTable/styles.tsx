import { createStyles, makeStyles, Theme } from "@material-ui/core";

export const useStyles = makeStyles((theme: Theme) =>
  createStyles({
    root: {
      width: "100%",
    },
    paper: {
      width: "100%",
      marginBottom: theme.spacing(2),
    },
    table: {
      minWidth: 750,
    },
    visuallyHidden: {
      border: 0,
      clip: "rect(0 0 0 0)",
      height: 1,
      margin: -1,
      overflow: "hidden",
      padding: 0,
      position: "absolute",
      top: 20,
      width: 1,
    },
    tableContainer: {
      marginTop: "10px",
    },
    header: {
      background: "#528CFC",
      height: "158px",
      width: "100%",
    },
    head: {
      "& .MuiTableCell-head": {
        color: "#9FA2B4",
        fontFamily: "Muli",
        fontSize: "14px",
      },
    },
    name: {
      display: "-webkit-box",
     margin:"10px",
    },
    item: {
      fontFamily: "Muli",
      fontSize: "14px",
      padding:"10px"
    },
    avatar: {
      "& .MuiAvatar-root": {
        width: "150px",
        height: "150px",
        marginTop: "-84px",
      },
    },
    subItem: {
      fontFamily: "Muli",
      fontSize: "12px",
      color: "#C5C7CD",
      padding:"10px"
    },
    location: {
      fontSize: "14px",
      fontFamily: "Mulish",
      color: "#87888C",
    },

    btnText: {
      "& .MuiButton-text": {
        padding: " 10px 8px",
        "& svg": {
          color: "#9FA2B4",
        },
      },
    },
  })
);
