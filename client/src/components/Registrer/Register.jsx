import React from "react";

const Register = () => {
  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="text-center">
        <div className="form-outline mb-4">
          <input type="name" id="form2Example1" className="form-control" />
          <label className="form-label" for="form2Example1">
            Name
          </label>
        </div>
        <div className="form-outline mb-4">
          <input type="email" id="form2Example1" className="form-control" />
          <label className="form-label" for="form2Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input type="password" id="form2Example2" className="form-control" />
          <label className="form-label" for="form2Example2">
            Password
          </label>
        </div>

      

        <button type="button" className="btn btn-primary btn-block mb-4">
          Sign in
        </button>

        <div className="text-center">
          
          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-facebook-f"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-google"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-twitter"></i>
          </button>

          <button type="button" className="btn btn-link btn-floating mx-1">
            <i className="fab fa-github"></i>
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
