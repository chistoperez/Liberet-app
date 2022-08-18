import { useContext } from "react";
import NavBar from "../components/NavBar";
import { NavBarContext } from "../context/NavBarContext";
import { CgProfile } from "react-icons/cg";

const Profile = () => {
  const { date, actualWeekday, calendarActive, setNavbarActive, active, time } =
    useContext(NavBarContext);
  setNavbarActive(2);
  return (
    <>
      <div className="bg-secondary-100/30 h-screen flex flex-col items-center justify-center ">
        <CgProfile size={200} className="text-secondary-100  " />
        <h1 className="text-secondary-100 text-center text-5xl pt-10 font-bold">
          Datos seleccionados
        </h1>
        <p className="text-secondary-100 text-center text-2xl pt-10">
          Día: {actualWeekday[calendarActive]} - {date + calendarActive}
        </p>
        <p className="text-secondary-100 text-center text-2xl pt-10">
          Horario de entrega: {time}
        </p>
        <p className="text-secondary-100 text-center text-2xl pt-10">
          Servicio: {active}
        </p>
        <NavBar />
      </div>
    </>
  );
};

export default Profile;
