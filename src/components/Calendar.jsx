import React, { useContext } from "react";
import { NavBarContext } from "../context/NavBarContext";

const Calendar = () => {
  const { calendarActive, setCalendarActive, date, actualWeekday } =
    useContext(NavBarContext);

  const toggleClass = (index) => {
    setCalendarActive(index);
  };

  return (
    <div className="grid grid-cols-7 text-center justify-items-center pl-8 pr-8 mb-1">
      {actualWeekday.map((day, index) => (
        <div key={index}>
          <div>{day}</div>
          <div
            className={
              calendarActive === index
                ? "bg-primary-100 rounded-full text-primary-400"
                : null
            }
            onClick={() => toggleClass(index)}
          >
            {date + index}
          </div>
        </div>
      ))}
    </div>
  );
};

export default Calendar;
