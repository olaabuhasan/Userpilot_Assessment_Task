import { Route, Routes } from "react-router-dom";
import { UserManagement } from "pages";
import { USERS } from "./Constants";
import { EmptyPage } from "pages/EmptyPage/EmptyPage";

export const RouterConfig = () => {
  return (
    <Routes>
      <Route path={USERS} element={<UserManagement />} />
      <Route path={"*"} element={<EmptyPage />} />
    </Routes>
  );
};
