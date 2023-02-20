import { Box, TextField } from "@material-ui/core";
import { FC } from "react";
import { useFilterStyles } from "./style";
import { FilterProps } from "./type";

export const Filter: FC<FilterProps> = ({
  searchText,
  name,
  label,
  handleOnChange,
}) => {
  const classes = useFilterStyles();
  return (
    <Box display={"flex"} justifyContent="center">
      <TextField
        fullWidth
        name={name}
        label={label}
        placeholder={label}
        variant="outlined"
        className={classes.input}
        size="small"
        value={searchText}
        onChange={(newValue) => {
          handleOnChange(newValue?.target?.value);
        }}
      />
    </Box>
  );
};
