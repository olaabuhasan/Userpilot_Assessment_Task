import { FC } from "react";
import Table from "@material-ui/core/Table";
import TableBody from "@material-ui/core/TableBody";
import TableCell from "@material-ui/core/TableCell";
import TableContainer from "@material-ui/core/TableContainer";
import TableRow from "@material-ui/core/TableRow";
import Paper from "@material-ui/core/Paper";
import { Avatar,Typography } from "@material-ui/core";
import { UserTableHead } from "./components";
import { UsersTableToolbar } from "./components/UsersTableToolbar/UsersTableToolbar";
import { useStyles } from "./styles";
import { TemporaryDrawer } from "components/TemporaryDrawer";
import moment from "moment";
import { UsersTableProps } from "./types";
import { useUserTable } from "./useUserTable";
import { CustomPagination } from "./CustomPagination/CustomPagination";

export const UsersTable: FC<UsersTableProps> = ({
  dataRows,
  headCells,
  pageNumber,
  loading,
  handleIncremntPageNumber,
  handleDecremntPageNumber,
}) => {
  const classes = useStyles();
  const { open, userData, handleDrawerOpen } = useUserTable();
  return (
    <div className={classes.root}>
      <Paper className={classes.paper}>
        <UsersTableToolbar />
        <TableContainer className={classes.tableContainer}>
          {loading ? (
            <>
              <Typography variant="h4" style={{ textAlign: "center" }}>
                Loading ...
              </Typography>
            </>
          ) : (
            <>
              <Table className={classes.table}>
                <UserTableHead headCells={headCells} key={"UserTableHead"} />
                <TableBody>
                  {dataRows?.map((row) => {
                    return (
                      <>
                        <TableRow
                          hover
                          onClick={() => handleDrawerOpen(row)}
                          tabIndex={-1}
                          key={row.name}
                        >
                          <TableCell>
                            <div className={classes.name}>
                              <Avatar src={row.imgUrl} />
                              <span className={classes.item}>{row.name}</span>
                              <br />
                              <span className={classes.subItem}>
                                {row.country}
                              </span>
                            </div>
                          </TableCell>
                          <TableCell>
                            <span className={classes.item}> {row.email}</span>
                            <br />
                            <span className={classes.subItem}>
                              {row.phoneNumber}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className={classes.item}>
                              {moment(row.regData).format("MMM DD , YYYY")}
                            </span>
                            <br />
                            <span className={classes.subItem}>
                              {moment(row.regHour, "HH:mm:ss").format("hh:mmA")}
                            </span>
                          </TableCell>
                          <TableCell>
                            <span className={classes.item}> {row.country}</span>
                            <br />
                            <span className={classes.subItem}>
                              {row.postalCode}
                            </span>
                          </TableCell>
                          <TemporaryDrawer open={open} data={userData!} />
                        </TableRow>
                      </>
                    );
                  })}
                </TableBody>
              </Table>
            </>
          )}
        </TableContainer>
        <CustomPagination
          pageNumber={pageNumber}
          handleDecremntPageNumber={handleDecremntPageNumber}
          handleIncremntPageNumber={handleIncremntPageNumber}
        />
      </Paper>
    </div>
  );
};
