import "./pla.css";
import Navbar from "../../components/navbar/Navbar";
import Footer from "../../components/footer/Footer";
import { Helmet } from "react-helmet";
import { useEffect } from "react";

function Pla() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ian Wasserman Portfolio - PLA</title>
        <link rel="canonical" href="https://ianwasserman.netlify.app/" />
      </Helmet>
      <Navbar />
      <div className="pla">
        <div className="container">
          <h2>PLA</h2>
          <p>ppppppp</p>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pla;
