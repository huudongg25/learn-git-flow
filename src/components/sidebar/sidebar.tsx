import React from "react";
import "./sidebar.css";

const Sidebar = () => {
  return (
    <div className="sidebar_container">
      <ul className="sidebar_head">NHÓM SẢN PHẨM</ul>
      <li className="sidebar_body">Khoa Học</li>
      <li className="sidebar_body">Xã Hội</li>
      <li className="sidebar_body">Gia Đình</li>
      <li className="sidebar_body">Tâm Lí</li>
      <li className="sidebar_body">Truyện Tranh</li>
      <li className="sidebar_body">Tiểu Thuyết</li>
      <li className="sidebar_body">Lãng Mạn</li>
      <li className="sidebar_body">Cuộc Sống</li>
    </div>
  );
};

export default Sidebar;
