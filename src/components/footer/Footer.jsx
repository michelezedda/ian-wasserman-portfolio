import "./footer.css";

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <>
      <footer>
        <div className="container">
          <p>© {currentYear} Ian Wasserman - All rights reserved</p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
