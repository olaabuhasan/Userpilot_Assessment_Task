import { useContext } from "react";
import Toolbar from "@material-ui/core/Toolbar";
import Typography from "@material-ui/core/Typography";
import { Filter } from "components/Filter";
import { useUsersTableToolbar } from "./style";
import { DataFilterContext } from "Context";
export const UsersTableToolbar = () => {
  const classes = useUsersTableToolbar();
  const searchData = useContext(DataFilterContext);

  return (
    <Toolbar>
      <Typography align="left" className={classes.title}>
        All Users
      </Typography>
      <Filter
        label="Gender"
        name="gender"
        searchText={searchData?.genderSearchText}
        handleOnChange={searchData?.setGenderSearchTextFromContext}
      />
      <Filter
        label="Nationality"
        name="nat"
        searchText={searchData?.natSearchText}
        handleOnChange={searchData?.setNatSearchTextContext}
      />
    </Toolbar>
  );
};
