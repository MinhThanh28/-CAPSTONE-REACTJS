import React, { useEffect, useState } from "react";
import { http } from "../../util/config";
import { useFormik } from "formik";

const Profile = () => {
  const [userProfile, setUserProfile] = useState({});
  const frm = useFormik({
    initialValues: {
      email: "",
      phone: "",
      name: "",
      password: "",
    },
  });
  // useEffect(() => {
  //   const getApiProfile = async () => {
  //     try {
  //       const res = await http.post("/api/Users/getProfile"); // Changed to get
  //       console.log(res.data.content);
  //       setUserProfile(res.data.content);
  //     } catch (err) {
  //       console.log(err);
  //     }
  //   };

  //   // Gọi api lấy thông tin profile khi component mount
  //   getApiProfile();
  // }, []);

  useEffect(() => {
    const getApiProfile = async () => {
      try {
        const res = await http.post("/api/Users/getProfile");
        console.log(res.data.content);
        // Cập nhật userProfile state
        setUserProfile(res.data.content);
        // Cập nhật Formik values
        frm.setValues({
          email: res.data.content.email,
          phone: res.data.content.phone,
          name: res.data.content.name,
          password: "", // Password thường không được trả về hoặc cập nhật qua API vì lý do bảo mật
          gender: String(res.data.content.gender), // Chuyển đổi boolean thành string để sử dụng trong Formik
        });
      } catch (err) {
        console.log(err);
      }
    };

    getApiProfile();
  }, []);
  return (
    <div className="container mt-5">
      <div
        style={{
          width: 689,
          height: 74,
          background: "linear-gradient(180deg, #F21299 0%, #1B02B5 100%)",
          color: "white",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          top: 44,
          left: "-4px",
          marginBottom: 20,
        }}
      >
        <h4>Profile</h4>
      </div>
      {/* Phần 1: Thông tin cá nhân */}
      <div className="row">
        {/* Cột Avatar */}
        <div className="col-2">
          <img src="/img/download 1.png" className="img-fluid" alt="Avatar" />
        </div>

        {/* Cột Email và Phone */}
        <div className="col-5">
          <input
            type="email"
            className="form-control mb-3"
            placeholder="Email"
            value={frm.values.email}
            onChange={frm.handleChange}
          />
          <input
            type="text"
            className="form-control"
            placeholder="Phone"
            value={frm.values.phone}
            onChange={frm.handleChange}
          />
        </div>

        <div className="col-5">
          <input
            type="text"
            className="form-control mb-3"
            placeholder="Name"
            value={frm.values.name}
            onChange={frm.handleChange}
          />
          <input
            type="password"
            className="form-control"
            placeholder="Password"
            value={frm.values.password}
            onChange={frm.handleChange}
          />
          <div className="d-flex justify-content-between align-items-center">
            <div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="true" // Giữ nguyên dưới dạng string
                  checked={frm.values.gender === "true"} // So sánh dưới dạng string
                  onChange={frm.handleChange}
                />
                <label className="form-check-label">Male</label>
              </div>
              <div className="form-check">
                <input
                  className="form-check-input"
                  type="radio"
                  name="gender"
                  value="false" // Giữ nguyên dưới dạng string
                  checked={frm.values.gender === "false"} // So sánh dưới dạng string
                  onChange={frm.handleChange}
                />
                <label className="form-check-label">Female</label>
              </div>
            </div>
            <button className="btn btn-primary">Update</button>
          </div>
        </div>
      </div>

      {/* Phần 2: Tabs */}
      <ul className="nav nav-tabs mt-5">
        <li className="nav-item">
          <a
            className="nav-link active"
            data-bs-toggle="tab"
            href="#orderHistory"
          >
            Order History
          </a>
        </li>
        <li className="nav-item">
          <a className="nav-link" data-bs-toggle="tab" href="#favourite">
            Favourite
          </a>
        </li>
      </ul>
      <div className="tab-content">
        <div id="orderHistory" className="tab-pane fade show active">
          {/* Nội dung tab Order History */}
          {/* Chèn bảng hoặc component hiển thị sản phẩm đã mua tại đây */}
        </div>
        <div id="favourite" className="tab-pane fade">
          {/* Nội dung tab Favourite */}
          {/* Chèn danh sách sản phẩm yêu thích tại đây */}
        </div>
      </div>
    </div>
  );
};

export default Profile;
