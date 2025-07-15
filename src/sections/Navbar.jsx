import React from "react";
import "../css/Navbar.css";
import { IoMdArrowDropdown } from "react-icons/io";
export default function Navbar() {
  return (
    <section className="header-section">
      <h2>Bigyan</h2>
      <nav className="header-nav">
        <ul className="nav-items">
          <li className="nav-item">
            About <IoMdArrowDropdown />
            <ul className="item-about">
              <li>water</li>
              <li>sugar</li>
              <li>pappaya</li>
              <li className="orange-items">
                orange <IoMdArrowDropdown />
                <ul className="orange-item">
                  <li>Red Orange</li>
                  <li>Green Orange</li>
                  <li>pink Orange</li>
                </ul>
              </li>
            </ul>
          </li>
          <li className="nav-contact">Contact</li>
        </ul>
      </nav>
    </section>
  );
}
