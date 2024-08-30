import "../App.css";
import { Form } from "react-router-dom";

const Login = () => {
  return (
    <>
      <div className="login-div">
        <div className="login-inside-div">
          <img
            className="logo-login"
            src="/images/logo/logo-impress-ons.jpg"
            alt="impress-ons logo"
            width="150"
            height="150"
          />
          {/* <h1 className="h3 mb-3 fw-normal login-heading">Please Log in</h1> */}
          <Form method="POST" className="sign-up">
            <div className="mb-3">
              <label htmlFor="userId" className="form-label">
                Enter Email Id
              </label>
              <input
                name="userId"
                type="email"
                className="form-control"
                id="userId"
                placeholder="Your Email Id"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="title" className="form-label">
                Enter Password
              </label>
              <input
                name="title"
                type="password"
                className="form-control"
                id="title"
                placeholder="Enter your Password"
              />
            </div>

            <input
              className="form-check-input remember-me-box"
              type="checkbox"
              value="remember-me"
              id="flexCheckDefault"
            />
            <label className="form-check-label remember-me-text" htmlFor="flexCheckDefault">
              Remember me
            </label>
            <br />
            <button type="submit" className="btn btn-primary login-sigin-btn">
              Log in
            </button>
          </Form>
        </div>{" "}
      </div>
    </>
  );
};

export default Login;
