import React, {Fragment } from 'react';
import { Link } from 'react-router-dom';

function Register(){
    return(
        <Fragment>
            <section>
  {/* content */}
  <div className="">
    {/* Register form */}
    <section className="register-form py-md-5 py-3">
      <div className="card card_border p-md-4">
        <div className="card-body">
          {/* form */}
          <form action="#" method="GET">
            <div className="register__header text-center mb-lg-5 mb-4">
              <h3 className="register__title mb-2"> Signup</h3>
              <p>Create your account here, and continue </p>
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputName" className="input__label">
                Your Name
              </label>
              <input
                type="text"
                className="form-control login_text_field_bg input-style"
                id="exampleInputName"
                aria-describedby="emailHelp"
                placeholder=""
                required=""
                autofocus=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputEmail1" className="input__label">
                Email address
              </label>
              <input
                type="email"
                className="form-control login_text_field_bg input-style"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder=""
                required=""
              />
            </div>
            <div className="form-group">
              <label htmlFor="exampleInputPassword1" className="input__label">
                Password
              </label>
              <input
                type="password"
                className="form-control login_text_field_bg input-style"
                id="exampleInputPassword1"
                placeholder=""
                required=""
              />
            </div>
            <div className="form-check check-remember check-me-out">
              <input
                type="checkbox"
                className="form-check-input checkbox"
                id="exampleCheck1"
              />
              <label
                className="form-check-label checkmark"
                htmlFor="exampleCheck1"
              >
                I agree to the
                <a href="#terms">Terms of service</a> and{" "}
                <a href="#privacy">Privacy policy</a>{" "}
              </label>
            </div>
            <div className="d-flex align-items-center flex-wrap justify-content-between">
              <button type="submit" className="btn btn-primary btn-style mt-4">
                Create Account
              </button>
              <p className="signup mt-4">
                Already have an account?{" "}
                <a href="login.html" className="signuplink">
                  Login{" "}
                </a>
              </p>
            </div>
          </form>
          {/* //form */}
          <p className="backtohome mt-4">
            <li>
              <Link to="/"><span>Back to Home</span></Link>
            </li>
          </p>
        </div>
      </div>
    </section>
  </div>
  {/* //content */}
</section>

        </Fragment>
    )
}

export default Register;