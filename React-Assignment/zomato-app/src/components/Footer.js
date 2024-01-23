import React from "react";
import styles from "../styleSheet/Footer.module.css";
import { Link } from "react-router-dom";

function Footer() {
  return (
    <>
      <div className={`${styles.container}`}>
        <center>
          <h3>Copyright Developer 2023. All Rights Reserved</h3>
        </center>
        <div className={`d-flex justify-content-evenly ${styles.links}`}>
          <div>
            <Link className={`${styles.links}`}>Home</Link>
            <br />
            <Link className={`${styles.links}`}>Orders</Link>
          </div>
          <div>
            <Link className={`${styles.links}`}>About Us</Link>

            <br />
            <Link className={`${styles.links}`}>Contact Us</Link>
          </div>
          <div>
            <Link className={`${styles.links}`}>Visit our WebSite</Link>
            <br />
            <Link className={`${styles.links}`}>Links</Link>
          </div>
        </div>
        <center>
          <Link>
            <i
              className={`fa-brands fa-linkedin-in ${styles.iconsLinkedin}`}></i>
          </Link>

          <Link>
            <i className={`fa-brands fa-github ${styles.iconsGithub}`}></i>
          </Link>

          <Link>
            <i className={`fa-brands fa-instagram ${styles.iconsInsta}`}></i>
          </Link>
        </center>
      </div>
    </>
  );
}

export default Footer;
