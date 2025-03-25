import React from "react";

export const Navbar = () => {
	return (

<nav className="navbar navbar-expand-lg bg-dark">
  <div className="container-fluid d-flex justify-content-between"> 
    <a className="navbar-brand text-light " href="#">StartBootstrap</a>
    <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
      <span className="navbar-toggler-icon"></span>
    </button>
    <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
      <ul className="navbar-nav ">
        <li className="nav-item">
          <a className="text-light nav-link active" aria-current="page" href="#">Home</a>
        </li>
        <li className="nav-item">
          <a className="text-light  nav-link text-light " href="#">About</a>
        </li>
        <li className="nav-item">
          <a className="text-light nav-link" href="#">Services</a>
        </li>
        <li className="nav-item">
          <a className="text-light nav-link disabled" aria-disabled="true">Contact</a>
        </li>
      </ul>
    </div>
  </div>
</nav>
	);
};
