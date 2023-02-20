import makeStyles from "@material-ui/styles/makeStyles";

export const useTemporaryDrawerStyles = makeStyles({
  paper: {
    "& .MuiDrawer-paper": {
      width: 545,
    },
    "& .MuiBackdrop-root": {
      backgroundColor: "transparent",
    },
    "& .MuiPaper-elevation16": {
      boxShadow: "none",
    },
  },
  header: {
    background: "#528CFC",
    height: "158px",
    width: "100%",
  },
  mainBox: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
  },
  name: {
    fontFamily: "Mulish",
    fontSize: "18px",
  },
  avatar: {
    "& .MuiAvatar-root": {
      width: "150px",
      height: "150px",
      marginTop: "-84px",
    },
  },
  location: {
    location:"10px",
    fontSize: "14px",
    fontFamily: "Mulish",
    color: "#87888C",
  },
});
