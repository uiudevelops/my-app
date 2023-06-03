import * as React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div>
      <b>this is homepage</b>
      <Link to={"/shop"}>Go to shop</Link>
    </div>
  );
};

export default Home;
