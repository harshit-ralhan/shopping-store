import { IoBagHandle } from "react-icons/io5";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";

const Header = () => {
  const bagItemsIds = useSelector(store => store.bag);
  return (
    <>
      <div className="d-flex flex-wrap align-items-center justify-content-center justify-content-md-between py-3 mb-4 border-bottom impresson-header">
        <div className="col-md-3 mb-2 mb-md-0">
          <Link
            to="/"
            className="d-inline-flex link-body-emphasis text-decoration-none"
          >
            <img
              className="logo-login"
              src="../public/images/logo/logo-impress-ons.jpg"
              alt="impress-ons logo"
              width="45"
              height="45"
            />
          </Link>
        </div>

        <ul className="nav col-12 col-md-auto mb-2 justify-content-center mb-md-0">
          <li>
            <Link to="/" className="nav-link px-2 link-secondary ul">
              Home
            </Link>
          </li>

          <li>
            <Link to="/buy" className="link-secondary nav-link px-2 ul">
              <span className="header-bag">Shop</span>
            </Link>
          </li>

          <li>
            <Link to="/bag" className="link-secondary nav-link px-2 position-relative ul">
              <span className="header-bag">
                {" "}
                Bag
                {bagItemsIds.length !== 0 && <span className="position-absolute top-0 start-100 translate-middle badge rounded-pill bg-danger bag-badge">
                  {bagItemsIds.length}
                </span>}
              </span>
            </Link>
          </li>
          <li>
            <Link to="/about" className="link-secondary nav-link px-2 ul">
              About
            </Link>
          </li>
        </ul>

        <div className="col-md-3 text-end">
          <Link to="/login">
            <button type="button" className="login-signin-btn">
              Login
            </button>
          </Link>

          <Link to="/signup">
            <button type="button" className="login-signin-btn">
              Sign-up
            </button>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Header;
