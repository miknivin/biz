"use client";
import Link from "next/link";
import { useState } from "react";

export default function MobileMenu({
  isSidebar,
  handleMobileMenu,
  handleSidebar,
}) {
  const [isActive, setIsActive] = useState({
    status: false,
    key: "",
    subMenuKey: "",
  });

  const handleToggle = (key, subMenuKey = "") => {
    if (isActive.key === key && isActive.subMenuKey === subMenuKey) {
      setIsActive({
        status: false,
        key: "",
        subMenuKey: "",
      });
    } else {
      setIsActive({
        status: true,
        key,
        subMenuKey,
      });
    }
  };

  return (
    <>
      <div className="mobile-menu">
        <div className="menu-backdrop" onClick={handleMobileMenu} />
        <div className="close-btn" onClick={handleMobileMenu}>
          <span className="far fa-times" />
        </div>
        <nav className="menu-box">
          <div className="nav-logo">
            <Link href="/" onClick={handleMobileMenu}>
              <img src="/assets/images/logo-2.png" alt="" />
            </Link>
          </div>
          <div className="menu-outer">
            <div
              className="collapse navbar-collapse show clearfix"
              id="navbarSupportedContent"
            >
              <ul className="navigation clearfix">
                <li
                  className={
                    isActive.key == 1 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/index-3" onClick={handleMobileMenu}>
                    Home
                  </Link>
                </li>
                <li>
                  <Link href="/about-us" onClick={handleMobileMenu}>
                    About
                  </Link>
                </li>
                <li
                  className={
                    isActive.key == 2 ? "dropdown current" : "dropdown"
                  }
                >
                  <Link href="/#" onClick={handleMobileMenu}>
                    Services
                  </Link>
                  <ul
                    style={{
                      display: `${isActive.key == 2 ? "block" : "none"}`,
                    }}
                  >
                    <li>
                      <Link
                        href="/service-details-4"
                        onClick={handleMobileMenu}
                      >
                        Dubai Golden Visa
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service-details-5"
                        onClick={handleMobileMenu}
                      >
                        Accounting and Bookkeeping
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service-details-6"
                        onClick={handleMobileMenu}
                      >
                        Certificate Attestation Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service-details-2"
                        onClick={handleMobileMenu}
                      >
                        UAE Resident Visa
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service-details-3"
                        onClick={handleMobileMenu}
                      >
                        Business Setup
                      </Link>
                    </li>
                    <li>
                      <Link href="/service-details" onClick={handleMobileMenu}>
                        PRO Services
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service-details-7"
                        onClick={handleMobileMenu}
                      >
                        Business Consultancy
                      </Link>
                    </li>
                    <li>
                      <Link
                        href="/service-details-8"
                        onClick={handleMobileMenu}
                      >
                        Bank Account Assistance
                      </Link>
                    </li>
                  </ul>
                  <div
                    className={
                      isActive.key == 2 ? "dropdown-btn open" : "dropdown-btn"
                    }
                    onClick={() => handleToggle(2)}
                  >
                    <span className="fa fa-angle-right" />
                  </div>
                </li>
                <li>
                  <Link href="/contact" onClick={handleMobileMenu}>
                    Contact
                  </Link>
                </li>
              </ul>
            </div>
          </div>
          <div className="contact-info">
            <h4>Contact Info</h4>
            <ul>
              <li>
                Al Moosa Tower 2 - Office No:15, Level - 4, Sheikh Zayed Rd -
                Trade Centre - Trade Centre 1 - Dubai
              </li>
              <li>
                <Link href="tel:+971561826946" onClick={handleMobileMenu}>
                  +971 561826946
                </Link>
              </li>
              <li>
                <Link
                  href="mailto:thebizincorp@gmail.com"
                  onClick={handleMobileMenu}
                >
                  thebizincorp@gmail.com
                </Link>
              </li>
            </ul>
          </div>
          <div className="social-links">
            <ul className="clearfix">
              <li>
                <Link href="/" onClick={handleMobileMenu}>
                  <span className="fab fa-twitter" />
                </Link>
              </li>
              <li>
                <Link href="/" onClick={handleMobileMenu}>
                  <span className="fab fa-facebook-square" />
                </Link>
              </li>
              <li>
                <Link href="/" onClick={handleMobileMenu}>
                  <span className="fab fa-pinterest-p" />
                </Link>
              </li>
              <li>
                <Link href="/" onClick={handleMobileMenu}>
                  <span className="fab fa-instagram" />
                </Link>
              </li>
              <li>
                <Link href="/" onClick={handleMobileMenu}>
                  <span className="fab fa-youtube" />
                </Link>
              </li>
            </ul>
          </div>
        </nav>
      </div>
      <div
        className="nav-overlay"
        style={{ display: `${isSidebar ? "block" : "none"}` }}
        onClick={handleSidebar}
      />
    </>
  );
}
