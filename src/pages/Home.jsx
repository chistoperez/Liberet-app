import { useState } from "react";
import Button3 from "../components/Button3";
import Calendar from "../components/Calendar";
import Card from "../components/Card";
import Cuisine from "../components/Cuisine";
import NavBar from "../components/NavBar";
import SelectLocation from "../components/SelectLocation";
import TimeInterval from "../components/TimeInterval";

const Home = () => {
  const [categories, setCategories] = useState([]);

  return (
    <>
      <NavBar />
      <SelectLocation />
      <hr />
      <Calendar />
      <div className=" bg-gradient-to-b from-secondary-300/40 to-primary-400 w-full ">
        <div className=" mt-3 mb-11 flex justify-center ">
          <TimeInterval />
          <Cuisine categories={categories} setCategories={setCategories} />
          <Button3 />
        </div>
        <Card />
      </div>
    </>
  );
};

export default Home;
