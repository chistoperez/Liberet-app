import React, { createContext, useState } from "react";

export const NavBarContext = createContext();

export const NavBarContextProvider = ({ children }) => {
  const [navbarActive, setNavbarActive] = useState(1);
  const [calendarActive, setCalendarActive] = useState(0);
  const interval = ["11:00 - 12:00 am", "1:00 - 2:00 pm", "2:00 - 3:00 pm"];
  const [time, setTime] = useState(interval[0]);
  const day = new Date().getDay();
  const date = new Date().getDate();
  const weekday = ["Dom", "Lun", "Mar", "Mié", "Jue", "Vie", "Sáb"];
  const actualWeekday = [...weekday.slice(day), ...weekday.slice(0, day)];
  const [active, setActive] = useState("Beef");
  return (
    <NavBarContext.Provider
      value={{
        navbarActive,
        setNavbarActive,
        calendarActive,
        setCalendarActive,
        day,
        date,
        actualWeekday,
        interval,
        time,
        setTime,
        active,
        setActive,
      }}
    >
      {children}
    </NavBarContext.Provider>
  );
};
