import { Box, Button } from "@material-ui/core";
import { FC } from "react";
import { CustomPaginationProps } from "./type";
import { useStyles } from "../styles";
import NavigateBeforeIcon from "@material-ui/icons/NavigateBefore";
import NavigateNextIcon from "@material-ui/icons/NavigateNext";
export const CustomPagination: FC<CustomPaginationProps> = ({
  pageNumber,
  handleDecremntPageNumber,
  handleIncremntPageNumber,
}) => {
    const classes = useStyles();
  return (
      <Box
        className={classes?.btnText}
        display={"flex"}
        justifyContent="right"
        padding={"10px"}
      >
        <Button
          disabled={pageNumber <= 1}
          startIcon={<NavigateBeforeIcon />}
          onClick={handleDecremntPageNumber}
        />
        <Button
          startIcon={<NavigateNextIcon />}
          onClick={handleIncremntPageNumber}
        />
      </Box>
  );
};
