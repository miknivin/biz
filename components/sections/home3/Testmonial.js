import React from "react";
import TestimonialSlider1 from "@/components/slider/TestimonialSlider1";
export default function Testimonial() {
  return (
    <section className="testimonial-style-two bg-color-1">
      <div className="auto-container">
        <div className="row align-items-center">
          <div className="col-lg-6 col-md-12 col-sm-12 thumb-column">
            <div className="thumb-box">
              <div className="thumb thumb-1" style={{ width: "120px" }}>
                <img
                  src="https://ik.imagekit.io/c1jhxlxiy/WhatsApp%20Image%202025-04-28%20at%2012.13.03%20PM.jpeg?updatedAt=1747646782131"
                  alt=""
                />
              </div>
              <div className="thumb thumb-2" style={{ width: "100px" }}>
                <img
                  src="https://ik.imagekit.io/c1jhxlxiy/WhatsApp%20Image%202025-04-28%20at%2012.13.02%20PM.jpeg?updatedAt=1747646376057"
                  alt=""
                />
              </div>
              <div className="thumb thumb-3" style={{ width: "100px" }}>
                <img
                  src="https://ik.imagekit.io/c1jhxlxiy/WhatsApp%20Image%202025-04-28%20at%2012.13.02%20PM%20(1).jpeg?updatedAt=1747646376095"
                  alt=""
                />
              </div>
              <div className="thumb thumb-4" style={{ width: "100px" }}>
                <img
                  src="https://ik.imagekit.io/c1jhxlxiy/WhatsApp%20Image%202025-04-28%20at%2012.13.03%20PM%20(2).jpeg?updatedAt=1747646376013"
                  alt=""
                />
              </div>
              <div className="thumb thumb-5" style={{ width: "100px" }}>
                <img
                  src="https://ik.imagekit.io/c1jhxlxiy/WhatsApp%20Image%202025-04-28%20at%2012.13.04%20PM.jpeg?updatedAt=1747646375788"
                  alt=""
                />
              </div>
              <div className="thumb thumb-6" style={{ width: "120px" }}>
                <img
                  src="https://ik.imagekit.io/c1jhxlxiy/WhatsApp%20Image%202025-04-28%20at%2012.13.03%20PM%20(1).jpeg?updatedAt=1747646375916"
                  alt=""
                />
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
                <TestimonialSlider1 />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
