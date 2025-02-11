const Footer = () => {
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - 2020; // Replace 2020 with your actual start year

  return (
    <footer className="footer">
      <p>
        <strong>Jibran Nakhwa</strong> | {experienceYears} years of experience
      </p>
      <p>© {currentYear} Jibran Nakhwa. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
