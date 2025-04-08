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
        breadcrumbTitle="Russian Certificate Attestation in UAE"
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
                        src="/assets/images/attestation/uk--certificate.jpg"
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
                      <h2>Russian Certificate Attestation for UAE</h2>
                    </div>
                    <div className="text-box mb_40">
                      <p className="pb-3">
                        Any document which was issued outside of UAE needs to be
                        attested first from the home country and needs to be
                        legalized by the UAE Embassy in the home country.
                      </p>
                      <p className="pb-3">
                        A Russian document, such as degree, diploma, marriage or
                        birth certificate, etc. first needs to be translated and
                        ratified by the concerned local authorities in Russia
                        along with the archive certificates in case of
                        educational documents, super legalized by the UAE
                        Embassy in Moscow and in the end, by Ministry of Foreign
                        Affairs in UAE.
                      </p>
                      <p className="pb-3">
                        The process remains complicated with regards to the
                        jurisdiction, documents to be submitted and the
                        attestations to be done if one undertakes to do it on
                        their own. That’s where we step in with our experienced
                        attestation consultants, ready to take over and make it
                        hassle-free. Your presence in Russia will not be
                        required for getting the documents legalized for UAE.
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
              <div className="row mb-4">
                {/* UK Personal Documents Column */}
                <div className="col-md-4 border-end">
                  <h3 className="text-dark mb-3">Russian Personal Documents Attestation</h3>
                  <ul className="list-unstyled">
                    <li className="text-secondary mb-2">
                    Russia Birth Certificate Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Russia Marriage Certificate Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Russia Death Certificate Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Russia Medical Certificate Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Russia Transfer Certificate Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Russia Divorce Decree Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Russia Power of Attorney Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Russia Passport Attestations
                    </li>
                    <li className="text-secondary mb-2">
                    Russia Birth Certificate Issuance
                    </li>
                    <li className="text-secondary mb-2">
                    Russia Marriage Certificate Issuance
                    </li>
                  </ul>
                </div>

                <div className="col-md-4 border-end">
                  <h3 className="text-dark mb-3">Russian Commercial Documents Attestation</h3>
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
                  Russian Educational Certificate Attestation
                  </h3>
                  <ul className="list-unstyled">
                    <li className="text-secondary mb-2">
                    Russia Degree Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Russia Master Degree Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Russia Diploma Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Membership Certificate Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Russia Transcripts Attestation
                    </li>
                    <li className="text-secondary mb-2">
                    Russia Pre Degree Attestation
                    </li>
                  </ul>
                  <div className="d-flex gap-2 mt-4">
                    <Link
                      href="#"
                      className="btn btn-outline-primary rounded-pill"
                      role="button"
                    >
                      Call Us
                    </Link>
                    <Link
                      href="#"
                      className="btn btn-outline-secondary rounded-pill"
                      role="button"
                    >
                      Mail Us
                    </Link>
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
