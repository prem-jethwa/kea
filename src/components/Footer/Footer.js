import { memo } from "react";
import classes from "./footer.module.css";
import logoSvg from "../Assets/svg/yellow-logo.svg";

const Footer = () => {
  return (
    <>
      <div className={classes.height}></div>
      <footer className={classes["footer-con"]}>
        <div className={classes.footer}>
          <a href="#">View Creator's Website</a>
          <p>
            Design & Developed by <span> PREM JETHWA </span>
          </p>
        </div>
        <img src={logoSvg} alt="brand logo" className={classes["logo-svg"]} />
        <p>copyright © 2021 all rights reserved</p>
        <p>
          <div className={classes.license}>
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-nc/4.0/"
            >
              <img
                alt="CC"
                src="https://i.creativecommons.org/l/by-nc/4.0/88x31.png"
              />
            </a>
            <br />
            This work is licensed under a
            <a
              rel="license"
              href="http://creativecommons.org/licenses/by-nc/4.0/"
            >
              CC International License
            </a>
            .
          </div>
        </p>
      </footer>
    </>
  );
};

export default memo(Footer);
