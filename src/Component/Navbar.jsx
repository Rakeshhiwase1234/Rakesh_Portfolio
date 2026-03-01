import React,{ useState } from "react";
import { NavLink } from "react-router-dom";
import { Menu, X, Code2 } from "lucide-react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className=" p-4 shadow-md">
      <div className="flex justify-between items-center">
        <div className="flex items-center gap-2 cursor-pointer select-none group">
          <Code2
            size={35}
            className="text-blue-800 drop-shadow-[0_0_8px_#3b82f6] group-hover:drop-shadow-[0_0_16px_#60a5fa] transition-all duration-300"
          />
        </div>

        <button
          className="text-white md:hidden"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>

        <div className="hidden md:flex space-x-6">
          {["/", "/skills", "/projects", "/achievement", "/contact"].map(
            (path, i) => {
              const names = [
                "About",
                "Skills",
                "Projects",
                "Achievement",
                "Contact",
              ];
              return (
                <NavLink
                  key={path}
                  to={path}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-blue-900 font-semibold transition duration-300
                  ${isActive ? "text-blue-300" : "hover:text-blue-300"}
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-2px
                  after:bg-blue-900 after:transition-all after:duration-300
                  hover:after:w-full
                  ${isActive ? "after:w-full" : ""}`
                  }
                >
                  {names[i]}
                </NavLink>
              );
            }
          )}
        </div>
      </div>

      {isOpen && (
        <div className="flex flex-col mt-4 space-y-2 md:hidden">
          {["/", "/skills", "/projects", "/achievement", "/contact"].map(
            (path, i) => {
              const names = [
                "About",
                "Skills",
                "Projects",
                "Achievement",
                "Contact",
              ];
              return (
                <NavLink
                  key={path}
                  to={path}
                  onClick={() => setIsOpen(false)}
                  className={({ isActive }) =>
                    `relative px-4 py-2 text-blue-900  font-semibold transition duration-100
                  ${isActive ? "text-blue-900" : "hover:text-blue-300"}
                  after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-0 after:h-2px
                  after:bg-blue-900 after:transition-all after:duration-300
                  hover:after:w-full
                  ${isActive ? "after:w-full" : ""}`
                  }
                >
                  {names[i]}
                </NavLink>
              );
            }
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;