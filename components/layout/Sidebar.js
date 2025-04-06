import Link from "next/link";

export default function Sidebar({ isSidebar, handleSidebar }) {
  return (
    <>
      <div
        className={`xs-sidebar-group info-group info-sidebar ${
          isSidebar ? "isActive" : ""
        }`}
      >
        <div className="xs-overlay xs-bg-black"></div>
        <div
          className="xs-overlay xs-overlay-2 xs-bg-black"
          onClick={handleSidebar}
        ></div>
        <div
          className="xs-overlay xs-overlay-3 xs-bg-black"
          onClick={handleSidebar}
        ></div>
        <div
          className="xs-overlay xs-overlay-4 xs-bg-black"
          onClick={handleSidebar}
        ></div>
        <div
          className="xs-overlay xs-overlay-5 xs-bg-black"
          onClick={handleSidebar}
        ></div>
        <div className="xs-sidebar-widget">
          <div className="sidebar-widget-container">
            <div className="widget-heading">
              <a className="close-side-widget bg-white" onClick={handleSidebar}>
                <i className="fa fa-times"></i>
              </a>
            </div>
            <div className="sidebar-textwidget">
              <div className="sidebar-info-contents">
                <div className="content-inner">
                  <div className="logo">
                    <Link href="/">
                      <img src="assets/images/logo.png" alt="" />
                    </Link>
                  </div>
                  <div className="content-box">
                    <h4>About Us</h4>
                    <p>
                      At Biz InCorp, we empower entrepreneurs and businesses
                      worldwide with seamless solutions for business setup,
                      visas, and more. With a presence in over 120 countries,
                      our expert team ensures your success every step of the
                      way.
                    </p>
                    {/* <p>
                      Research oriented solutions for Data Science and Machine
                      Learning business needs.
                    </p> */}
                    <Link href="/about-us" className="theme-btn btn-one">
                      <span>About Us</span>
                    </Link>
                  </div>
                  <div className="contact-info">
                    <h4>Contact Info</h4>
                    <ul>
                      <li>
                        Al Moosa Tower 2 - Office No:15, Level - 4, Sheikh Zayed
                        Rd - Trade Centre - Trade Centre 1 - Duba
                      </li>
                      <li>
                        <Link href="tel:+971561826946">+971561826946</Link>
                      </li>
                      <li>
                        <Link href="mailto:thebizincorp@gmail.com">
                          thebizincorp@gmail.com
                        </Link>
                      </li>
                    </ul>
                  </div>
                  <ul className="social-box">
                    <li>
                      <Link href="index-2.html">
                        <i className="icon-4"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="index-2.html">
                        <i className="icon-5"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="index-2.html">
                        <i className="icon-6"></i>
                      </Link>
                    </li>
                    <li>
                      <Link href="index-2.html">
                        <i className="icon-7"></i>
                      </Link>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
