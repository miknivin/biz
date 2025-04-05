import React from 'react';
import Link from 'next/link';
export default function Contact() {
    return (
        <section className="contact-style-two sec-pad">
            <div className="auto-container">
                <div className="sec-title centred mb_50">
                    <span className="sub-title">Contact Us</span>
                    <h2>Feel Free to Contact Us<br/> Today</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-12 col-sm-12 info-column">
                        <div className="info-inner">
                            <div className="info-block-one">
                                <h3>Quick Contact</h3>
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-2"></i></div>
                                    <p>Main Office: <br /><Link href="tel:+971561826946">+971561826946</Link></p>
                                </div>
                            </div>
                            <div className="info-block-one">
                                <h3>Email Address</h3>
                                <div className="inner-box">
                                    <div className="icon-box"><i className="icon-26"></i></div>
                                    <p>Mail: <br /><Link href="mailto:thebizincorp@gmail.com">thebizincorp@gmail.com</Link></p>
                                </div>
                            </div>
                            <div className="info-block-one">
                                <h3>Mailing Address</h3>
                                <div className="inner-box">
                                    <div className="icon-box"><img src="assets/images/icons/icon-2.png" alt="" /></div>
                                    <p>Al Moosa Tower 2 - Office No:15, Level - 4, Sheikh Zayed Rd - Trade Centre - Trade Centre 1 - Dubai
</p>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 form-column">
                        <div className="form-inner ml_35">
                            <form method="post" action="index-3" className="default-form">
                                <div className="row clearfix">
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="text" name="fname" placeholder="First Name" required />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="text" name="lname" placeholder="Last Name" required />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="email" name="email" placeholder="Email" readOnly />
                                    </div>
                                    <div className="col-lg-6 col-md-6 col-sm-12 form-group">
                                        <input type="text" name="phone" placeholder="Number" readOnly />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <input type="text" name="subject" placeholder="Subject" required />
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group">
                                        <textarea name="message" placeholder="Message"></textarea>
                                    </div>
                                    <div className="col-lg-12 col-md-12 col-sm-12 form-group message-btn">
                                        <button type="submit" className="theme-btn btn-one"><span>Send Message</span></button>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

