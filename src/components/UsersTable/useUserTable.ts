import { useState } from "react";
import { UserRowData } from "types";

export const useUserTable = () => {
  const [open, setOpen] = useState(false);
  const [userData, setUserData] = useState<UserRowData | undefined>();
  const [tempLastSelectedUser, setLastSelectedUser] = useState<
    UserRowData | undefined
  >();
  const handleDrawerOpen = (data: UserRowData) => {
    if (!open) {
      setLastSelectedUser(data);
      setUserData(data);
    } else {
      setUserData(tempLastSelectedUser);
    }
    setOpen(!open);
  };
  return{
    open,
    userData,
    handleDrawerOpen,
  }
};
