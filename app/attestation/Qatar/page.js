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
        breadcrumbTitle="Qatar Certificate Attestation"
      >
        {/* about-section */}
        <section className="about-style-two pt_120 pb-5">
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
              <div className="col-lg-4 col-md-12 col-sm-12 image-column d-none">
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
              <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                <div className="content_block_one">
                  <div className="content-box ml_30">
                    <div className="sec-title mb_15">
                      <h2>Qatar Certificate Attestation</h2>
                    </div>
                    <div className="text-box mb_40">
                      <p>
                        Qatar Certificate attestation is important while moving
                        to Qatar. Qatar being an emperor state, welcomes all its
                        talented immigrants as they migrate in hope for brighter
                        opportunities and one of the best business climates that
                        attract millions of investment opportunities.
                      </p>
                      <p>
                        Since Qatar isn’t a member of the Hague convention, it
                        is necessary to get attestation whether educational,
                        non-educational or even commercial.
                      </p>
                      <h1 className="fs-2 mb-3">
                        Requirement of Certificate Attestation for Use in Qatar
                        Based on their types
                      </h1>
                      <p className="mb-3">
                        Educational certificates include Degree, Diploma,
                        BA/BSc, M.A and PhD certificate attestation required for
                        employment visa/labor card.
                      </p>
                      <p className="mb-3">
                        Non-educational or Personal certificates include
                        marriage certificate, experience certificate, divorce
                        certificates, and death certificate attestation required
                        for family visa/admission of school children. Commercial
                        certificates include trade license, Memorandum of
                        Association, Articles of Association, Certificate of
                        Incumbency, Certificate of Incorporation, Special Power
                        of Attorney, Commercial Invoice, etc. required
                        attestation for company registration, to open a new bank
                        account or Planning to buy/sell shares.
                      </p>
                      <h2>Procedure of Certificate Attestation in Qatar</h2>
                      <p>
                        Every qualification certificate issued from outside the
                        State of Qatar, being attested for Qatar now requires
                        Certificate/Diploma with a transcript and a cover letter
                        as supporting evidence alongside it. This means that the
                        process now entails attesting three documents rather
                        than one. Non-educational or personal certificate
                        attestation process includes the attestation by the
                        state department, Ministry of External Affairs (MEA) and
                        finally the Embassy of Qatar Commercial documents
                        attestation process includes attestation from the State
                        Department, followed by the attestation of the Ministry
                        of External Affairs, and finally the Embassy of Qatar.
                      </p>
                      <p>
                        Our attestation services are approved and recognized by
                        all government as well as private sector of Qatar. We
                        guarantee you the security of document in our hands and
                        we value your trust in us above everything else. Our
                        experts will help you to clear all steps of attestation
                        process & makes it hassle-free. To move ahead, Contact
                        us : +971 56 1826946 or mail us thebizincorp@gmail.com
                      </p>
                    </div>
                  </div>
                </div>
              </div>
              {/* <div className="container mt-4">
                <div className="row">
                  <div className="col-lg-8 col-md-12 col-sm-12 "></div>
                </div>
              </div> */}
            </div>
          </div>
        </section>

        {/* subscibe end */}
      </Layout>
    </>
  );
}
