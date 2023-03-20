import React, { useEffect } from "react";
import {FaWhatsappSquare} from 'react-icons/fa';

const ScrollTop = () => {
  useEffect(() => {
    let scrollUp = document.getElementById("scroll-top");

    window.addEventListener("scroll", () => {
      let st = window.scrollY;
      if (st >= 0) {
        scrollUp.style.display = "inline-block";
      } else {
        scrollUp.style.display = "none";
      }
    });
  }, []);
  const onClick = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };
  return (
    <div
      className="scroll-to-top scroll-to-target"
      id="scroll-top"
      data-target="html"
      style={{fontSize:"4rem"}}
    >
      {/* <span className="fas fa-arrow-up" /> */}
      <a href="https://wa.me/+918210310113"><FaWhatsappSquare color="green"/></a>
    </div>
  );
};
export default ScrollTop;
