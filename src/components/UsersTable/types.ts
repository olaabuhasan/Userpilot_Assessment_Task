import { HeadCell, Info, UserRowData } from "types";

export type UsersTableProps= {
    dataRows: UserRowData[];
    headCells: HeadCell[];
    paginationInfo: Info;
    pageNumber: number;
    loading: boolean;
    handleIncremntPageNumber: any;
    handleDecremntPageNumber: any;
}