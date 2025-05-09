"use client";
import Link from "next/link";
import React, { useState } from "react";
import ModalVideo from "react-modal-video";
export default function Banner() {
  const [isOpen, setOpen] = useState(false);
  return (
    <>
      <section className="banner-style-three p_relative">
        <div
          className="pattern-layer"
          style={{ backgroundImage: "url(assets/images/shape/shape-29.png)" }}
        ></div>
        <div className="auto-container">
          <div className="row align-items-center">
            <div className="col-lg-6 col-md-12 col-sm-12 content-column">
              <div className="content-box">
                <div
                  className="shape"
                  style={{
                    backgroundImage: "url(assets/images/shape/shape-30.png)",
                  }}
                ></div>
                <span className="upper-text">
                  Start Your Business Journey with Ease
                </span>
                <h2>
                  Expert <span>Solutions for Global</span>Entrepreneurs.
                </h2>

                <p>
                  At Biz InCorp, we provide expert guidance for business setup
                  in Dubai, handles visa applications, and attestations across
                  120+ countries. Let us handle the complexities while you focus
                  on growing your dream venture.
                </p>
                <div className="btn-box">
                  <Link href="/contact" className="theme-btn btn-one mr_60">
                    <span>Contact Us</span>
                  </Link>
                  {/* <a onClick={() => setOpen(true)}>
                    <i className="fas fa-play"></i>
                  </a> */}
                </div>
              </div>
            </div>
            <div className="col-lg-6 col-md-12 col-sm-12 image-column">
              <div className="image-box">
                <div className="image-shape">
                  <div
                    className="shape-1"
                    style={{
                      backgroundImage: "url(assets/images/shape/shape-31.png)",
                    }}
                  ></div>
                  <div
                    className="shape-2 rotate-me"
                    style={
                      {
                        // backgroundImage: "url(assets/images/shape/shape-9.png)",
                      }
                    }
                  ></div>
                  <div
                    className="shape-3 rotate-me"
                    style={
                      {
                        // backgroundImage: "url(assets/images/shape/shape-8.png)",
                      }
                    }
                  ></div>
                  <div
                    className="shape-4"
                    style={{
                      backgroundImage: "url(assets/images/shape/shape-32.png)",
                    }}
                  ></div>
                </div>
                <figure className="image">
                  <img src="/assets/images/banner/banner-img-3.jpg" alt="" />
                </figure>
                {/* <div className="text-box">
                  <h3>Dr. Wade Warren</h3>
                  <span className="designation">Senior Medical Assistant</span>
                </div> */}
              </div>
            </div>
          </div>
        </div>
      </section>
      <ModalVideo
        channel="youtube"
        autoplay
        isOpen={isOpen}
        videoId="nfP5N9Yc72A"
        onClose={() => setOpen(false)}
      />
    </>
  );
}
