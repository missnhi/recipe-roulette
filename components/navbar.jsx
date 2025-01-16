// Navbar Component

import "../styles/navbar.css";
import { cookies } from "next/headers";
import SignInModal from "./sign-in-modal";

const Navbar = async () => {
  const value = cookies();
  const emailCookie = await value.get("email");
  const email = emailCookie?.value || "";

  const onSignOut = async () => {
    (await cookies()).delete('email')
  }
  return (
    <nav className="bg-custom-gray-700 text-gray-200 fixed w-full flex justify-between py-4 px-4">
      <div className="flex">
        {/* Left Side of Navbar */}
        <a
          href="#home"
          className="text-gray-200 text-center px-4 py-3 hover:text-gray-300 transition-colors"
        >
          Home
        </a>
        <a
          href="#about"
          className="text-gray-200 text-center px-4 py-3 hover:text-gray-300 transition-colors"
        >
          About
        </a>
        <a
          href="#contact"
          className="text-gray-200 text-center px-4 py-3 hover:text-gray-300 transition-colors"
        >
          Contact
        </a>
      </div>

      {/* Centre Title of Navbar */}
      <div className=" nav-title flex items-center text-gray-200 text-3xl font-extrabold text-center px-4 py-3">
        RECIPE ROULETTE
      </div>

      {/* Right Side of Navbar */}
      {console.log(`email cookie is ${email}`)}
      {email ? (
        <div className="flex">
           {email}
        </div>
      ) : (
        <div className="flex">
          <a
            
            className="text-[#f2f2f2] text-center px-4 py-3 hover:text-gray-300 transition-colors"
          >
            <SignInModal/>
          </a>
          <a
            
            className="text-[#f2f2f2] text-center px-4 py-3 hover:text-gray-300 transition-colors"
          >
            Sign Up
          </a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
