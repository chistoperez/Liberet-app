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
      <div className="bg-secondary-100/30 h-screen flex flex-col items-center justify-center text-secondary-100 text-center text-2xl pt-10">
        <CgProfile size={200} className=" " />
        <h1 className=" text-5xl  font-bold pt-10">Datos seleccionados</h1>
        <p className="  text-3xl font-bold pt-10">Día:</p>
        <p className="p-5">
          {actualWeekday[calendarActive]} - {date + calendarActive}
        </p>
        <p className="  text-3xl font-bold pt-10">Horario de entrega: </p>
        <p className="p-5">{time}</p>
        <p className=" text-3xl font-bold pt-10">Servicio: </p>
        <p className="p-5">{active}</p>
        <NavBar />
      </div>
    </>
  );
};

export default Profile;
