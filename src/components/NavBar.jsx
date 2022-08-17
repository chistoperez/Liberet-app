import { MdOutlineShoppingCart } from "react-icons/md";
import { CgProfile } from "react-icons/cg";
import { AiOutlineAppstore } from "react-icons/ai";

import { Link } from "react-router-dom";
import { useContext } from "react";
import { NavBarContext } from "../context/NavBarContext";

const NavBar = () => {
  const { navbarActive, setNavbarActive } = useContext(NavBarContext);
  return (
    <nav className="bg-secondary-300 py-6 fixed w-full z-20 bottom-0 left-0 border-b border-t">
      <div className="container flex flex-wrap justify-center mx-auto gap-40">
        <Link className="nav-link" to="/cart">
          <MdOutlineShoppingCart
            size={40}
            onClick={() => setNavbarActive(0)}
            className={
              navbarActive === 0
                ? "text-primary-100"
                : "text-primary-300 text-opacity-30"
            }
          />
        </Link>
        <Link className="nav-link" to="/">
          <AiOutlineAppstore
            size={40}
            onClick={() => setNavbarActive(1)}
            className={
              navbarActive === 1
                ? "text-primary-100"
                : "text-primary-300 text-opacity-30"
            }
          />
        </Link>
        <Link className="nav-link" to="/profile">
          <CgProfile
            size={40}
            onClick={() => setNavbarActive(2)}
            className={
              navbarActive === 2
                ? "text-primary-100"
                : "text-primary-300 text-opacity-30"
            }
          />
        </Link>
      </div>
    </nav>
  );
};

export default NavBar;
