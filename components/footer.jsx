import "../styles/footer.css";

// Footer Component
const Footer = () => {
  return (
    <footer className='footer'>
      <p>Made By Foodies In Canada 🍁</p>
      <div className='link-container'>
        <a
          href='https://github.com/anthonyChuks1'
          target='_blank'
          rel='noopener noreferrer'
        >
          Anthony Anuebunwa
        </a>
        <a
          href='https://github.com/MichaelJGryzz'
          target='_blank'
          rel='noopener noreferrer'
        >
          Michael J. Gryschuk
        </a>
        <a
          href='https://github.com/missnhi'
          target='_blank'
          rel='noopener noreferrer'
        >
          Nhi Phan
        </a>
      </div>
      <span>
        © {new Date().getFullYear()} Recipe Roulette Canada. All rights
        reserved.
      </span>
    </footer>
  );
};

export default Footer;
