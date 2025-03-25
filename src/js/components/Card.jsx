import React from "react";

export const Card = () => {
    return (
<div className=" card col-12 col-sm-3 px-0 ">
<img src="https://picsum.photos/200" className="card-img-top" alt="..." />
  <div className="card-body">
    <h5 className="card-title">Card title</h5>
    <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. </p>
    <a href="#" className="btn btn-primary">Find out More!</a>
  </div>
</div>
    );
};
