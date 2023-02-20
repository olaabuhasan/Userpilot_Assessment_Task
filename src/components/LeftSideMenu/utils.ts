import OverView from "assets/svgs/overView.svg";
import Tickets from "assets/svgs/tickets.svg";
import Ideas from "assets/svgs/ideas.svg";
import Users from "assets/svgs/users.svg";
import { useNavigate } from "react-router-dom";
export const useUtilData = () => {
  const navigate = useNavigate();
  const LeftMenuData = [
    {
      text: "Overview",
      img: OverView,
      onclick: () => {
        navigate("/empty-page");
      },
    },
    {
      text: "Tickets",
      img: Tickets,
      onclick: () => {
        navigate("/empty-page");
      },
    },
    {
      text: "Ideas",
      img: Ideas,
      onclick: () => {
        navigate("/empty-page");
      },
    },
    {
      text: "Users",
      img: Users,
      onclick: () => {
        navigate("/users");
      },
    },
  ];

  return {LeftMenuData};
};
