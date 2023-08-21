import React from "react";
import { navbarData } from "../utils/data";
import { Logo } from ".";
import { Link } from "react-router-dom";

const Navbar: React.FC = () => {
  return (
    <main className="h-16 bg-blue-200 flex justify-between items-center px-40">
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
    </main>
  );
};

export default Navbar;
