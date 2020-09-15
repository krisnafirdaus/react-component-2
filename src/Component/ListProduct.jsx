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
        <Card src={Book} nama="Buku" harga="Rp 4000" />
      </div>

      <div className="card2">
        <Card src={Pencil} nama="Pensil" harga="Rp 2000" />
      </div>

      <div className="card3">
        <Card src={Pen} nama="Pulpen" harga="Rp 2500" />
      </div>

      <div className="card4">
        <Card src={Eraser} nama="Penghapus" harga="Rp 1500" />
      </div>
    </div>
  );
};

export default ListProduct;
