import { FaInstagram } from "react-icons/fa";

const About = () => {
  return (
    <>
      <div className="about-div">
        <div className="about-heading">
          <h1>About</h1>
        </div>
        <div className="about-text-div">
          <p className="about-text">
            Premium Soft Reusable Press-Ons💅🏻
            <br />
            Shipping all over India✨
            <br />
            You can also DM us{" "}
            <a href="https://www.instagram.com/impress_ons" className="link-impressons">
              @impress_ons
            </a> on <FaInstagram />
            instagram to order💌
          </p>
          <p className="about-text about-nail-artist">Nail Artist</p>
          <p className="about-text">Muskaan Wadhwa</p>
        </div>
      </div>
    </>
  );
};

export default About;
