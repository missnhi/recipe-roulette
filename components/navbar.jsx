// Navbar Component
const Navbar = () => {
  return (
    <nav className='bg-custom-gray-700 text-gray-200 fixed w-full flex justify-between py-4 px-4'>
      <div className='flex'>
        {/* Left Side of Navbar */}
        <a
          href='#home'
          className='text-gray-200 text-center px-4 py-3 hover:text-gray-300 transition-colors'
        >
          Home
        </a>
        <a
          href='#about'
          className='text-gray-200 text-center px-4 py-3 hover:text-gray-300 transition-colors'
        >
          About
        </a>
        <a
          href='#contact'
          className='text-gray-200 text-center px-4 py-3 hover:text-gray-300 transition-colors'
        >
          Contact
        </a>
      </div>

      {/* Centre Title of Navbar */}
      <div className='flex items-center text-gray-200 text-3xl font-extrabold text-center px-4 py-3'>
        RECIPE ROULETTE
      </div>

      {/* Right Side of Navbar */}
      <div className='flex'>
        <a
          href='#signin'
          className='text-[#f2f2f2] text-center px-4 py-3 hover:text-gray-300 transition-colors'
        >
          Sign In
        </a>
        <a
          href='#signup'
          className='text-[#f2f2f2] text-center px-4 py-3 hover:text-gray-300 transition-colors'
        >
          Sign Up
        </a>
      </div>
    </nav>
  );
};

export default Navbar;
