import { useContext, useState } from "react";
import { FiClock } from "react-icons/fi";
import { NavBarContext } from "../context/NavBarContext";

const TimeInterval = () => {
  const { time, interval, setTime } = useContext(NavBarContext);
  const [showModal, setShowModal] = useState(false);

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <button
        className="mt-3 bg-primary-400 font-bold text-xl px-4 py-2 rounded-3xl shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
        type="button"
        onClick={openModal}
      >
        <div className=" flex flex-row gap-2 ">
          <FiClock className="text-primary-200" size={25} />
          {time}
        </div>
      </button>
      {showModal ? (
        <>
          <div className="justify-center top-40 flex fixed inset-0 z-50 outline-none focus:outline-none ">
            <div className="relative w-full my-6 ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-primary-400 border-primary-400 outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-primary-400 rounded-t">
                  <h3 className="text-3xl font-semibold flex flex-row gap-2">
                    <FiClock
                      size={30}
                      className="text-primary-200 flex flex-row gap-2 "
                    />{" "}
                    Elige un horario de entrega
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-6 grid grid-cols-1 space-y-6 ">
                  {interval.map((time, index) => (
                    <button
                      key={index}
                      className="font-bold border-2 text-sm px-6 py-3 rounded-xl shadow-xl hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 grid grid-cols-1 "
                      type="button"
                      onClick={() => {
                        setTime(time);
                        setShowModal(false);
                      }}
                    >
                      {time}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-primary-300"></div>
        </>
      ) : null}
    </>
  );
};

export default TimeInterval;
