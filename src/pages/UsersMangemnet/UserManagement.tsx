import Box from "@material-ui/core/Box";
import { Content, Layout, LeftSideMenu } from "components";
import { useUserManagement } from "./useUserManagement";
import { UsersTable } from "components/UsersTable/UsersTable";
import { DataFilterContext } from "Context";
import { headCells } from "./utils";

export const UserManagement = () => {
  const {
    paginationInfo,
    userRowData,
    loading,
    DataFilter,
    pageNumber,
    handleIncremntPageNumber,
    handleDecremntPageNumber,
  } = useUserManagement();

  return (
    <DataFilterContext.Provider value={DataFilter as any}>
      <Box>
        <Layout
          leftChild={<LeftSideMenu />}
          rightChild={
            <Content
              childComponent={
                <UsersTable
                  loading={loading}
                  headCells={headCells}
                  dataRows={userRowData as []}
                  pageNumber={pageNumber}
                  paginationInfo={paginationInfo!}
                  handleIncremntPageNumber={handleIncremntPageNumber}
                  handleDecremntPageNumber={handleDecremntPageNumber}
                />
              }
            />
          }
        />
      </Box>
    </DataFilterContext.Provider>
  );
};
