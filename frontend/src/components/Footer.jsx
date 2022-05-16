import React from "react";

import {BsLinkedin, BsGithub, BsFacebook} from "react-icons/bs"
import {FaCodepen} from "react-icons/fa"
import {SiGmail} from "react-icons/si"
import {RiChatSmile3Line} from "react-icons/ri"

export default function Footer() {
    return (
            
    <footer>
        <h2 className="footer-title">Contact Me<RiChatSmile3Line/></h2>
        <section className="contacts-section">
        <div className="email-container">
            <SiGmail className="icon-contact"/>
            <p className="email-text">alzbarbosa@gmail.com</p>
        </div>
        <div className="container-icons-contact">
            
        <a href="www.linkedin.com/in/andre-barbosa-b4933114a"><BsLinkedin className="icon-contact"/></a>
        <a href="https://github.com/alzbarbosa"><BsGithub className="icon-contact"/></a>
        <a href="https://www.facebook.com/profile.php?id=100022024270844"><BsFacebook className="icon-contact"/></a>
        <a href="https://codepen.io/aquarius83"><FaCodepen className="icon-contact"/></a>

        </div>
        </section>
        <h6 className="footer">&copy; 2022 Andre Barbosa</h6>
    </footer>
    )
}