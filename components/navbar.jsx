import "../styles/navbar.css";

// Navbar Component
const Navbar = () => {
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
      <div className='nav-right'>
        <a href='#signin' className='nav-link'>
          Sign In
        </a>
        <a href='#signup' className='nav-link'>
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
