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
        breadcrumbTitle="Certificate Attestation Services"
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
                                                <li><Link href="service-details-5">Pediatrics</Link></li>
                                                <li><Link href="service-details-6" className="current">Modern Laboratory</Link></li>
                                            </ul>
                                        </div>
                                    </div> */}
                    <div className="service-block-one">
                      <div className="inner-box">
                        <div className="image-box">
                          <figure className="image">
                            <img
                              src="assets/images/service/Certificate Attestation Services 417x277.jpg"
                              alt=""
                            />
                          </figure>
                          {/* <div className="icon-box">
                                                <img src="assets/icons/documents.png" alt="business" /></div> */}
                        </div>
                        {/* <div className="lower-content">
                                                <h3>Modern Laboratory</h3>
                                                <p>Amet minim mollit non deserunt ullamco aliqua dolor do amet sint.</p>
                                            </div> */}
                      </div>
                    </div>
                  </div>
                </div>
                <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                  <div className="service-details-content">
                    <div className="content-one mb_60">
                      {/* <figure className="image-box mb_40"><img src="assets/images/service/service-14.jpg" alt="" /></figure> */}
                      <div className="text-box">
                        <h2>Certificate Attestation Services</h2>
                        <p>
                          Document attestation represents a critical gateway for
                          international business operations and personal
                          transitions. Biz InCorp's attestation services cover
                          more than 120 countries, ensuring your vital documents
                          receive proper authentication and recognition across
                          global jurisdictions.
                        </p>
                        <p>
                          {" "}
                          <br />
                          Our streamlined process transforms a potentially
                          complex and time-consuming task into a simple,
                          worry-free experience. From educational credentials
                          and commercial contracts to personal certificates, we
                          manage the complete attestation journey—origin country
                          verification, UAE Foreign Affairs authentication, and
                          destination country legalization.
                        </p>
                        <p>
                          <br />
                          With established channels across government
                          ministries, embassies, and consulates worldwide, we
                          expedite attestations while maintaining complete
                          compliance with ever-changing international
                          requirements. Our dedicated attestation specialists
                          track your documents throughout the process, providing
                          real-time updates and ensuring secure handling.
                        </p>
                        <p>
                          <br /> Choose Biz InCorp to navigate the intricate web
                          of international document authentication with
                          confidence. Our comprehensive service eliminates
                          rejection risks and unnecessary delays, providing the
                          validated documentation foundation necessary for your
                          global business and personal endeavors.
                        </p>
                      </div>
                    </div>
                    <div className="content-two">
                      <div className="image-inner">
                        <div className="row clearfix">
                          <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                            <figure className="image-box mb_30">
                              <img
                                src="assets/images/service/Certificate Attestation Services 417x252.jpg"
                                alt=""
                              />
                            </figure>
                          </div>
                          <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                            <figure className="image-box mb_30">
                              <img
                                src="assets/images/service/Certificate Attestation Services (417X252).jpg"
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
                              <Link href="/privacy-policy">Privacy Policy.</Link>
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
