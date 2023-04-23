import React from "react";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import GitHubIcon from "@mui/icons-material/GitHub";
import InstagramIcon from "@mui/icons-material/Instagram";
import "./styles/Footer.css";

function Footer() {
    return (
        <div className="footer">
            <div className="footerlink linkedin">
                <a href="https://www.linkedin.com/in/shivammanimaurya/">
                    <LinkedInIcon />
                    <p>Linkedin</p>
                </a>
            </div>
            <div className="footerlink github">
                <a href="https://github.com/ShivamManiMaurya">
                    <GitHubIcon />
                    <p>GitHub</p>
                </a>
            </div>
            <div className="footerlink insta">
                <a href="https://www.instagram.com/">
                    <InstagramIcon />
                    <p>Instagram</p>
                </a>
            </div>
        </div>
    );
}

export default Footer;
