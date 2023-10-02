import "./App.css";
import React from "react";
import pool from "/poll-h.svg";
import book from "/book-bookmark.svg";
import truck from "/truck-side.svg";
import gem from "/gem.svg";
import tools from "/tools.svg";

export default function NavBar() {
  return (
    <div className="HeaderContainer">
      <div className="HeaderItem">
        <img src={pool} alt="" className="Item" />
        <p>Danh mục sản phẩm</p>
      </div>
      <div className="HeaderItem">
        <img src={truck} alt="" className="Item" />
        <p>Giao lắp chuyên nghiệp</p>
      </div>
      <div className="HeaderItem">
        <img src={tools} alt="" className="Item" />
        <p>Bảo hành nhanh gọn</p>
      </div>
      <div className="HeaderItem">
        <img src={book} alt="" className="Item" />
        <p>Tổng hợp khuyến mãi</p>
      </div>
      <div className="HeaderItem">
        <img src={gem} alt="" className="Item" />
        <p style={{ border: "none" }}>Nguyễn Kim Luxury</p>
      </div>
    </div>
  );
}
