import React from 'react';

export default function Process() {
    return (
        <section className="process-section sec-pad">
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-19.png)' }}></div>
            <div className="shape">
                <div className="shape-1 float-bob-x" style={{ backgroundImage: 'url(assets/images/shape/shape-20.png)' }}></div>
                <div className="shape-2 float-bob-y" style={{ backgroundImage: 'url(assets/images/shape/shape-15.png)' }}></div>
                <div className="shape-3"></div>
            </div>
            <div className="auto-container">
                <div className="sec-title mb_50 centred">
                    <span className="sub-title">Process</span>
                    <h2>How We Help<br />You Succeed</h2>
                </div>
                <div className="inner-container">
                    <div className="arrow-shape" style={{ backgroundImage: 'url(assets/images/shape/shape-18.png)' }}></div>
                    <div className="processing-block-one wow fadeInLeft animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <span className="count-text">01</span>
                            <figure className="image-box"><img src="assets/images/resource/process-1.png" alt="" /></figure>
                            <div className="lower-content">
                                <h3>Schedule a Consultation</h3>
                                <p>Connect with our experts to discuss your business goals and needs. </p>
                            </div>
                        </div>
                    </div>
                    <div className="processing-block-one wow fadeInLeft animated" data-wow-delay="300ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <span className="count-text">02</span>
                            <figure className="image-box"><img src="assets/images/resource/process-2.png" alt="" /></figure>
                            <div className="lower-content">
                                <h3>Customised Solutions</h3>
                                <p>Receive a customised plan for business setup, visas, or attestation. </p>
                            </div>
                        </div>
                    </div>
                    <div className="processing-block-one wow fadeInLeft animated" data-wow-delay="600ms" data-wow-duration="1500ms">
                        <div className="inner-box">
                            <span className="count-text">03</span>
                            <figure className="image-box"><img src="assets/images/resource/process-3.png" alt="" /></figure>
                            <div className="lower-content">
                                <h3>Launch with Confidence</h3>
                                <p>Start your venture with full support in over 120 countries. </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

