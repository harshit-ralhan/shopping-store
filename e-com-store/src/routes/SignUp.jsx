import { Form } from "react-router-dom";

const SignUp = () => {
  return (
    <>
      <div className="login-div signin-div">
        <div className="login-inside-div">
          <img
            className="mb-4 logo-login logo-signin"
            src="../public/images/logo/logo-impress-ons.jpg"
            alt="impress-ons logo"
            width="150"
            height="150"
          />
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
              <label htmlFor="password" className="form-label">
                Enter Password
              </label>
              <input
                name="password"
                type="password"
                className="form-control"
                id="password"
                placeholder="Enter your Password"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="re-password" className="form-label">
                Re-Enter Password
              </label>
              <input
                name="re-password"
                type="password"
                className="form-control"
                id="re-password"
                placeholder="Enter your Password again for confirmation"
              />
            </div>

            <div className="mb-3">
              <label htmlFor="phone_number" className="form-label">
                Enter Your Phone Number
              </label>
              <input
                name="phone_number"
                type="number"
                className="form-control"
                id="phone_number"
                placeholder="Write without spaces :  9999977777"
              />
            </div>
            <button type="submit" className="btn btn-primary signup-btn">
              Sign Up
            </button>
          </Form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
