'use client'
import Link from "next/link";
import React, { useState } from "react";
import { Spin as Hamburger } from "hamburger-react";
import { motion } from "motion/react";
import { usePathname } from "next/navigation";

export default function Navbar() {
    const user={email:"admin@gmail.com"}
    const loading = false
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const pathname = usePathname();
  const links = (
    <>
      <li
        data-aos="fade-down"
        data-aos-duration="200"
        data-aos-easing="ease-in-out"
        data-aos-once="true"
      >
        <Link
          href={"/"}
          aria-label="Home"
          title="Home"
          className={`${
            pathname === "/"
              ? "flex items-center gap-1 btn btn-primary"
              : "flex btn btn-ghost hover:border-primary hover:border-2 hover:bg-base-100 hover:text-primary items-center gap-1"
          }`}
        >
          Home
        </Link>
      </li>

      {user && (
        <>
          <li
            data-aos="fade-down"
            data-aos-duration="1000"
            data-aos-easing="ease-in-out"
            data-aos-once="true"
          >
            <Link
              href="/dashboard/add-product"
              aria-label="Add Product"
              title="Add Product"
              className={`${
                pathname === "/dashboard/add-product"
                  ? "flex items-center gap-1 btn btn-primary"
                  : "flex btn btn-ghost hover:border-primary hover:border-2 hover:bg-base-100 hover:text-primary items-center gap-1"
              }`}
            >
              Add Product
            </Link>
          </li>
        </>
      )}
    </>
  );

  const link2 = (
    <>
      {user ? (
        <>
          {/* User Avatar */}
          <li>
            <img
              className="w-10 h-10 p-1 rounded-full ring-2 ring-primary dark:ring-primary"
              src={user?.photoURL}
              referrerPolicy="no-referrer"
              alt="User avatar"
            />
          </li>
          <li>
            <button
              className="flex items-center gap-1 btn btn-primary"
            >
              Logout
            </button>
          </li>
          {/* Dropdown Toggle Button */}
          {/* <li className="relative -ml-3">
            <details className="dropdown dropdown-end">
              <summary
                onClick={() => setIsMenuOpen2(!isMenuOpen2)}
                className="btn btn-ghost btn-primary btn-sm rounded-full text-primary hover:text-white p-1"
              >
                {isMenuOpen2 ? (
                  <IoIosArrowDropupCircle size={25} />
                ) : (
                  <IoIosArrowDropdownCircle size={25} />
                )}
              </summary>
              <motion.ul
                initial={{ opacity: 0, y: -50 }}
                animate={
                  isMenuOpen2 ? { opacity: 1, y: 0 } : { y: -50, opacity: 0 }
                }
                className="p-3 space-y-2 mt-2 shadow menu dropdown-content bg-base-100 border-2 border-primary rounded-box w-40 z-50"
              >
                <li>
                  <NavLink
                    onClick={() => setIsMenuOpen2(false)}
                    className={({ isActive }) =>
                      isActive
                        ? "flex items-center gap-1 btn btn-primary"
                        : "flex btn btn-ghost hover:border-primary hover:border-2 hover:bg-base-100 hover:text-primary items-center gap-1"
                    }
                    to="/dashboard/home"
                  >
                    Dashboard
                  </NavLink>
                </li>
                <li>
                  <button
                    className="flex items-center gap-1 btn btn-primary"
                    onClick={handleLogOut}
                  >
                    Logout
                  </button>
                </li>
              </motion.ul>
            </details>
          </li> */}
        </>
      ) : (
        <>
          <li>
            <Link
              href="/login"
              className="hidden lg:flex  btn btn-outline btn-primary text-primary border-3 hover:text-white"
            >
              Login
            </Link>
          </li>
          <li>
            <Link href="/register" className="hidden lg:flex btn btn-primary">
              Register
            </Link>
          </li>
        </>
      )}
    </>
  );
  return (
    <div className="bg-gray-800 text-white border-b-3 border-b-primary ">
      <div className="px-4 py-3 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 ">
        <div className="relative flex items-center justify-between">
          <div data-aos="fade-right" className="text-2xl">
            <Link href="/" aria-label="Home" title="Home">
              <h1 className="text-2xl font-bold">
                💻 Next<span className="text-primary">PC</span>
              </h1>
            </Link>
          </div>
          <ul className="items-center hidden space-x-3 lg:flex">
            {loading ? (
              <div className="flex  mx-auto items-center justify-center text-center">
                <div className="mx-auto text-center w-fit">
                  {/* <BarLoader /> */}
                </div>
              </div>
            ) : (
              links
            )}
          </ul>
          <ul
            data-aos="fade-left"
            className="items-center hidden space-x-3 lg:flex"
          >
            {link2}
          </ul>

          {/* phone */}
          <div className="relative lg:hidden">
            <div className="flex items-center">
              <Hamburger
                toggled={isMenuOpen}
                toggle={setIsMenuOpen}
                size={25}
                color="red"
              ></Hamburger>
            </div>

            {isMenuOpen && (
              <motion.div
                animate={{
                  x: [100, 0],
                  transition: { duration: 0.3 },
                  opacity: 1,
                }}
                initial={{ opacity: 0 }}
                className="absolute right-0 z-40 overflow-y-visible top-10"
              >
                <div className="h-full p-3 space-y-2 w-60 text-white bg-gray-600 rounded-md">
                  <div className="flex items-center p-2 space-x-4">
                    <div className="relative w-10 h-10 overflow-hidden bg-gray-200 rounded-full">
                      {user?.photoURL ? (
                        <img
                          className="w-12 h-12 p-1 rounded-full ring-2 ring-gray-300 dark:ring-gray-500"
                          src={user?.photoURL}
                          alt="Bordered avatar"
                        />
                      ) : (
                        <Link href="/login">
                          <svg
                            className="absolute w-12 h-12  text-primary -left-1"
                            fill="currentColor"
                            viewBox="0 0 20 20"
                            xmlns="http://www.w3.org/2000/svg"
                          >
                            <path
                              fill-rule="evenodd"
                              d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z"
                              clip-rule="evenodd"
                            ></path>
                          </svg>
                        </Link>
                      )}
                    </div>

                    <div>
                      <h2 className="text-lg text-white font-semibold">
                        {user?.displayName}
                      </h2>
                      <span className="flex items-center space-x-1">
                        <p className="text-xs hover:underline text-white/80 text-">
                          {user?.email}
                        </p>
                      </span>
                    </div>
                  </div>
                  <div className="divide-y dark:divide-gray-300">
                    <ul className="pt-2 pb-4 space-y-1 text-sm ">{links}</ul>
                    <ul className="pt-4 pb-2 space-y-1 text-sm">
                      {user ? (
                        <div className="flex items-center justify-around">
                          <li >
                            <button className="flex btn btn-primary w-full">
                              Log Out
                            </button>
                          </li>
                        </div>
                      ) : (
                        <div className="flex items-center justify-around">
                          <li>
                            <Link
                              href={"/login"}
                              aria-label="Login"
                              title="Login"
                              className="flex btn btn-outline text-base border-primary"
                            >
                              Login
                            </Link>
                          </li>
                          <li>
                            <Link
                              href={"/register"}
                              aria-label="Register"
                              title="Register"
                              className="flex btn btn-primary"
                            >
                              Register
                            </Link>
                          </li>
                        </div>
                      )}
                    </ul>
                  </div>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

// "use client";

// import Link from "next/link";

// export default function Navbar() {
//   return (
//     <div className="navbar bg-base-100 shadow-md px-4">
//       {/* Left Section - Logo */}
//       <div className="flex-1">
//         <Link href="/" className="text-xl font-bold text-primary">
//           💻 CompuMart
//         </Link>
//       </div>

//       {/* Center Section - Links (hidden on small screens) */}
//       <div className="flex">
//         <ul className="menu menu-horizontal px-1">
//           <li>
//             <Link href="/">Home</Link>
//           </li>
//           <li>
//             <Link href="/dashboard/products">Products</Link>
//           </li>
         
//         </ul>
//       </div>

//       {/* Right Section - Auth Button */}
//       <div className="flex-none">
//         {/* Later we will replace with NextAuth login/logout */}
//         <button className="btn btn-primary">Login</button>
//       </div>
//     </div>
//   );
// }

