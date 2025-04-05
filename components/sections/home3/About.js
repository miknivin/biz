import Link from "next/link"


export default function About() {
    return (
        <>
           <section className="about-style-three pt_120 pb_120 bg-color-1">
            <div className="pattern-layer" style={{ backgroundImage: 'url(assets/images/shape/shape-35.png)' }}></div>
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-6 col-md-12 col-sm-12 image-column">
                        <div className="image_block_three">
                            <div className="image-box">
                                <div className="image-shape">
                                    {/* <div className="shape-1 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-8.png)' }}></div> */}
                                    <div className="shape-2" style={{ backgroundImage: 'url(assets/images/shape/shape-33.png)' }}></div>
                                    <div className="shape-3" style={{ backgroundImage: 'url(assets/images/shape/shape-7.png)' }}></div>
                                    <div className="shape-4" style={{ backgroundImage: 'url(assets/images/shape/shape-34.png)' }}></div>
                                    <div className="shape-5" style={{ backgroundImage: 'url(assets/images/shape/shape-11.png)' }}></div>
                                </div>
                                <figure className="image image-1"><img src="assets/images/resource/about-2.png" alt="" /></figure>
                                <figure className="image image-2"><img src="assets/images/resource/about-3.png" alt="" /></figure>
                                {/* <div className="icon-box"><i className="icon-14"></i></div> */}
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12 col-sm-12 content-column">
                        <div className="content_block_one">
                            <div className="content-box">
                                <div className="sec-title mb_15">
                                    <span className="sub-title">About Us</span>
                                    <h2>Business Solutions & 
Consultancy
</h2>
                                </div>
                                <div className="text-box mb_40">
                                    <p>At Biz InCorp, we empower entrepreneurs and businesses worldwide with seamless solutions for business setup, visas, and more. With a presence in over 120 countries, our expert team ensures your success every step of the way.
</p>
                                    <ul className="list-style-one clearfix">
                                        <li>Tailored solutions for every business need.</li>
                                        <li>Trusted expertise in UAE and global markets.
</li>
                                        <li>Hassle-free attestation and visa services.</li>
                                    </ul>
                                </div>
                                <div className="lower-box">
                                    <div className="experience-box">
                                    <div className="icon-box">
                            <img src="assets/icons/cooperation.png" alt="business" /></div>
                                        <h3>15 Years </h3>
                                        <span className="designation">of Business Expertise</span>
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
        </>
    )
}
