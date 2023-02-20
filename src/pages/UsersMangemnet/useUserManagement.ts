import axios from "axios";
import { useEffect, useState } from "react";
import { Info, Result, UserRowData } from "../../types";

export const useUserManagement = () => {
  const [loading, setLoading] = useState(false);
  const [userRowData, setUserRowData] = useState<UserRowData[]>([]);
  const [paginationInfo, setPaginationInfo] = useState<Info>();
  const [genderSearchText, setGenderSearchText] = useState<string>("");
  const [natSearchText, setNatSearchText] = useState<string>("");
  const [pageNumber, setPageNumber] = useState<number>(1);
  
  const handleIncremntPageNumber = () => {
    setPageNumber(pageNumber + 1);
  };
  const handleDecremntPageNumber = () => {
    if (pageNumber <= 1) {
      setPageNumber(1);
    } else {
      setPageNumber(pageNumber - 1);
    }
  };
  useEffect(() => {
    setLoading(true);
    axios
      .get(
        `https://randomuser.me/api?results=${8}&page=${pageNumber}&nat=${natSearchText}&gender=${genderSearchText}`
      )
      .then(function (response) {
        let data = response;

        let tempDataWrapper = data?.data?.results?.map((val: Result) => ({
          name: val?.name?.first + val?.name?.last,
          email: val?.email,
          thumbnail: val?.picture?.thumbnail,
          phoneNumber: val?.phone,
          regData: val?.registered?.date,
          regHour: val?.registered?.date,
          country: val?.location?.country,
          postalCode: val?.location?.postcode,
          imgUrl: val?.picture?.large,
          location: val?.location?.street?.name,
        }));
        setLoading(false);
        setPaginationInfo(data?.data?.info);

        setUserRowData(tempDataWrapper as UserRowData[]);
      })
      .catch(function (error) {
        console.log(error);
      })
      .finally(function () {});
  }, [pageNumber, natSearchText, genderSearchText]);

  const DataFilter = {
    genderSearchText: genderSearchText,
    natSearchText: natSearchText,
    setGenderSearchTextFromContext: (genderTextValue: string) => {
      setGenderSearchText(genderTextValue);
    },
    setNatSearchTextContext: (natTextValue: string) => {
      setNatSearchText(natTextValue);
    },
  };
  return {
    paginationInfo,
    loading,
    userRowData,
    pageNumber,
    DataFilter,
    handleIncremntPageNumber,
    handleDecremntPageNumber,
  };
};
