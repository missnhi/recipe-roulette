import "../styles/navbar.css";

// Navbar Component

import "../styles/navbar.css";
import { cookies } from "next/headers";
import SignInModal from "./sign-in-modal";
import SignOutButton from "./sign-out-button";

const Navbar = async () => {
  const value = cookies();
  const emailCookie = await value.get("email");
  const email = emailCookie?.value || "";

  return (
    <nav className='nav'>
      <div className='nav-left'>
        {/* Left Side of Navbar */}
        <a href='#home' className='nav-link'>
          Home
        </a>
        <a href='#about' className='nav-link'>
          About
        </a>
        <a href='#contact' className='nav-link'>
          Contact
        </a>
      </div>

      {/* Centre Title of Navbar */}
      <div className='nav-title'>RECIPE ROULETTE</div>

      {/* Right Side of Navbar */}
      {console.log(`email cookie is ${email}`)}
      <div className='nav-right'>
        {email ? (
          <div className='nav-link'>
            {email} <SignOutButton />
          </div>
        ) : (
          <div>
            <div className='nav-link'>
              <a>
                <SignInModal />
              </a>
            </div>
            <div className='nav-link'>
              <a>Create Account</a>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
