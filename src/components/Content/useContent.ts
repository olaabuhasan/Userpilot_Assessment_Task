import axios from "axios";
import { useEffect, useState } from "react";
export const useContent = () => {
  const [person, setPerson] = useState<any>();
  const [loading, setLoading] = useState<boolean>(false);
  useEffect(() => {
    setLoading(true);
    axios
      .get("https://randomuser.me/api/")
      .then((res) => {
        setPerson(res?.data);
        setLoading(false);
      })
      .catch((error) => {
        console.log(error);
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);
  console.log("person: ", person?.results?.[0]);
  const userData = {
    firstName: person?.results?.[0]?.name?.first,
    lastName: person?.results?.[0]?.name?.last,
    picture: person?.results?.[0]?.picture?.thumbnail,
  };

  return { person, userData, loading };
};
