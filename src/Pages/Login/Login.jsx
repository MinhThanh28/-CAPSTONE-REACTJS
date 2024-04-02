import React from "react";
import { useFormik } from "formik";
import * as yup from "yup";
import { NavLink, useNavigate } from "react-router-dom";
import axios from "axios";
import "./Login.css";
const Login = () => {
  const navigate = useNavigate();
  const frmLogin = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    validationSchema: yup.object().shape({
      email: yup
        .string()
        .required("email cannot be blank")
        .email("email is invalid"),
      password: yup
        .string()
        .required("password cannot be blank")
        .min(3, "lỗi min")
        .max(32, "lỗi max"),
    }),
    onSubmit: async (userLogin) => {
      console.log(userLogin);
      //Xử lý chuyển hướng trang tại function
      try {
        //Sau khi submit => gọi api xác thực đăng nhập
        const res = await axios({
          url: "https://shop.cyberlearn.vn/api/Users/signin",
          method: "POST",
          data: userLogin, // object format giống server qui định
        });
        // đăng nhập thành công thì lưu token vào localstorage
        const token = res.data.content.accessToken;
        const userLoginResult = res.data.content;
        localStorage.setItem("user_login", JSON.stringify(userLoginResult));
        localStorage.setItem("accesstoken", token);
        //chuyển tra profile
        navigate("/profile");
      } catch (err) {
        alert(err.response.data.message);
        // alert('đăng nhập thất bại !')
        // navigate('/forgot-pass')
      }
    },
  });

  return (
    <div className="login-container d-flex justify-content-center align-items-center">
      <form className="login-form" onSubmit={frmLogin.handleSubmit}>
        <h3 className="text-center">Login</h3>
        <div className="form-group">
          <label htmlFor="email">Email</label>
          <input
            className="form-control"
            id="email"
            name="email"
            onChange={frmLogin.handleChange}
            onBlur={frmLogin.handleBlur}
          />
          {frmLogin.errors.email && (
            <p className="text-danger">{frmLogin.errors.email}</p>
          )}
        </div>
        <div className="form-group">
          <label htmlFor="password">Password</label>
          <input
            className="form-control"
            id="password"
            name="password"
            type="password"
            onChange={frmLogin.handleChange}
            onBlur={frmLogin.handleBlur}
          />
          {frmLogin.errors.password && (
            <p className="text-danger">{frmLogin.errors.password}</p>
          )}
        </div>
        <div className="d-flex justify-content-between align-items-center">
          <NavLink to="/register" className="register-link">
            Register now?
          </NavLink>
          <button className="btn btn-success" type="submit">
            Login
          </button>
        </div>
      </form>
    </div>
  );
};

export default Login;
