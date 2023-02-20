import makeStyles from "@material-ui/styles/makeStyles";
export const useContentStyle = makeStyles({
  mainBox: {
    padding: "0px 30px 58px 30px",
  },
  header: {
    display: "flex",
    justifyContent: "space-between",
  },
  headerText: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 700,
    fontSize: "24px",
    lineHeight: "30px",
    letterSpacing: "0.3px",
  },
  userInfoAndAvatar: {
    display: "flex",
    justifyContent: "space-around",
    alignItems: "center",
    width: "183px",
  },
  userNameText: {
    fontFamily: "Mulish",
    fontStyle: "normal",
    fontWeight: 600,
    fontSize: "14px",
    lineHeight: "20px",
    textAlign: "right",
    letterSpacing: " 0.2px",
  },
  childComponent: {
    marginTop: 58,
    // padding:38,
    boxsizing: "border-box",
    background: "#FFFFFF",
    border: "1px solid #DFE0EB",
    borderRadius: "8px",
    height: "89vh",
  },
});
