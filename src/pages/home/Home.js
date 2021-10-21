import React from "react";
import Crud from "../../components/Crud";
// import GetPost from "../../components/GetPost";
import Navbarr from "../../components/Navbar/Navbarr";
import "./Home.css";

export default function Home({ data }) {
  return (
    <div>
      <Navbarr />
      <br />
      <Crud />
    </div>
  );
}
