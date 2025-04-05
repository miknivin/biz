'use client'
import Link from "next/link"
import { Autoplay, Navigation, Pagination } from "swiper/modules"
import { Swiper, SwiperSlide } from "swiper/react"

const swiperOptions = {
    modules: [Autoplay, Pagination, Navigation],
    slidesPerView: 1,
    spaceBetween: 30,
    autoplay: {
        delay:2500,
        disableOnInteraction: false,
    },
    loop: true,

    // Navigation
    navigation: {
        nextEl: '.h1n',
        prevEl: '.h1p',
    },

    // Pagination
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

    breakpoints: {
        320: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        575: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        767: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        991: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1199: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
        1350: {
            slidesPerView: 1,
            // spaceBetween: 30,
        },
    }
}
export default function TestimonialSlider1() {
    return (
        <>
            <Swiper {...swiperOptions} className="single-item-carousel owl-carousel owl-theme owl-dots-none owl-nav-none">
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-23"></i></div>
                    <p>"Biz InCorp made my UAE business setup so easy and efficient. Highly recommend their services!"
</p>
                    <div className="author-box">
                      <figure className="author-thumb"><img src="assets/images/resource/testimonial-4.jpg" alt="" /></figure>
                      <ul className="rating clearfix">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                      </ul>
                      <h3>Aisha </h3>
                      <span className="designation">Entrepreneur</span>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-23"></i></div>
                    <p>"Their Dubai attestation service was quick and hassle-free. Saved me a lot of time!"
</p>
                    <div className="author-box">
                      <figure className="author-thumb"><img src="assets/images/resource/testimonial-1.jpg" alt="" /></figure>
                      <ul className="rating clearfix">
                      <li><i className="fas fa-star"></i></li>
<li><i className="fas fa-star"></i></li>
<li><i className="fas fa-star"></i></li>
<li><i className="fas fa-star"></i></li>
<li><i className="fas fa-star-half-alt"></i></li>

                      </ul>
                      <h3>James </h3>
                      <span className="designation">Business Owner
</span>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-23"></i></div>
                    <p>"Thanks to Biz InCorp, I secured my Golden Visa without any stress. Amazing team!"
</p>
                    <div className="author-box">
                      <figure className="author-thumb"><img src="assets/images/resource/testimonial-3.jpg" alt="" /></figure>
                      <ul className="rating clearfix">
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                        <li><i className="fas fa-star"></i></li>
                      </ul>
                      <h3>Maria </h3>
                      <span className="designation">Investor</span>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                <SwiperSlide className="slide-item">
                <div className="testimonial-block-one">
                  <div className="inner-box">
                    <div className="icon-box"><i className="icon-23"></i></div>
                    <p>"Their consultancy helped me expand my business to multiple countries. Truly professional!"
</p>
                    <div className="author-box">
                      <figure className="author-thumb"><img src="assets/images/resource/testimonial-2.jpg" alt="" /></figure>
                      <ul className="rating clearfix">
                      <ul className="flex">
  <li><i className="fas fa-star text-yellow-500"></i></li>
  <li><i className="fas fa-star text-yellow-500"></i></li>
  <li><i className="fas fa-star text-yellow-500"></i></li>
  <li><i className="fas fa-star text-yellow-500"></i></li>
  <li><i className="fas fa-star-half-alt text-yellow-500"></i></li>
</ul>

                      </ul>
                      <h3>Rajesh </h3>
                      <span className="designation">CEO</span>
                    </div>
                  </div>
                </div>
                </SwiperSlide>
                
               
            </Swiper>
        </>
    )
}
