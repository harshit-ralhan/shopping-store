import { GoHeart } from "react-icons/go";
import { GrInstagram } from "react-icons/gr";
import { SlSocialGithub } from "react-icons/sl";
import { RiArrowUpDoubleFill } from "react-icons/ri";

const Footer = () => {
  return (
    <>
      <div className=" footer-container">
        <footer className="d-flex flex-wrap justify-content-between align-items-center py-3 my-4 border-top footer">
          <div className="col-md-4 d-flex align-items-center">
            <span className="mb-3 mb-md-0 text-body-secondary footer-text">
              <GoHeart /> Nails by Muskaan
            </span>
          </div>

          <ul className="nav col-md-4 justify-content-end list-unstyled d-flex footer-ul">
            <li className="ms-3 insta-footer-li ">
              <a
                href="https://www.instagram.com/impress_ons"
                className="text-body-secondary links-in-footer insta-footer"
              >
                <GrInstagram />
              </a>
            </li>
            <li className="ms-3 insta-footer-li">
              <a className="text-body-secondary links-in-footer insta-footer" href="https://github.com/harshit-ralhan">
              <SlSocialGithub />
              </a>
            </li>
            <li className="ms-3 insta-footer-li ">
              <a className="text-body-secondary links-in-footer insta-footer" href="#">
              <RiArrowUpDoubleFill />
              </a>
            </li>
          </ul>
        </footer>
      </div>
    </>
  );
};

export default Footer;
