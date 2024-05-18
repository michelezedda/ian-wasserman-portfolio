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
          <h2>PLA: The Presidential Leadership Academy</h2>
          <p>
            The Presidential Leadership Academy (PLA) is a three-year leadership
            and critical thinking program offered to select students at Penn
            State. Students can apply their freshman year, and 30 individuals
            are selected amongst the candidates. The PLA provides opportunities
            such as classes with University leadership, trips across the US, and
            the ability to engage in high-level debate. This page reflects on
            some selected experiences Ian had in the academy.
          </p>
          <div className="split">
            <div className="left">
              <h3>TRIPS</h3>
              <h4>WASHINGTON D.C.</h4>
              <p>
                My first trip with the PLA was to our nation's capital. Here we
                got to tour the monuments, explore the Holocaust museum, and
                even visit George Washington's estate at Mount Vernon. We also
                got to chat with PLA alumni, including my sister Alyssa
                Sihelnik. I especially liked when we got a private tour of the
                Smithsonian.
              </p>
            </div>
            <h4>CHICAGO</h4>
            <p>
              Chicago was a grand adventure of a trip. We learned about some of
              the famous architecture created by Frank Lloyd Wright. We also got
              to tour a waste water treatment plant, which was an amazing
              engineering feat. My favorite part of this trip was our visit to
              the McDonald's headquarters, since I used to work at the golden
              arches for five years!
            </p>
            <h4>BALTIMORE</h4>
            <p>
              Baltimore was my last fall trip with the PLA. Here we got to learn
              about a second hand store called Second Chance that hires people
              who traditional could not find work due to criminal or drug
              backgrounds. We also got to visit the Baltimore Museum of Art. We
              also went on a boat cruise and watched an air show taking place.
              It was on this cruise that I mentioned to our director, Melissa
              Doberstein, that our next trip should be to Los Angeles... and it
              actually came true! A funny memory from this trip was when a
              couple other PLA members and I went to a haunted house inside a
              Mall outside of the city. It was really well done!
            </p>
            <h4>LOS ANGELES</h4>
            <p>
              LOS ANGELES I may be biased, since I was the one to suggest this
              location, however I stand by my claim that this is the best PLA
              trip. From going up to the Griffith Observatory, to our food tour
              with Six Taste, we all had an amazing time. We got to experience
              both modern and contemporary art through our visits to The Broad
              and The Getty. One of the most interesting parts of our trip was
              the visit to The Ronald Reagan Library, a place that I would not
              have gone to if it weren't for the PLA. Between shopping in
              Beverly Hills with some friends, to perusing the boardwalk in
              Santa Monica, this trip will always have a special place in my
              heart!
            </p>
          </div>
          <div className="right">
            <h3>BLOGS</h3>
            <h4>MINOR: ENVRIONMENTAL ENGINEERING</h4>
            <p>
              A requirement of the PLA is that students must blog about either
              in-class experience (From HONOR 201, 301, or 401 courses), or blog
              about other topics of interest in their busy lives. All of Ian's
              publicly available blogs can be viewed HERE, however select
              favorites are described below:
            </p>
            <div className="btn">
              Modern Thermodynamics and the Origins of Life
            </div>
            <p>
              This blog discusses how thermodynamics can play a rather unique
              role in helping answer some of life's most profound questions.{" "}
            </p>
            <div className="btn">
              When Virtual Reality Makes a Better Reality
            </div>
            <p>
              This post explores how excess waste can be avoided using VR
              technology, and that it can offer more to humanity than being
              unsustainable ever did.
            </p>
            <div className="btn">Gratitude</div>
            <p>
              This entry talks about how a relatively simple New Year's
              resolution can have a lasting impact on one's overall happiness.
            </p>
            <h3>REFLECTIONS ON PLA</h3>
            <p>---------------LIST HERE---------------</p>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}

export default Pla;
