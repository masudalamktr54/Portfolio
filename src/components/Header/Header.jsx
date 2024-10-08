import React, { useState, useEffect } from "react";
import { NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBars, faXmark } from "@fortawesome/free-solid-svg-icons";
import AOS from "aos";
import "aos/dist/aos.css";

function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  // for AOS animation
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  return (
    // <header className="shadow sticky z-50 top-0 bg-[#021542]">
    <header
      className={` ${
        menuOpen
          ? " sticky z-50 top-0 bg-transparent border-0"
          : "shadow sticky z-50 top-0 bg-[#021542] transition-all duration-5000 ease-in-out transform"
      }`}
    >
      <nav className=" px-6 py-2.5 lg:flex lg:justify-around lg:items-center">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-2xl font-bold font-popins">Masud Alam</h2>
          </div>

          <div className="lg:hidden z-20">
            <button onClick={toggleMenu} className="   focus:outline-none">
              {menuOpen ? (
                <FontAwesomeIcon className="realtive z-10" icon={faXmark} />
              ) : (
                <FontAwesomeIcon icon={faBars} />
              )}
            </button>
          </div>
        </div>

        <div
          className={`flex justify-end   ${
            menuOpen ? "block" : "hidden inset-40"
          } lg:block`}
        >
          <ul className="flex flex-col lg:flex-row items-center bg-[#00091b] lg:bg-transparent px-4 pb-4 pt-6 lg:py-0 space-y-8 lg:space-y-0 lg:space-x-16 relative lg:static inset-6 -top-7 z-10">
            <li>
              <NavLink
                to="/"
                onClick={menuOpen ? toggleMenu : null}
                smooth={true}
                duration={500}
                spy={true}
                exact="true"
                offset={-80}
                className={({ isActive }) =>
                  `duration-200 ${
                    isActive
                      ? "text-[#FFC107] lg:border-b border-[#FFC107]"
                      : "text-[#dedad6]"
                  }  hover:text-[#FFA000]`
                }
              >
                Home
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/about"
                onClick={menuOpen ? toggleMenu : null}
                smooth={true}
                duration={1000}
                spy={true}
                exact="true"
                offset={-80}
                className={({ isActive }) =>
                  `duration-200 ${
                    isActive
                      ? "text-[#FFC107] lg:border-b border-[#FFC107]"
                      : "text-[#dedad6]"
                  }  hover:text-[#FFA000]`
                }
              >
                About
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/resume"
                onClick={menuOpen ? toggleMenu : null}
                className={({ isActive }) =>
                  `duration-200 ${
                    isActive
                      ? "text-[#FFC107] lg:border-b border-[#FFC107]"
                      : "text-[#dedad6]"
                  }  hover:text-[#FFA000]`
                }
              >
                Resume
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/contact"
                onClick={menuOpen ? toggleMenu : null}
                className={({ isActive }) =>
                  `duration-200 ${
                    isActive
                      ? "text-[#FFC107] lg:border-b border-[#FFC107]"
                      : "text-[#dedad6]"
                  }  hover:text-[#FFA000]`
                }
              >
                Contact
              </NavLink>
            </li>
            <li>
              <NavLink
                to="/MessageMe"
                onClick={menuOpen ? toggleMenu : null}
                className={({ isActive }) =>
                  `duration-200 ${
                    isActive
                      ? "text-[#FFC107] lg:border-b border-[#FFC107]"
                      : "text-[#dedad6]"
                  }  hover:text-[#FFA000]`
                }
              >
                Message Me
              </NavLink>
            </li>
          </ul>
        </div>
      </nav>
      <div
        className={`${menuOpen ? "bg-transparent" : "border-gradient"}`}
      ></div>
    </header>
  );
}

export default Header;

// =================================================================

// import React, { useState } from "react";
// import { NavLink } from "react-router-dom";

// function Header() {
//   const [menuOpen, setMenuOpen] = useState(false);

//   const toggleMenu = () => {
//     setMenuOpen(!menuOpen);
//   };

//   return (
//     <header className=" shadow sticky z-50 top-0 bg-[#021542]">
//       <nav className="flex justify-between items-center px-4 py-2.5">
//         <div>
//           <h2 className="text-2xl font-bold font-popins text-white">
//             Masud Alam
//           </h2>
//         </div>

//         <div className={`lg:flex ${menuOpen ? "block" : "hidden"} lg:block`}>
//           <ul className="flex flex-col lg:flex-row space-y-4 lg:space-y-0 lg:space-x-16">
//             <li>
//               <NavLink className="text-white" to="/">
//                 Home
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className="text-white" to="/about">
//                 About
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className="text-white" to="/github">
//                 Github
//               </NavLink>
//             </li>
//             <li>
//               <NavLink className="text-white" to="/contact">
//                 Contact
//               </NavLink>
//             </li>
//           </ul>
//         </div>

//         <div className="lg:hidden">
//           <button onClick={toggleMenu} className="   focus:outline-none">
//             {menuOpen ? (
//               <svg
//                 className="w-6 h-6 text-red-500 bg-green-700"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M6 18L18 6M6 6l12 12"
//                 ></path>
//               </svg>
//             ) : (
//               <svg
//                 className="w-6 h-6"
//                 fill="none"
//                 stroke="currentColor"
//                 viewBox="0 0 24 24"
//                 xmlns="http://www.w3.org/2000/svg"
//               >
//                 <path
//                   strokeLinecap="round"
//                   strokeLinejoin="round"
//                   strokeWidth="2"
//                   d="M4 6h16M4 12h16M4 18h16"
//                 ></path>
//               </svg>
//             )}
//           </button>
//         </div>
//       </nav>

//       <div className="border-gradient"></div>
//     </header>
//   );
// }

// export default Header;
