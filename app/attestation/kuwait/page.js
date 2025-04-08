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
        breadcrumbTitle="Kuwait Certificate Attestation for UAE"
      >
        {/* about-section */}
        <section className="about-style-two pt_120">
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
              {/* <div className="col-lg-4 col-md-12 col-sm-12 image-column">
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
                        src="/assets/images/attestation/uk--certificate.jpg"
                        alt=""
                      />
                    </figure>
                  </div>
                </div>
              </div> */}
              <div className="col-12 content-column">
                <div className="content_block_one">
                  <div className="content-box ml_30">
                    <div className="sec-title mb_15">
                      <h2>Kuwait Certificate Attestation for UAE</h2>
                    </div>
                    <div className="text-box mb_40">
                      <p className="pb-4">
                      All the documents issued from the Kuwait, such as personal documents (birth certificate, marriage certificate, divorce certificate, death certificate), educational certificate, commercial or business documents has to be attested before going into use in any government departments in UAE. We have done thousands and thousands of Kuwait documents attestation over the decade. Many people know that attesting Kuwait documents is a complicated process and they search for a stress-free way to get it done. If you are one of them, your search ends here. We Prompt Attestation Services make sure for stress-free certificates attestation
                      </p>
                      <p className="pb-4">
                      We have gained tremendous experience over the decade by serving our clients who are especially having Kuwait documents authentication requirement for gulf countries like UAE, Saudi Arabia (KSA) and Qatar. Below are the procedures to get Kuwait documents attested, which may make you feel too complicated, But you do not need to worry, Just talk to our attestation advisor and confirm your order. We will do all the work and get your document attested.
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
            <div className="container mt-4">
              <div className="row mb-4 pb-4">
                {/* UK Personal Documents Column */}
                <div className="col-md-4 border-end">
                  <h3 className="text-dark mb-3">Kuwait Personal Documents</h3>
                  <ul className="list-unstyled">
                    <li className="text-secondary mb-2">
                    Kuwait Birth Certificate Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Kuwait Marriage Certificate Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Kuwait Death Certificate Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Kuwait Medical Certificate Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Kuwait Transfer Certificate Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Kuwait Divorce Decree Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Kuwait Power of Attorney Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Kuwait Passport Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Kuwait Birth Certificate Issuance
                    </li>
                    <li className="text-secondary mb-2">
                    Kuwait Marriage Certificate Issuance
                    </li>
                  </ul>
                </div>

                {/* UK Commercial Documents Column */}
                <div className="col-md-4 border-end">
                  <h3 className="text-dark mb-3">Kuwait Commercial Documents</h3>
                  <ul className="list-unstyled">
                    <li className="text-secondary mb-2">
                    Memorandum of Association
                    </li>
                    <li className="text-secondary mb-2">
                      Shareholders Certificate
                    </li>
                    <li className="text-secondary mb-2">
                      Articles of Association
                    </li>
                    <li className="text-secondary mb-2">
                      Board Resolution Attestation
                    </li>
                    <li className="text-secondary mb-2">
                      Certificate of Incumbency
                    </li>
                    <li className="text-secondary mb-2">Commercial Invoices</li>
                    <li className="text-secondary mb-2">
                      Certificate of Incorporation
                    </li>
                    <li className="text-secondary mb-2">
                      Certificate of Good Standing
                    </li>
                    <li className="text-secondary mb-2">
                      Agency Agreements, etc.
                    </li>
                  </ul>
                </div>

                {/* Educational Documents Attestation Column */}
                <div className="col-md-4">
                  <h3 className="text-dark mb-3">
                    Educational Documents Attestation
                  </h3>
                  <ul className="list-unstyled">
                    <li className="text-secondary mb-2">
                    Kuwait Degree Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Kuwait Master Degree Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Kuwait Diploma Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Membership Certificate Attestation
                    </li>
                    <li className="text-secondary mb-2">
                      Transcripts Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Kuwait Pre Degree Attestation
                    </li>
                  </ul>
                  <div className="d-flex gap-2 mt-4">
                    <a
                      href="tel:971561826946"
                      className="btn btn-outline-primary rounded-pill"
                      role="button"
                    >
                      Call Us
                    </a>
                    <a
                      href="mailto:thebizincorp@gmail.com"
                      className="btn btn-outline-secondary rounded-pill"
                      role="button"
                    >
                      Mail Us
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* subscibe end */}
      </Layout>
    </>
  );
}
