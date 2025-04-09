'use client'
import Layout from "@/components/layout/Layout"
import Link from "next/link"
import { useState } from 'react'
export default function service() {
    const [isActive, setIsActive] = useState({
        status: false,
        key: 1,
    })

    const handleToggle = (key) => {
        if (isActive.key === key) {
            setIsActive({
                status: false,
            })
        } else {
            setIsActive({
                status: true,
                key,
            })
        }
    }
    return (
        <>
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Dubai Golden Visa">
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
                                        <li><Link href="service-details-4" className="current">Medical</Link></li>
                                        <li><Link href="service-details-5">Pediatrics</Link></li>
                                        <li><Link href="service-details-6">Modern Laboratory</Link></li>
                                    </ul>
                                </div>
                            </div> */}
                            <div className="service-block-one">
                                <div className="inner-box">
                                    <div className="image-box">
                                        <figure className="image"><img src="assets/images/service/service-6.png" alt="" /></figure>
                                        {/* <div className="icon-box">
                                                <img src="assets/icons/passport.png" alt="business" /></div> */}
                                    </div>
                                    {/* <div className="lower-content">
                                        <h3>Dubai Golden Visa</h3>
                                        <p>Amet minim mollit non deserunt ullamco aliqua dolor do amet sint.</p>
                                    </div> */}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-8 col-md-12 col-sm-12 content-side">
                        <div className="service-details-content">
                            <div className="content-one mb_60">
                                {/* <figure className="image-box mb_40"><img src="assets/images/service/service-12.jpg" alt="" /></figure> */}
                                <div className="text-box">
                                    <h2>Dubai Golden Visa</h2>
                                    <p>The Dubai Golden Visa represents a milestone opportunity for exceptional talent and significant investors to secure long-term residency in one of the world's most dynamic cities. As your trusted partner, Biz InCorp navigates the intricate qualification criteria and documentation process with precision and expertise.</p>
                                    <p>  <br/>Our specialized team handles every aspect of your Golden Visa journey—from initial eligibility assessment to final approval. We've streamlined the process to eliminate unnecessary delays and complications, ensuring a smooth path to your 5 or 10-year residency status.</p>
                                    <p>  <br/>With Biz InCorp, you gain more than just application assistance; you receive strategic guidance on maintaining your Golden Visa status and leveraging its benefits. Our consultants provide personalized advice tailored to your unique circumstances and goals.</p>
                                    <p> <br/>Experience peace of mind knowing your future in Dubai is being handled by professionals with established relationships with relevant government authorities. Your Golden Visa aspirations are too important to leave to chance—trust Biz InCorp's proven track record of successful applications across all eligible categories.</p>
                                </div>
                            </div>
                            <div className="content-two">
                                <div className="image-inner">
                                    <div className="row clearfix">
                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                            <figure className="image-box mb_30"><img src="assets/images/service/service-8.png" alt="" /></figure>
                                        </div>
                                        <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                            <figure className="image-box mb_30"><img src="assets/images/service/service-9.png" alt="" /></figure>
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
                                    <h2><span>Subscribe</span> for the exclusive updates!</h2>
                                </div>
                                </div>
                                <div className="col-lg-6 col-md-12 col-sm-12 form-column">
                                <div className="form-inner">
                                    <form method="post" action="contact">
                                    <div className="form-group">
                                        <input type="email" name="email" placeholder="Enter Your Email Address" required />
                                        <button type="submit" className="theme-btn btn-one"><span>Subscribe Now</span></button>
                                    </div>
                                    {/* <div className="form-group">
                                        <div className="check-box">
                                        <input className="check" type="checkbox" id="checkbox1" />
                                        <label htmlFor="checkbox1">I agree to the <Link href="/">Privacy Policy.</Link></label>
                                        </div>
                                    </div> */}
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
    )
}