import makeStyles from "@material-ui/styles/makeStyles";
import { theme } from "theme";
export const useLeftSideMenu = makeStyles({

  logoBox: {
    paddingBottom: "42px",
    paddingLeft: "32px",

  },
  listItem: {
    color: theme.palette.secondary.dark,
    height: 56,
    paddingLeft: "32px",
  },
  listItemText: {
    display: "inline-block",
    paddingLeft: 24,
    fontFamily: 'Mulish',
    fontStyle:"normal",
    fontWeight:400,
    fontSize:16,
    lineHeight:"20px",
    letterSpacing:0.2,
  },
  selected:{
    backgroundColor:"#9FA2B4",
    color:"#DDE2FF",
  }
});
