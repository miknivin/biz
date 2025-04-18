"use client";
import Link from "next/link";
import Menu from "../Menu";
import MobileMenu from "../MobileMenu";
import Sidebar from "../Sidebar";

export default function Header2({
  scroll,
  isMobileMenu,
  handleMobileMenu,
  isSidebar,
  handlePopup,
  handleSidebar,
}) {
  return (
    <>
      <header
        className={`main-header header-style-two ${
          scroll ? "fixed-header" : ""
        }`}
      >
        {/* Header Top */}
        {/* <div className="header-top">
          <div className="top-inner">
            <ul className="info-list clearfix">
              <li><i className="icon-1"></i>Mon - Fri 8:00 - 18:00 / Sunday 8:00 - 14:00</li>
                            <li><i className="icon-2"></i>Email: <Link href="tel:01989526503">0198-9526503</Link></li>
                            <li><img src="assets/images/icons/icon-1.png" alt="" /> 47 Bakery Street, London, UK</li>
            </ul>
            <ul className="social-links clearfix">
              <li>
                <Link href="/">
                  <i className="icon-4"></i>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <i className="icon-5"></i>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <i className="icon-6"></i>
                </Link>
              </li>
              <li>
                <Link href="/">
                  <i className="icon-7"></i>
                </Link>
              </li>
            </ul>
          </div>
        </div> */}

        {/* Header Upper */}
        <div className="header-lower">
          <div className="outer-container fixed-top d-md-static px-0">
            <div className="outer-box px-2">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/">
                    <img
                      width={120}
                      style={{ width: "120px" }}
                      src="/assets/images/logo.png"
                      alt=""
                    />
                  </Link>
                </figure>
              </div>
              <div className="menu-area">
                {/* Mobile Navigation Toggler */}
                <div className="mobile-nav-toggler" onClick={handleMobileMenu}>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                  <i className="icon-bar"></i>
                </div>
                {/* Main Menu */}
                <nav className="main-menu navbar-expand-md navbar-light clearfix">
                  <div
                    className="collapse navbar-collapse show clearfix"
                    id="navbarSupportedContent"
                  >
                    <Menu />
                  </div>
                </nav>
              </div>
              {/* Menu Right Content */}
              <ul className="menu-right-content d-none d-md-flex">
                {/* <li
                  className="search-box-outer search-toggler"
                  onClick={handlePopup}
                >
                  <i className="icon-27"></i>
                </li> */}
                <li
                  className="nav-btn nav-toggler navSidebar-button clearfix"
                  onClick={handleSidebar}
                >
                  <i className="icon-28"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/*End Header Upper*/}
        {/* Sticky Header  */}
        <div className="sticky-header bg-black">
          <div className="auto-container">
            <div className="outer-box bg-black">
              <div className="logo-box">
                <figure className="logo">
                  <Link href="/">
                    <img width={120} src="/assets/images/logo.png" alt="" />
                  </Link>
                </figure>
              </div>

              <nav className="main-menu navbar-expand-md navbar-light clearfix">
                <div
                  className="collapse navbar-collapse show clearfix"
                  id="navbarSupportedContent"
                >
                  <Menu />
                </div>
              </nav>
              <ul className="menu-right-content">
                {/* <li
                  className="search-box-outer search-toggler"
                  onClick={handlePopup}
                >
                  <i className="icon-27"></i>
                </li> */}
                <li
                  className="nav-btn nav-toggler navSidebar-button clearfix"
                  onClick={handleSidebar}
                >
                  <i className="icon-28"></i>
                </li>
              </ul>
            </div>
          </div>
        </div>
        {/* End Sticky Menu */}
        {/* Mobile Menu  */}

        <MobileMenu handleMobileMenu={handleMobileMenu} />
      </header>
    </>
  );
}
