import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "./assets/components/Home/Home";
import Contact from "./assets/components/Contact/Contact";
import Login from "./assets/components/Login/Login";
import Register from "./assets/components/Register/Register";
import NotFound from "./NotFound";
import Product from "./assets/components/Product/Product";
import Detail from "./assets/components/Detail/Detail";
import Admin from "./assets/components/Admin/Admin";
import Account from "./assets/components/Account/Account";
import CustomLink from "./assets/components/CustomLink/CustomLink";
import HomePage from "./assets/components/HomePage/HomePage";
import ListUser from "./assets/components/ListUser/ListUser";
import UseDetail from "./assets/components/UserDetail/UseDetail";

export default function App() {
  return (
    <div>
      <Routes>
        {/* <Route path="" element={<Home></Home>}>
          <Route path="/product" element={<Product></Product>}></Route>
          <Route path="/detail" element={<Detail></Detail>}></Route>
          <Route path="/contact" element={<Contact></Contact>}></Route>
        </Route> */}
        {/* <Route path="" element={<CustomLink></CustomLink>}>
          <Route path="/homepage" element={<HomePage></HomePage>}></Route>
        </Route> */}
        <Route path="/" element={<ListUser></ListUser>}></Route>
        <Route path="/:id" element={<UseDetail></UseDetail>}></Route>
        <Route path="/admin" element={<Admin></Admin>}></Route>
        <Route path="/account" element={<Account></Account>}></Route>
        <Route path="/product" element={<Product></Product>}></Route>
        <Route path="/login" element={<Login></Login>}></Route>
        <Route path="/register" element={<Register></Register>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </div>
  );
}
