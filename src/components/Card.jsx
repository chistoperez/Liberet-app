/* eslint-disable react-hooks/exhaustive-deps */
import React, { useContext, useEffect, useState } from "react";
import { FiClock } from "react-icons/fi";
import { NavBarContext } from "../context/NavBarContext";

const Card = () => {
  const { active } = useContext(NavBarContext);
  const [dishes, setDishes] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(false);

  useEffect(() => {
    getData();
  }, [active]);

  const getData = async () => {
    setLoading(true);
    setError(false);
    try {
      const response = await fetch(
        `https://www.themealdb.com/api/json/v1/1/filter.php?c=${active}`
      );
      const json = await response.json();
      const meals = json.meals;

      const detailedDishes = await Promise.all(
        meals.map(async (meal) => {
          const res = await fetch(
            `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${meal.idMeal}`
          );
          const json = await res.json();
          const detail = json.meals[0];
          return {
            ...meal,
            strArea: detail.strArea,
            strTags: detail.strTags,
          };
        })
      );

      setDishes(detailedDishes);

      setLoading(false);
    } catch (error) {
      setError(true);
    }
    setLoading(false);
  };

  const parseThousand = (num) => {
    return `$ ${num.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",")}.00 MXN`;
  };

  const splitArray = (array) => {
    return array ? array.split(",", 1) : null;
  };
  return (
    <>
      {error && <p>Something went wrong ...</p>}
      {loading ? (
        <p>Loading ...</p>
      ) : (
        <div className="grid grid-cols-2 content-center pl-16 pr-16 gap-3 pb-28 ">
          {dishes.map((dish) => (
            //

            <div
              key={dish.idMeal}
              className="relative bg-primary-400 rounded-2xl"
            >
              <img
                src={dish.strMealThumb}
                alt={dish.strMeal}
                className="rounded-2xl  w-full"
              />
              {dish.strTags ? (
                <p className="absolute text-2xl text-primary-100 text-bold bg-secondary-400 rounded-xl top-5 right-5 p-2 ">
                  {splitArray(dish.strTags)}
                </p>
              ) : null}

              <div className="absolute text-2xl bg-primary-300/50  w-full rounded-xl bottom-12 p-2">
                <p className="text-primary-400">{dish.strArea}</p>
                <p className="text-primary-200 ">{dish.strMeal}</p>
              </div>
              <p className=" flex flex-row justify-between gap-2 p-1 shadow-2xl rounded-xl text-right bg-primary-400 text-2xl align-middle font-bold ">
                <FiClock className="text-primary-200 " size={40} />
                {parseThousand(dish.idMeal)}
              </p>
            </div>
          ))}
        </div>
      )}
    </>
  );
};

export default Card;
