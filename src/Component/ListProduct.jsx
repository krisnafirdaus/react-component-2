import React from "react";
import Card from "Component/Card";
import Book from "Assets/book.jpg";
import Pen from "Assets/pen.jpg";
import Pencil from "Assets/pencil.jpg";
import Eraser from "Assets/eraser.jpg";

const ListProduct = () => {
  // state untuk datanya
  return (
    <div className="kartuList">
      <div className="card1">
        <Card src={Book} nama="buku" harga={4000} />
      </div>

      <div className="card2">
        <Card src={Pencil} nama="pensil" harga={2000} />
      </div>

      <div className="card3">
        <Card src={Pen} nama="pulpen" harga={2500} />
      </div>

      <div className="card4">
        <Card src={Eraser} nama="penghapus" harga={1500} />
      </div>
    </div>
  );
};

export default ListProduct;
