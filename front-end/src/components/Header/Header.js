import React from "react";
import "./Header.scss";

/**
 * @author
 * @function Header
 **/

const Header = (props) => {
  return (
    <>
      <nav className="nav">
        <a href="#" className="wrap-logo">
          <img
            className="logo"
            src="https://th.bing.com/th/id/OIP.7hc5FkgGRkyAhbojmtuDEgAAAA?pid=ImgDet&rs=1"
          />
        </a>
        <a className="blog" href="/">
          Blog
        </a>
        <div className="user">
          <a href="/">
            <img
              className="user__avatar"
              src="https://www.pngfind.com/pngs/m/470-4703547_icon-user-icon-hd-png-download.png"
            />
          </a>
          <div className="user__name">Nguyen Tan Loc</div>
        </div>
      </nav>
    </>
  );
};

export default Header;
