// Footer Component
const Footer = () => {
  return (
    <footer className='bg-custom-gray-700 text-gray-200 text-center py-5 mt-5 fixed bottom-0 left-0 w-full'>
      <p>Made In Canada 🍁</p>
      <div className='flex justify-center space-x-5 mt-3'>
        <a
          href='#'
          className='text-gray-200 hover:text-gray-300 transition-colors'
        >
          Link 1
        </a>
        <a
          href='#'
          className='text-gray-200 hover:text-gray-300 transition-colors'
        >
          Link 2
        </a>
        <a
          href='#'
          className='text-gray-200 hover:text-gray-300 transition-colors'
        >
          Link 3
        </a>
      </div>
    </footer>
  );
};

export default Footer;
