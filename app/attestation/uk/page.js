"use client";
import Layout from "@/components/layout/Layout";
import TestimonialSlider3 from "@/components/slider/TestmonialSlider3";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
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
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="About Us">
        {/* about-section */}
        <section className="about-style-two pt_120 pb_120">
          <div className="pattern-layer">
            {/* <div className="pattern-1 rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
                  <div className="pattern-2 rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-9.png)" }}></div> */}
            <div
              className="pattern-3"
              style={{
                backgroundImage: "url(assets/images/shape/shape-11.png)",
              }}
            ></div>
            <div
              className="pattern-4"
              style={{
                backgroundImage: "url(assets/images/shape/shape-35.png)",
              }}
            ></div>
          </div>
          <div className="auto-container">
            <div className="row clearfix">
              <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                <div className="image_block_one">
                  <div className="image-box">
                    <div
                      className="shape float-bob-x"
                      style={{
                        backgroundImage: "url(assets/images/shape/shape-7.png)",
                      }}
                    ></div>
                    <div
                      className="image-shape"
                      style={{
                        backgroundImage:
                          "url(assets/images/shape/shape-26.png)",
                      }}
                    ></div>
                    <figure className="image-2">
                      <img src="assets/images/resource/about-1.jpg" alt="" />
                    </figure>
                    {/* <div className="icon-one"><i className="icon-13"></i></div>
                          <div className="icon-two"><i className="icon-14"></i></div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content_block_one">
                  <div className="content-box ml_30">
                    <div className="sec-title mb_15">
                      <span className="sub-title">
                        UK Certificate Attestation for UAE{" "}
                      </span>
                      <h2>
                        Are you moving from the UK to UAE for job purposes,
                        business setup, bringing your family for the long term,
                        or investing in property? Then, you must be aware that
                        obtaining a certificate attestation is necessary for a
                        stress-free legal process, whether it’s for visa
                        purposes or another reason. Do not get stressed. We are
                        here to assist you to with all types of UK documents
                        attestation to use in UAE. In case, you have studied a
                        course from Middlesex University, Heriot-Watt
                        University, Bolton University, etc in the UAE itself,
                        the document will still need to be attested by the
                        authorities in London because these universities are
                        registered in the United Kingdom. This process is also
                        applicable to ACCA and NEBOSH certificates, irrespective
                        of the country of issue. Above all certificates will
                        have to be attested only via the UK authorities and UAE
                        Embassy in London. Prompt Attestation Services is
                        assisting with the following documents to hundreds of
                        happy clients on a daily basis to those who moved from
                        UK to UAE. In essence, this comprehensive process
                        ensures your UK certificate gains utmost credibility for
                        various purposes including visa applications and legal
                        proceedings.
                      </h2>
                    </div>
                    <div className="text-box mb_40">
                      <span>
                        Process of UK Certificate Attestation in Dubai.
                      </span>
                      <p>
                        The attestation process of UK certificates typically
                        involves several steps to ensure the authenticity and
                        validity of the document. Here is a general overview of
                        the process:
                      </p>
                      <ul className="list-style-one clearfix">
                 
                        <li><h3>Notarization:</h3><p>Firstly, solicitor or a notary public in the UK notarize your original UK certificate. The notary will verify the document’s authenticity and attach a notarial seal.</p></li>
                        
                        <li><h3>Legalization:</h3><p>After notarizing the document, you need to have the Foreign and Commonwealth Office (FCO) in the UK legalize it. The FCO will attach an apostille to the document, certifying its authenticity.</p></li>
                        <li><h3>Attestation by the UAE Embassy:</h3><p>Once the FCO legalizes the document, you should submit it, along with any necessary forms and fees, to the UAE Embassy in the UK for attestation. The embassy will then verify the document and affix their attestation stamp or seal.</p></li>
                        <li><h3>Attestation by the UAE Ministry of Foreign Affairs (MOFA):</h3><p>After the UAE Embassy attests the document, you must proceed to get the document attested by the UAE Ministry of Foreign Affairs. Lastly, The MOFA will review the document and affix their attestation stamp or seal.</p></li>
                        <li><h3>Translation (if required):</h3><p>If your document is in a language other than English or Arabic, then you need to get it translated into Arabic by a certified translator. The attestation process should also be applied to the translated document.</p></li>
                      </ul>
                    </div>
                    <div className="lower-box">
                      <div className="experience-box">
                        <div className="icon-box">
                          <img
                            src="assets/icons/cooperation.png"
                            alt="business"
                          />
                        </div>
                        <h3>Why is UK certificate attestation required for the UAE?</h3>
                        <p>Certificate attestation is a process by which official documents are authenticated to be used in a foreign country. In the context of the UK, certificate attestation may be required for various reasons, including:</p>
                        {/* <span className="designation">
                          Of Business Expertise
                        </span> */}
                      </div>
                      {/* <figure className="author-thumb"><img src="assets/images/resource/author-1.jpg" alt="" /></figure> */}
                      <div className="signature">Biz InCorp Team</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* about-section end */}

        {/* process */}
        <section className="process-section sec-pad bg-color-1">
          <div className="shape">
            <div
              className="shape-1 float-bob-x"
              style={{
                backgroundImage: "url(assets/images/shape/shape-20.png)",
              }}
            ></div>
            <div
              className="shape-2 float-bob-y"
              style={{
                backgroundImage: "url(assets/images/shape/shape-15.png)",
              }}
            ></div>
            <div className="shape-3"></div>
          </div>
          <div className="auto-container">
            <div className="sec-title mb_50 centred">
              <span className="sub-title">Process</span>
              <h2>
                How We Help You <br />
                Facilitate and Succeed
              </h2>
            </div>
            <div className="inner-container">
              <div
                className="arrow-shape"
                style={{
                  backgroundImage: "url(assets/images/shape/shape-18.png)",
                }}
              ></div>
              <div
                className="processing-block-one wow fadeInLeft animated"
                data-wow-delay="00ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <span className="count-text">01</span>
                  <figure className="image-box">
                    <img src="assets/images/resource/process-1.png" alt="" />
                  </figure>
                  <div className="lower-content">
                    <h3>Schedule a Consultation</h3>
                    <p>
                      Connect with our experts to discuss your business goals
                      and needs.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="processing-block-one wow fadeInLeft animated"
                data-wow-delay="300ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <span className="count-text">02</span>
                  <figure className="image-box">
                    <img src="assets/images/resource/process-2.png" alt="" />
                  </figure>
                  <div className="lower-content">
                    <h3>Apt Solutions</h3>
                    <p>
                      Receive a customized plan for business setup, visas, or
                      attestation.{" "}
                    </p>
                  </div>
                </div>
              </div>
              <div
                className="processing-block-one wow fadeInLeft animated"
                data-wow-delay="600ms"
                data-wow-duration="1500ms"
              >
                <div className="inner-box">
                  <span className="count-text">03</span>
                  <figure className="image-box">
                    <img src="assets/images/resource/process-3.png" alt="" />
                  </figure>
                  <div className="lower-content">
                    <h3>Launch with Confidence</h3>
                    <p>
                      Start your venture with full support, including
                      attestation for over 120 countries.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* process end */}

        {/* testimonial-section */}
        <section className="testimonial-style-two p_relative">
          <div
            className="pattern-layer"
            style={{ backgroundImage: "url(assets/images/shape/shape-19.png)" }}
          ></div>
          <div className="auto-container">
            <div className="row align-items-center">
              <div className="col-lg-6 col-md-12 col-sm-12 thumb-column">
                <div className="thumb-box">
                  <div className="thumb thumb-1">
                    <img src="assets/images/resource/thumb-1.png" alt="" />
                  </div>
                  <div className="thumb thumb-2">
                    <img src="assets/images/resource/thumb-2.jpg" alt="" />
                  </div>
                  <div className="thumb thumb-3">
                    <img src="assets/images/resource/thumb-3.jpg" alt="" />
                  </div>
                  <div className="thumb thumb-4">
                    <img src="assets/images/resource/thumb-4.jpg" alt="" />
                  </div>
                  <div className="thumb thumb-5">
                    <img src="assets/images/resource/thumb-5.jpg" alt="" />
                  </div>
                  <div className="thumb thumb-6">
                    <img src="assets/images/resource/thumb-6.jpg" alt="" />
                  </div>
                </div>
              </div>
              <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                <div className="content-box">
                  <div className="sec-title mb_50">
                    <span className="sub-title">TESTIMONIALS</span>
                    <h2>What Our Clients Say About Biz InCorp</h2>
                  </div>
                  <div className="content-box">
                    {/*Theme Carousel*/}
                    <TestimonialSlider3 />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* testimonial-section */}

        {/* team-section-style-two */}
        {/* <section className="team-section sec-pad centred bg-color-1">
                  <div className="shape">
                    <div className="shape-1 float-bob-y" style={{ backgroundImage: "url(assets/images/shape/shape-15.png)" }}></div>
                    <div className="shape-2"></div>
                    <div className="shape-3 float-bob-x" style={{ backgroundImage: "url(assets/images/shape/shape-16.png)" }}></div>
                  </div>
                  <div className="auto-container">
                    <div className="sec-title mb_50">
                      <span className="sub-title">Our Team</span>
                      <h2>Meet Our Expert Advisors <br />for Your Success</h2> 
                    </div>
                    <div className="row clearfix">
                      <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                          <div className="inner-box">
                            <div className="image-box">
                              <figure className="image"><img src="assets/images/team/team-1.jpg" alt="" /></figure>
                              <ul className="social-links clearfix">
                                <li><Link href="/"><i className="icon-4"></i></Link></li>
                                <li><Link href="/"><i className="icon-5"></i></Link></li>
                                <li><Link href="/"><i className="icon-6"></i></Link></li>
                                <li><Link href="/"><i className="icon-7"></i></Link></li>
                              </ul>
                            </div>
                            <div className="lower-content">
                              <h3><Link href="team-details/">Black Marvin</Link></h3>
                              <span className="designation">Medical Assistant</span>
                            </div>
                          </div>
                        </div>
                      </div>
                      <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-2.jpg" alt="" /></figure>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Eleanor Pena</Link></h3>
                                    <span className="designation">Doctor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="400ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-3.jpg" alt="" /></figure>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Arlene Maccy</Link></h3>
                                    <span className="designation">Nursing Assistant</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 team-block">
                        <div className="team-block-one wow fadeInUp animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <div className="image-box">
                                    <figure className="image"><img src="assets/images/team/team-4.jpg" alt="" /></figure>
                                    <ul className="social-links clearfix">
                                        <li><Link href="/"><i className="icon-4"></i></Link></li>
                                        <li><Link href="/"><i className="icon-5"></i></Link></li>
                                        <li><Link href="/"><i className="icon-6"></i></Link></li>
                                        <li><Link href="/"><i className="icon-7"></i></Link></li>
                                    </ul>
                                </div>
                                <div className="lower-content">
                                    <h3><Link href="team-details">Jenny Wilson</Link></h3>
                                    <span className="designation">Senior Doctor</span>
                                </div>
                            </div>
                        </div>
                    </div>
                    </div>
                  </div>
                </section> */}
        {/* team-section-style-two end */}
        {/* subscibe */}
        <section className="subscribe-section bg-color-1">
          <div className="auto-container">
            <div className="inner-container">
              <div className="row align-items-center">
                <div className="col-lg-6 col-md-12 col-sm-12 text-column">
                  <div className="text-box">
                    <h2>
                      <span>Subscribe</span> for the exclusive offer!
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
                            I agree to the <Link href="/">Privacy Policy.</Link>
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
      </Layout>
    </>
  );
}
