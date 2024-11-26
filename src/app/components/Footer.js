const Footer = () => {
  const currentYear = new Date().getFullYear();
  const experienceYears = currentYear - 2020; // Replace 2020 with your actual start year

  return (
    <footer className="footer">
      <p>
        <strong>Adnan Ali</strong> | {experienceYears} years of experience
      </p>
      <p>© {currentYear} Adnan Ali. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
