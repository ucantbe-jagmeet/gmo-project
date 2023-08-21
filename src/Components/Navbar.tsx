import React from "react";
import { navbarData } from "../utils/data";
import { Logo } from ".";
import { Link } from "react-router-dom";
import Button from "@mui/material/Button";
import { useNavigate } from "react-router-dom";

const Navbar: React.FC = () => {
  const navigate = useNavigate();
  const handleClick = () => {
    localStorage.clear();
    setTimeout(() => {
      navigate("/register");
    }, 1000);
  };
  return (
    <main className="h-16 bg-blue-200 flex justify-between items-center px-20">
      <div>
        <Logo />
      </div>
      <div className="flex gap-x-5">
        {navbarData.map((item) => {
          return (
            <Link to={item.href} key={item.id}>
              <h2 className="cursor-pointer hover:text-white hover:bg-blue-300 px-1 py-0.5 rounded transitio duration-200 text-gray-600">
                {item.title}
              </h2>
            </Link>
          );
        })}
      </div>
      <div>
        <Button variant="contained" size="small" onClick={handleClick}>
          sign out
        </Button>
      </div>
    </main>
  );
};

export default Navbar;
