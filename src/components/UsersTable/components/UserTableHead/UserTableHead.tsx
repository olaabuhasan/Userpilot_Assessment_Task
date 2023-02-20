import TableCell from "@material-ui/core/TableCell";
import TableHead from "@material-ui/core/TableHead";
import TableRow from "@material-ui/core/TableRow";
import { HeadCell } from "../../../../types";
import { useUserTableHead } from "./style";

interface EnhancedTableProps {
  headCells: HeadCell[];
}

export const UserTableHead = (props: EnhancedTableProps) => {
  const { headCells } = props;
  const classes = useUserTableHead();
  return (
    <TableHead className={classes.head}>
      <TableRow>
        {headCells.map((headCell) => (
          <TableCell>{headCell.label}</TableCell>
        ))}
      </TableRow>
    </TableHead>
  );
};
