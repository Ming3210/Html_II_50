import React from "react";
import { Link, NavLink, Outlet } from "react-router-dom";
import "./Home.css";

export default function Home() {
  return (
    <div>
      <h1>B1</h1>
      <b>Đây là trang home</b>
      <nav>
        <Link to="">Home</Link>
        <Link to="/contact">Contacts</Link>
        {/*
        Sinh ra thêm nav link
        */}
      </nav>
      <nav>
        <NavLink to="">Home</NavLink>
        <NavLink to="/product">Product</NavLink>
        <NavLink to="/detail">Detail</NavLink>
      </nav>
      <Outlet></Outlet>
    </div>
  );
}
