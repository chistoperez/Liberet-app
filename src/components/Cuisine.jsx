/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { BiRestaurant } from "react-icons/bi";
import { NavBarContext } from "../context/NavBarContext";

const Cuisine = ({ categories, setCategories }) => {
  const { active, setActive } = useContext(NavBarContext);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(false);

  const [showModal, setShowModal] = useState(false);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(
        "https://www.themealdb.com/api/json/v1/1/categories.php"
      );
      const json = await response.json();
      const meals = json.categories;

      setCategories(meals);

      setLoading(false);
      return meals;
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const openModal = () => {
    setShowModal(true);
  };

  return (
    <>
      <button
        className="mt-3  bg-primary-400 font-bold text-xl px-4 py-2 rounded-3xl  shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150  "
        type="button"
        onClick={openModal}
      >
        <div className=" flex flex-row gap-2">
          <BiRestaurant className="text-primary-200" size={25} />
          {active}
        </div>
      </button>
      {showModal ? (
        <>
          <div className="justify-center top-40 flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
            <div className="relative w-full my-6 ">
              {/*content*/}
              <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                {/*header*/}
                <div className="flex items-start justify-between p-5 border-b border-solid border-2 rounded-t">
                  <h3 className="text-2xl font-semibold flex flex-row gap-2">
                    <BiRestaurant size={30} className="text-primary-200" />
                    Elige un servicio
                  </h3>
                </div>
                {/*body*/}
                <div className="relative p-7 grid grid-cols-1 space-y-5 ">
                  {error && <p>Error al cargar los datos</p>}
                  {loading && <p>Cargando...</p>}
                  {categories.map((category) => (
                    <button
                      key={category.idCategory}
                      className="font-bold border-2 text-sm px-3 py-3 shadow-xl rounded-lg  hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150 "
                      type="button"
                      onClick={() => {
                        setActive(category.strCategory);
                        setShowModal(false);
                      }}
                    >
                      {category.strCategory}
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
          <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Cuisine;
