import React, {Fragment } from 'react';

function ForgotPassword(){
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
            <div className="register__header text-left mb-4">
              <h3 className="register__title mb-2"> Forgot Password</h3>
              <p>
                Please enter the email address for your account. A verification
                code will be sent to you. Once you have received the
                verification code, you will be able to choose a new password for
                your account.{" "}
              </p>
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
                placeholder="Enter email"
              />
            </div>
            <button type="submit" className="btn btn-primary btn-style mt-2">
              Send Recovery Password
            </button>
          </form>
          {/* //form */}
          <p className="backtohome mt-4">
            <a href="index.html" className="back">
              <i className="fa fa-chevron-left" aria-hidden="true" />
              Back to Home{" "}
            </a>
          </p>
          <p />
        </div>
      </div>
    </section>
  </div>
  {/* //content */}
</section>

        </Fragment>
    )
}

export default ForgotPassword;