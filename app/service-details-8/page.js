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
            <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Bank Account Assistance">
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
                                                <figure className="image"><img src="assets/images/service/service-3.jpg" alt="" /></figure>
                                                {/* <div className="icon-box">
                                                <img src="assets/icons/customer-service.png" alt="business" /></div> */}
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
                                            <h2>Bank Account Assistance</h2>
                                            <p>Establishing proper banking relationships forms a critical foundation for business operations in the UAE. Biz InCorp's Bank Account Assistance service navigates the increasingly complex banking landscape to secure optimal financial partnerships for your specific business needs.</p>
                                            <p> <br/>Our comprehensive approach includes identifying the most suitable banking institutions based on your industry, transaction patterns, and international requirements. We prepare complete application packages that address the stringent documentation and compliance standards of UAE banks, significantly improving first-time approval rates.</p>
                                            <p><br/>With established relationships across the UAE banking sector, we facilitate introductions and expedite application processing. For international clients, we coordinate remote application steps and minimize required in-person appearances, making banking setup efficient even for non-resident business owners.</p>
                                            <p><br/> Choose Biz InCorp to transform the often challenging process of banking establishment into a straightforward, successful experience. Our expertise ensures your business gains the financial infrastructure necessary for smooth operations, from daily transactions to international trade finance.</p>
                                        </div>
                                    </div>
                                    <div className="content-two">
                                        <div className="image-inner">
                                            <div className="row clearfix">
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box mb_30"><img src="assets/images/service/service-15.jpg" alt="" /></figure>
                                                </div>
                                                <div className="col-lg-6 col-md-6 col-sm-12 image-column">
                                                    <figure className="image-box mb_30"><img src="assets/images/service/service-16.jpg" alt="" /></figure>
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
                                    <div className="form-group">
                                        <div className="check-box">
                                        <input className="check" type="checkbox" id="checkbox1" />
                                        <label htmlFor="checkbox1">I agree to the <Link href="/">Privacy Policy.</Link></label>
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
    )
}