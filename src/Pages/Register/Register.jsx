import React, { useState } from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { useNavigate } from "react-router-dom";
import axios from "axios";
// import "./Register.css";

const Register = () => {
  const navigate = useNavigate();
  const frmRegister = useFormik({
    initialValues: {
      email: "",
      password: "",
      confirmPassword: "",
      name: "",
      phone: "",
      gender: "true", // Default to 'true' for Male
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("Email is required")
        .email("Email is invalid"),
      password: yup
        .string()
        .required("Password is required")
        .min(3, "Password is too short")
        .max(32, "Password is too long"),
      confirmPassword: yup
        .string()
        .oneOf([yup.ref("password"), null], "Passwords must match"),
      name: yup.string().required("Name is required"),
      phone: yup.string().required("Phone is required"),
    }),
    onSubmit: async (values) => {
      const userRegister = {
        ...values,
        gender: values.gender === "true", // Convert to boolean
      };
      try {
        await axios({
          url: "https://shop.cyberlearn.vn/api/Users/signup",
          method: "POST",
          data: userRegister,
        });
        alert("Register successfully!");
        navigate("/login");
      } catch (err) {
        alert(err.response.data.message);
      }
    },
  });

  return (
    <div className="container mt-5">
      <form onSubmit={frmRegister.handleSubmit} className="row g-3">
        <h3 className="text-center mb-4">Register</h3>
        <div className="col-md-6">
          <label htmlFor="email" className="form-label">
            Email
          </label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            onChange={frmRegister.handleChange}
            value={frmRegister.values.email}
          />
          {frmRegister.errors.email && (
            <div className="text-danger">{frmRegister.errors.email}</div>
          )}

          <label htmlFor="password" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="password"
            name="password"
            onChange={frmRegister.handleChange}
            value={frmRegister.values.password}
          />
          {frmRegister.errors.password && (
            <div className="text-danger">{frmRegister.errors.password}</div>
          )}

          <label htmlFor="confirmPassword" className="form-label">
            Confirm Password
          </label>
          <input
            type="password"
            className="form-control"
            id="confirmPassword"
            name="confirmPassword"
            onChange={frmRegister.handleChange}
            value={frmRegister.values.confirmPassword}
          />
          {frmRegister.errors.confirmPassword && (
            <div className="text-danger">
              {frmRegister.errors.confirmPassword}
            </div>
          )}
        </div>

        <div className="col-md-6">
          <label htmlFor="name" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            onChange={frmRegister.handleChange}
            value={frmRegister.values.name}
          />
          {frmRegister.errors.name && (
            <div className="text-danger">{frmRegister.errors.name}</div>
          )}

          <label htmlFor="phone" className="form-label">
            Phone
          </label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            onChange={frmRegister.handleChange}
            value={frmRegister.values.phone}
          />
          {frmRegister.errors.phone && (
            <div className="text-danger">{frmRegister.errors.phone}</div>
          )}

          <div>Gender</div>
          <div className="form-check">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="male"
              value="true"
              checked={frmRegister.values.gender === "true"}
              onChange={frmRegister.handleChange}
            />
            <label className="form-check-label" htmlFor="male">
              Male
            </label>
          </div>
          <div className="form-check mb-3">
            <input
              className="form-check-input"
              type="radio"
              name="gender"
              id="female"
              value="false"
              checked={frmRegister.values.gender === "false"}
              onChange={frmRegister.handleChange}
            />
            <label className="form-check-label" htmlFor="female">
              Female
            </label>
          </div>

          <button type="submit" className="btn btn-primary">
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};

export default Register;
