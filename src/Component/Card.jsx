import React from "react";

import CounterClass from "Component/CounterClass";
import CounterFunc from "Component/CounterFunc";

export default function Card(props) {
  return (
    <div className="kartu">
      <div className="card">
        <img src={props.src} alt="" />
        <div className="container">
          <h1>{props.nama}</h1>
          <h5>{props.harga}</h5>
          <CounterClass />
          <CounterFunc />
        </div>
      </div>
    </div>
  );
}
