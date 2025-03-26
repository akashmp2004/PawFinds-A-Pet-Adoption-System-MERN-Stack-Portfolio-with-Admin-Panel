import React from "react";
import developerPng from "./images/developer-png.png";

const Contact = () => {
  return (
    <div className="contactUs-main-container">
      <div className="contactUs-left-para">
        <h3>Let's get in touch</h3>
        <i class="fa fa-envelope"></i>
        <a class="mail-links" href="mailto:akashmpnlr@gmail.com">
          akashmpnlr@gmail.com
        </a>

        <i class="fa fa-linkedin"></i>
        <a class="mail-links" href="https://www.linkedin.com/in/akash-mp-62a295270?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app">
          User Name: akash mp
        </a>

        <i class="fa fa-github"></i>
        <a class="mail-links" href="https://github.com/akashmp2004">
          akash thenney
        </a>

        <i class="fa fa-instagram"></i>
        <a class="mail-links" href="https://www.instagram.com/it.soe_?igsh=OXhpdXh6Yzk1am8=">
          @ellam_akash
        </a>

        <i class="fa fa-phone"></i>
        <a class="mail-links" href="tel:+923019583959">
          +91 1256987598
        </a>
      </div>
      <div className="contactUs-pic">
        <img src={developerPng} alt="Profile"/>
      </div>
    </div>
  );
};

export default Contact;
