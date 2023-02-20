import makeStyles from "@material-ui/styles/makeStyles";
export const useLayout = makeStyles({
  mainLayout: {
    display: "flex",
    flexDirection: "row",
    minHeight: "150vh",
  },
  leftSection: {
    width: 255,
    background: "#363740",
    display: "flex",
    flexDirection: "column",
    paddingTop: "37px",
  },
  rightSection: {
    width: "calc(100% - 255px)",
    background: "#E5E5E5",
    display: "flex",
    flexDirection: "column",
    paddingTop: "37px",
  },
});
