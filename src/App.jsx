import { useEffect } from "react";
import { Helmet } from "react-helmet";
import Navbar from "./components/navbar/Navbar";
import Contacts from "./components/contacts/Contacts";
import Header from "./components/header/Header";
import Footer from "./components/footer/Footer";
import More from "./components/more/More";

function App() {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <Helmet>
        <meta charSet="utf-8" />
        <title>Ian Wasserman Portfolio</title>
        <link rel="canonical" href="https://ianwasserman.netlify.app/" />
      </Helmet>
      <Navbar />
      <Contacts />
      <Header />
      <More />
      <Footer />
    </>
  );
}

export default App;
