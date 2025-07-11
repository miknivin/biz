import Layout from "@/components/layout/Layout";
import Link from "next/link";
export default function Home() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Contact Us">
        <div>
          {/* Contact Form Section */}
          <section className="contact-info-section pt_120">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                  <div className="info-block-one">
                    <h3>Quick Contact</h3>
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-2"></i>
                      </div>
                      <p>
                        Main Office: <br />
                        <Link href="tel:+971 561826946">+971 561826946</Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                  <div className="info-block-one">
                    <h3>Email Address</h3>
                    <div className="inner-box">
                      <div className="icon-box">
                        <i className="icon-26"></i>
                      </div>
                      <p>
                        Mail: <br />
                        <Link href="mailto:thebizincorp@gmail.com">
                          thebizincorp@gmail.com
                        </Link>
                      </p>
                    </div>
                  </div>
                </div>
                <div className="col-lg-4 col-md-6 col-sm-12 info-column">
                  <div className="info-block-one">
                    <h3>Mailing Address</h3>
                    <div className="inner-box">
                      <div className="icon-box">
                        <img src="assets/images/icons/icon-2.png" alt="" />
                      </div>
                      <p>
                        Al Moosa Tower 2 - Office No:15, Level - 4, Sheikh Zayed
                        Rd - Trade Centre - Trade Centre 1 - Dubai
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </section>
          {/* Contact Form Section End */}
          {/* Contact Form Section2 */}
          <section className="contact-style-three pt_90 pb_120">
            <div className="auto-container">
              <div className="row clearfix">
                <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                  <div className="form-inner mr_40">
                    <div className="sec-title mb_50">
                      <h2>Send a Message</h2>
                    </div>
                    <form
                      method="post"
                      action="sendemail.php"
                      id="contact-form"
                      className="default-form"
                    >
                      <div className="row clearfix">
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            name="username"
                            placeholder="First Name"
                            required
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            name="lname"
                            placeholder="Last Name"
                            required
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="email"
                            name="email"
                            placeholder="Your email"
                            required
                          />
                        </div>
                        <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                          <input
                            type="text"
                            name="phone"
                            required
                            placeholder="Phone"
                          />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <input
                            type="text"
                            name="subject"
                            required
                            placeholder="Subject"
                          />
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                          <textarea
                            name="message"
                            placeholder="Message"
                          ></textarea>
                        </div>
                        <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                          <button
                            className="theme-btn btn-one"
                            type="submit"
                            name="submit-form"
                          >
                            <span>Send Message</span>
                          </button>
                        </div>
                      </div>
                    </form>
                  </div>
                </div>
                <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                  <figure className="image-box">
                    <img src="/assets/images/resource/contact-1.png" alt="" />
                  </figure>
                </div>
              </div>
            </div>
          </section>
          {/* Contact Form Section2 End */}

          {/* Google Map Section */}
          <section className="google-map-section">
            {/*Map Outer*/}
            <div className="map-inner">
              <iframe
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3609.8044790464446!2d55.27764077527317!3d25.21815793051186!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3e5f4334a5ea3b8b%3A0x2fc417b3675a6b5a!2sAl%20Moosa%20Tower%202!5e0!3m2!1sen!2sae!4v1712300091420!5m2!1sen!2sae"
                height={570}
                style={{ border: 0, width: "100%" }}
                allowFullScreen
                loading="lazy"
                referrerPolicy="no-referrer-when-downgrade"
              />
            </div>
          </section>
          {/* Google Map Section End */}
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
