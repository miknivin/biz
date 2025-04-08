"use client";
import Layout from "@/components/layout/Layout";
import TestimonialSlider3 from "@/components/slider/TestmonialSlider3";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [isOpen, setOpen] = useState(false);
  const [isActive, setIsActive] = useState({
    status: false,
    key: 1,
  });

  const handleToggle = (key) => {
    if (isActive.key === key) {
      setIsActive({
        status: false,
      });
    } else {
      setIsActive({
        status: true,
        key,
      });
    }
  };
  return (
    <>
      <Layout
        headerStyle={2}
        footerStyle={1}
        isAttestation={true}
        breadcrumbTitle="Indian Certificate Attestations"
      >
        {/* about-section */}
        <section className="about-style-two pt_120 pb_120">
          <div className="pattern-layer">
            {/* <div className="pattern-1 rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-8.png)" }}></div>
                  <div className="pattern-2 rotate-me" style={{ backgroundImage: "url(assets/images/shape/shape-9.png)" }}></div> */}
            <div
              className="pattern-3"
              style={{
                backgroundImage: "url(assets/images/shape/shape-11.png)",
              }}
            ></div>
            <div
              className="pattern-4"
              style={{
                backgroundImage: "url(assets/images/shape/shape-35.png)",
              }}
            ></div>
          </div>
          <div className="auto-container">
            <div className="row clearfix d-flex flex-row-reverse">
              <div className="col-lg-4 col-md-12 col-sm-12 image-column">
                <div className="image_block_one">
                  <div className="image-box">
                    <div
                      className="shape float-bob-x"
                      style={{
                        backgroundImage: "url(assets/images/shape/shape-7.png)",
                      }}
                    ></div>
                    <div
                      className="image-shape"
                      style={{
                        backgroundImage:
                          "url(assets/images/shape/shape-26.png)",
                      }}
                    ></div>
                    <figure className="image-2">
                      <img
                        src="/assets/images/attestation/Degree_certificate_Attestation.jpg"
                        alt=""
                      />
                    </figure>
                    {/* <div className="icon-one"><i className="icon-13"></i></div>
                          <div className="icon-two"><i className="icon-14"></i></div> */}
                  </div>
                </div>
              </div>
              <div className="col-lg-8 col-md-12 col-sm-12 content-column">
                <div className="content_block_one">
                  <div className="content-box ml_30">
                    <div className="sec-title mb_15">
                      <h2>Indian Certificate Attestation For UAE</h2>
                    </div>
                    <div className="text-box mb_40">
                      <p>
                        Indian certificate attestation is the process of
                        verifying the authenticity of an Indian educational or
                        non-educational certificate for use in the UAE. The
                        attestation process involves having the certificate
                        authenticated by the Indian government and then by the
                        UAE government. The process of attestation take time and
                        Prompt Attestation Services prides itself on offering
                        the most cost-effective and efficient certificate
                        attestation in Dubai,UAE to meet your needs.
                        Furthermore, any Indian university functioning outside
                        of India, such as Amity University, BITS Pilani, Anna
                        University, Bangalore University, Mangalore University,
                        Punjab University, etc are mainly accredited and
                        registered in India. Hence, the certificates issued from
                        these universities need attestation from the Indian
                        Authorities.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        <div className="container mt-4">
          <div className="row">
            <div className="col-lg-8 col-md-12 col-sm-12 ">
              <h1 className="fs-2 mb-3">
                What is the Process of Indian Certificate Attestation?
              </h1>
              <p className="text-primary mb-3">
                The process generally involves Five levels of authentication:
              </p>
              <ul>
                <li className="mb-2 ">Notarization</li>
                <li className="mb-2 ">Sub division magistrate</li>
                <li className="mb-2 ">
                  Ministry of External Affairs (MEA) Attestation in India
                </li>
                <li className="mb-2 ">UAE Embassy Attestation in India</li>
                <li className="mb-2 ">
                  Ministry of Foreign affairs (MOFA) in UAE
                </li>
              </ul>
              <h2 className="fs-3 mb-3 mt-4">Indian Educational Certificate</h2>
              <ul>
                <li className="mb-2 ">Degree Certificate Attestation</li>
                <li className="mb-2 ">Master Degree Attestation</li>
                <li className="mb-2 ">Pre Degree Attestation</li>
                <li className="mb-2 ">Diploma Certificate Attestation</li>
                <li className="mb-2 ">Engineering Certificate Attestation</li>
                <li className="mb-2 ">Bachelor Certificate Attestation</li>
                <li className="mb-2 ">B Tech. Certificate Attestation</li>
                <li className="mb-2 ">Mark sheets Attestation</li>
              </ul>
              <h2 className="fs-3 mb-3 mt-4">Indian Personal Documents</h2>
              <ul>
                <li className="mb-2 ">Marriage Certificate Attestation</li>
                <li className="mb-2 ">Birth Certificate Attestation</li>
                <li className="mb-2 ">
                  School Leaving Certificate Attestation
                </li>
                <li className="mb-2 ">Divorce Certificate Attestation</li>
                <li className="mb-2 ">Transfer Certificate Attestation</li>
                <li className="mb-2 ">Medical Certificate Attestation</li>
                <li className="mb-2 ">Death Certificate Attestation</li>
                <li className="mb-2 ">Experience Certificate Attestation</li>
              </ul>
              <h2 className="fs-3 mb-3 mt-4">
                Purpose of Indian Degree Attestation for UAE:
              </h2>
              <ul>
                <li className="mb-2 ">Marriage Certificate Attestation</li>
                <li className="mb-2 ">Birth Certificate Attestation</li>
                <li className="mb-2 ">
                  School Leaving Certificate Attestation
                </li>
                <li className="mb-2 ">Divorce Certificate Attestation</li>
                <li className="mb-2 ">Transfer Certificate Attestation</li>
                <li className="mb-2 ">Medical Certificate Attestation</li>
                <li className="mb-2 ">Death Certificate Attestation</li>
                <li className="mb-2 ">Experience Certificate Attestation</li>
              </ul>
              <p className="mb-4">
                Ensure your documents attestation process for UAE is smooth and
                hassle-free! We provide expert assistance for attestation,
                making your documents legally recognized in the UAE. Don’t let
                paperwork hold you back — rely on our reliable services today!
                +971 56 1826946 or email us at thebizincorp@gmail.com
              </p>
            </div>
          </div>
        </div>
        {/* subscibe end */}
      </Layout>
    </>
  );
}
