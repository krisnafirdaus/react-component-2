import React from "react";
import Card from "Component/Card";
import Logo from "Assets/0.jpg";

const ListProduct = () => {
  // state untuk datanya
  return (
    <div className="kartuList">
      <div className="card1">
        <Card src={Logo} nama="buku" harga={4000} />
      </div>

      <div className="card2">
        <Card src={Logo} nama="pensil" harga={2000} />
      </div>

      <div className="card2">
        <Card src={Logo} nama="pensil" harga={2000} />
      </div>

      <div className="card2">
        <Card src={Logo} nama="pensil" harga={2000} />
      </div>
    </div>
  );
};

export default ListProduct;
