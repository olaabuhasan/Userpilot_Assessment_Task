import { createContext } from "react";

export const DataFilterContext = createContext({
  genderSearchText: "",
  natSearchText: "",
  setGenderSearchTextFromContext: () => {},
  setNatSearchTextContext: () => {},
});
