"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function service() {
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        breadcrumbTitle="Accounting and Bookkeeping"
      >
        <div>
          {/* service-section */}
          <section className="service-details pt_120 pb_110">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-12 col-sm-12 sidebar-side">
                  <div className="default-sidebar service-sidebar mr_15">
                    {/* <div className="sidebar-widget category-widget">
                                        <div className="widget-title">
                                            <h3>Categories</h3>
                                        </div>
                                        <div className="widget-content">
                                            <ul className="category-list clearfix">
                                                <li><Link href="service-details">Cardiology</Link></li>
                                                <li><Link href="service-details-2">Dental Clinic</Link></li>
                                                <li><Link href="service-details-3">Neurosurgery</Link></li>
                                                <li><Link href="service-details-4">Medical</Link></li>
                                                <li><Link href="service-details-5" className="current">Pediatrics</Link></li>
                                                <li><Link href="service-details-6">Modern Laboratory</Link></li>
                                            </ul>
                                        </div>
                                    </div> */}
                    <div className="service-block-one">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <img
                              src="assets/images/service/service-30.jpg"
                              alt=""
                            />
                          </figure>
                          {/* <div className="icon-box">
                                                <img src="assets/icons/bookkeeping.png" alt="business" /></div> */}
                        </div>
                        {/* <div className="lower-content">
                                                <h3>Pediatrics</h3>
                                                <p>Amet minim mollit non deserunt ullamco aliqua dolor do amet sint.</p>
                                            </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                  <div className="service-details-content">
                    <div className="content-one mb_60">
                      {/* <figure className="image-box mb_40"><img src="assets/images/service/service-13.jpg" alt="" /></figure> */}
                      <div className="text-box">
                        <h2>Accounting and Bookkeeping</h2>
                        <p>
                          Precise financial management forms the backbone of
                          every successful business operation in the UAE. Biz
                          InCorp's comprehensive accounting and bookkeeping
                          services deliver the financial clarity and compliance
                          essential for informed decision-making and regulatory
                          adherence.
                        </p>
                        <p>
                          {" "}
                          <br />
                          Our team of certified accountants implements tailored
                          financial systems that grow with your business. From
                          daily transaction recording to complex financial
                          reporting, we establish processes that provide
                          real-time insights into your company's financial
                          health while meeting all UAE and international
                          standards.
                        </p>
                        <p>
                          {" "}
                          <br /> We go beyond basic bookkeeping to deliver
                          strategic financial analysis that identifies growth
                          opportunities and potential challenges before they
                          impact your business. Our VAT-compliant services
                          ensure seamless tax filing and statutory compliance,
                          eliminating penalties and unexpected liabilities.
                        </p>
                        <p>
                          {" "}
                          <br /> Partner with Biz InCorp for a comprehensive
                          financial solution that frees you to focus on core
                          business activities. Our accounting professionals
                          become an extension of your team, providing the
                          expertise needed to navigate the UAE's evolving
                          financial landscape with confidence and precision.
                        </p>
                      </div>
                    </div>
                    <div className="content-two">
                      <div className="image-inner">
                        <div className="row clearfix">
                          <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                            <figure className="image-box mb_30">
                              <img
                                src="assets/images/service/service-80.jpg"
                                alt=""
                              />
                            </figure>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                            <figure className="image-box mb_30">
                              <img
                                src="assets/images/service/service-81.jpg"
                                alt=""
                              />
                            </figure>
                          </div>
                        </div>
                      </div>
                      {/* <div className="text-box">
                                            <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium dolor mque lauda totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vite sunt explicabo. Nemo ipsam voluptatem quia voluptas sit aspernatur.</p>
                                            <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullam nmco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehender it in voluptate velit esse cillum dolore eu fugiat nulla pariatur.</p>
                                        </div> */}
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* service-section end */}
          {/* subscibe */}
          <section className="subscribe-section">
            <div className="auto-container">
              <div className="inner-container">
                <div className="row align-items-center">
                  <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                    <div className="text-box">
                      <h2>
                        <span>Subscribe</span> for the exclusive updates!
                      </h2>
                    </div>
                  </div>
                  <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                    <div className="form-inner">
                      <form method="post" action="contact">
                        <div className="form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Enter Your Email Address"
                            required
                          />
                          <button type="submit" className="theme-btn btn-one">
                            <span>Subscribe Now</span>
                          </button>
                        </div>
                        <div className="form-group">
                          <div className="check-box">
                            <input
                              className="check"
                              type="checkbox"
                              id="checkbox1"
                            />
                            <label htmlFor="checkbox1">
                              I agree to the{" "}
                              <Link href="/">Privacy Policy.</Link>
                            </label>
                          </div>
                        </div>
                      </form>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* subscibe end */}
        </div>
      </Layout>
    </>
  );
}
