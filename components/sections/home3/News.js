import Link from 'next/link';
import React from 'react';

export default function news() {
  return (
    <section className="news-section sec-pad bg-color-1">
            <div className="auto-container">
                <div className="sec-title mb_50 centred">
                    <span className="sub-title">Our Blog </span>
                    <h2>Keep Up-to-date With Our Most <br />Recent Articles</h2>
                </div>
                <div className="row clearfix">
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><Link href="blog-details"><img src="assets/images/news/news-1.jpg" alt="" /></Link></figure>
                                <div className="lower-content">
                                    <ul className="post-info mb_15 clearfix">
                                        <li><Link href="blog-details">Admin</Link></li>
                                        <li>15 Mar 2025</li>
                                        <li>03 Comments</li>
                                    </ul>
                                    <h3><Link href="blog-details">Top 5 Tips for a Smooth Business Setup in the UAE</Link></h3>
                                    <p>Discover expert advice on navigating the UAE business landscape, from licensing to compliance.</p>
                                    <div className="link">
                                        <Link href="blog-details"><span>Read More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><Link href="blog-details"><img src="assets/images/news/news-2.jpg" alt="" /></Link></figure>
                                <div className="lower-content">
                                    <ul className="post-info mb_15 clearfix">
                                        <li><Link href="blog-details">Admin</Link></li>
                                        <li>10 Mar 2025</li>
                                        <li>01 Comment</li>
                                    </ul>
                                    <h3><Link href="blog-details">How to Secure a Golden Visa: A Step-by-Step Guide</Link></h3>
                                    <p>Learn the ins and outs of applying for a Golden Visa with our comprehensive guide.
</p>
                                    <div className="link">
                                        <Link href="blog-details"><span>Read More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-6 col-sm-12 news-block">
                        <div className="news-block-one wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                            <div className="inner-box">
                                <figure className="image-box"><Link href="blog-details"><img src="assets/images/news/news-3.jpg" alt="" /></Link></figure>
                                <div className="lower-content">
                                    <ul className="post-info mb_15 clearfix">
                                        <li><Link href="blog-details">Admin</Link></li>
                                        <li>08 Mar 2025</li>
                                        <li>02 Comments</li>
                                    </ul>
                                    <h3><Link href="blog-details">Why Document Attestation Matters for Global Business</Link></h3>
                                    <p>Understand the importance of attestation and how Biz InCorp simplifies the process for you.</p>
                                    <div className="link">
                                        <Link href="blog-details"><span>Read More</span></Link>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
  );
};
