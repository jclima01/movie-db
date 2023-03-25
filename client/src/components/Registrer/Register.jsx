import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { useNavigate } from "react-router-dom";
import { register } from "../../redux/actions";

const Register = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [userData, setUserData] = useState({
    name: "",
    email: "",
    password: "",
  });

  const handleInputChange = (e) => {
    setUserData({
      ...userData,
      [e.target.name]: e.target.value,
    });
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(register(userData.name, userData.email, userData.password));
    navigate("/");
  };

  return (
    <div className="d-flex justify-content-center align-items-center vh-100">
      <form className="text-center" onSubmit={handleSubmit}>
        <div className="form-outline mb-4">
          <input
            type="name"
            name="name"
            id="form2Example1"
            className="form-control"
            onChange={handleInputChange}
          />
          <label className="form-label" htmlFor="form2Example1">
            Name
          </label>
        </div>
        <div className="form-outline mb-4">
          <input
            type="email"
            name="email"
            id="form2Example1"
            className="form-control"
            onChange={handleInputChange}
          />
          <label className="form-label" htmlFor="form2Example1">
            Email address
          </label>
        </div>

        <div className="form-outline mb-4">
          <input
            type="password"
            name="password"
            id="form2Example2"
            className="form-control"
            onChange={handleInputChange}
          />
          <label className="form-label" htmlFor="form2Example2">
            Password
          </label>
        </div>

        <button type="submit" className="btn btn-primary btn-block mb-4">
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
