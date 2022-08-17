import { useContext } from "react";
import NavBar from "../components/NavBar";
import { NavBarContext } from "../context/NavBarContext";

const Profile = () => {
  const { date, actualWeekday, calendarActive, setNavbarActive, active, time } =
    useContext(NavBarContext);
  setNavbarActive(2);
  return (
    <>
      <div>
        {actualWeekday[calendarActive]}- {date + calendarActive}
      </div>
      <div>{time}</div>
      <div>{active}</div>

      <NavBar />
    </>
  );
};

export default Profile;
