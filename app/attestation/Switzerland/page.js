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
        breadcrumbTitle="Switzerland Certificate Attestation"
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
                      <h2>Switzerland Certificate Attestation</h2>
                    </div>
                    <div className="text-box mb_40">
                      <p className="pb-3">
                        Switzerland certificate attestation is a vital procedure
                        when delve into a career or business opportunity in UAE
                        or other country, you need to get attest your
                        certificates by specified authorities.
                      </p>
                      <p className="pb-3">
                        In attestation process an official document, issued by a
                        foreign public authority, is asserted legally in
                        Switzerland. It is carried out by an authorized person,
                        department, or government entity. During this process,
                        the official person puts the seal or stamp on your
                        documents and signs them after validating the documents.
                        The stamped or signed documents considered as verified
                        or valid to use in other countries.
                      </p>
                      <p className="pb-3">
                        We are providing legalization or apostille, for all
                        types of Switzerland originated documents for use in any
                        country. However, the procedure may vary depending on
                        the document and if the host country is a member of The
                        Hague Convention the certificate should be apostilled
                        and if not, the certificates must be attested by the
                        embassy of the country to which you plan to use.
                      </p>
                      <p className="pb-3">
                        As UAE is not a member of Hague Convention, documents
                        require to be attested prior from the Switzerland to
                        being used them here in the UAE. Process of Attaining
                        attestation stamp from Switzerland
                      </p>
                      <ul className="list-unstyled">
                        <li className="text-secondary mb-2">
                          Authorization at the Notary
                        </li>
                        <li className="text-secondary mb-2">
                          Attestation at the Chancellor’s office
                        </li>
                        <li className="text-secondary mb-2">
                          Validation at the Ministry of Foreign Affairs in Bern
                          &
                        </li>
                        <li className="text-secondary mb-2">
                          Last stage is authorization at the UAE embassy in
                          Bern.
                        </li>
                      </ul>
                      <p className="pb-3">
                        Once the attestation for UAE is completed in Switzerland
                        the document is returned to us in UAE to further get the
                        MOFA attestation done locally.
                      </p>
                      <p className="mb-3">
                        In this regard, you need the help of professionals like
                        Prompt Attestation owning years of experience in the
                        Legalization industry. Just give us a call and{" "}
                        <a
                          href="tel:+971561826946"
                          className="text-info fw-bold text-decoration-underline"
                        >
                          +971561826946
                        </a>{" "}
                        to Get a Free Quote.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* subscibe end */}
      </Layout>
    </>
  );
}
