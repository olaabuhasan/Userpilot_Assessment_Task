import { makeStyles, createStyles } from "@material-ui/styles";

export const useFilterStyles = makeStyles(() =>
  createStyles({
    input: {
      margin: 6,
      "& .MuiOutlinedInput-input": {
        padding: "10px",
        width: 197,
        fontSize: "14px",
        fontFamily: "Muli",
      },
    },
  })
);
