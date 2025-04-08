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
        breadcrumbTitle="UK Certificate Attestation in UAE"
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
                      <h2>UK Certificate Attestation in UAE</h2>
                    </div>
                    <div className="text-box mb_40">
                      <p className="pb-4">
                        Are you moving from the UK to UAE for job purposes,
                        business setup, bringing your family for the long term,
                        or investing in property? Then, you must be aware that
                        obtaining a certificate attestation is necessary for a
                        stress-free legal process, whether it’s for visa
                        purposes or another reason. Do not get stressed. We are
                        here to assist you to with all types of UK documents
                        attestation to use in UAE.
                      </p>
                      <p className="pb-4">
                        In case, you have studied a course from Middlesex
                        University, Heriot-Watt University, Bolton University,
                        etc in the UAE itself, the document will still need to
                        be attested by the authorities in London because these
                        universities are registered in the United Kingdom. This
                        process is also applicable to ACCA and NEBOSH
                        certificates, irrespective of the country of issue.
                        Above all certificates will have to be attested only via
                        the UK authorities and UAE Embassy in London.
                      </p>
                      <p className="pb-4">
                        Prompt Attestation Services is assisting with the
                        following documents to hundreds of happy clients on a
                        daily basis to those who moved from UK to UAE. In
                        essence, this comprehensive process ensures your UK
                        certificate gains utmost credibility for various
                        purposes including visa applications and legal
                        proceedings.
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
              <>
                <h1 className="fs-2 mb-3">
                  Process of UK Certificate Attestation in Dubai
                </h1>
                <p className="mb-3">
                  The attestation process of UK certificates typically involves
                  several steps to ensure the authenticity and validity of the
                  document. Here is a general overview of the process:
                </p>
                <ol className="list-group list-group-numbered">
                  <li className="list-group-item">
                    <strong>Notarization:</strong>
                    <p className="text-secondary mb-0">
                      Firstly, solicitor or a notary public in the UK notarize
                      your original UK certificate. The notary will verify the
                      document’s authenticity and attach a notarial seal.
                    </p>
                  </li>
                  <li className="list-group-item">
                    <strong>Legalization:</strong>
                    <p className="text-secondary mb-0">
                      After notarizing the document, you need to have the
                      Foreign and Commonwealth Office (FCO) in the UK legalize
                      it. The FCO will attach an apostille to the document,
                      certifying its authenticity.
                    </p>
                  </li>
                  <li className="list-group-item">
                    <strong>Attestation by the UAE Embassy:</strong>
                    <p className="text-secondary mb-0">
                      Once the FCO legalizes the document, you should submit it,
                      along with any necessary forms and fees, to the UAE
                      Embassy in the UK for attestation. The embassy will then
                      verify the document and affix their attestation stamp or
                      seal.
                    </p>
                  </li>
                  <li className="list-group-item">
                    <strong>
                      Attestation by the UAE Ministry of Foreign Affairs (MOFA):
                    </strong>
                    <p className="text-secondary mb-0">
                      After the UAE Embassy attests the document, you must
                      proceed to get the document attested by the UAE Ministry
                      of Foreign Affairs. Lastly, the MOFA will review the
                      document and affix their attestation stamp or seal.
                    </p>
                  </li>
                  <li className="list-group-item">
                    <strong>Translation (if required):</strong>
                    <p className="text-secondary mb-0">
                      If your document is in a language other than English or
                      Arabic, then you need to get it translated into Arabic by
                      a certified translator. The attestation process should
                      also be applied to the translated document.
                    </p>
                  </li>
                </ol>
              </>
              <>
                <h1 className="fs-2 mb-3 pt-3">
                  Why is UK certificate attestation required for the UAE?
                </h1>
                <p className="mb-3">
                  Certificate attestation is a process by which official
                  documents are authenticated to be used in a foreign country.
                  In the context of the UK, certificate attestation may be
                  required for various reasons, including:
                </p>
                <div className="container mt-4">
                  <h2 className="fs-3 mb-3">Educational Purposes:</h2>
                  <ul className="mb-4">
                    <li className="text-secondary mb-2">
                      <strong>Higher Education:</strong>
                      <br /> If you are planning to pursue higher education in a
                      foreign country, the educational certificates issued in
                      the UK may need to be attested to verify their
                      authenticity.
                    </li>
                    <li className="text-secondary mb-2">
                      <strong>Professional Courses:</strong>
                      <br /> Certificates from professional courses or
                      vocational training programs may also require attestation
                      for recognition in another country.
                    </li>
                  </ul>

                  <h2 className="mb-3">Employment Purposes:</h2>
                  <ul className="mb-4">
                    <li className="text-secondary mb-2">
                      <strong>Job Opportunities:</strong> <br /> When seeking
                      employment in a foreign country, employers may require
                      attested copies of your educational and professional
                      certificates to ensure their validity.
                    </li>
                    <li className="text-secondary mb-2">
                      <strong>Work Visa:</strong>
                      <br /> It may require attested educational and
                      professional documents as part of the process for
                      obtaining a work visa.
                    </li>
                  </ul>

                  <h2 className="mb-3">Business and Commercial Activities:</h2>
                  <ul className="mb-4">
                    <li className="text-secondary mb-2">
                      <strong>Business Setup:</strong> <br />
                      If you plan to set up a business or engage in commercial
                      activities in a foreign country, certain documents may
                      need to be attested to meet legal requirements.
                    </li>
                    <li className="text-secondary mb-2">
                      <strong>Partnerships and Contracts:</strong>
                      <br /> Attestation of documents may be necessary when
                      entering into partnerships, signing contracts, or
                      participating in international business transactions.
                    </li>
                  </ul>
                  <h2 className="mb-3">Legal and Migration Processes:</h2>
                  <ul className="mb-4">
                    <li className="text-secondary mb-2">
                      <strong>Immigration:</strong> <br />
                      When applying for immigration to another country,
                      authorities may require attested documents to verify your
                      qualifications and background.
                    </li>
                    <li className="text-secondary mb-2">
                      <strong>Legal Procedures:</strong>
                      <br /> Attested documents may be needed for legal
                      procedures, such as court cases or other legal matters, in
                      a foreign jurisdiction.
                    </li>
                  </ul>
                  <h2 className="mb-3">Personal and Family Matters:</h2>
                  <ul className="mb-4">
                    <li className="text-secondary mb-2">
                      <strong>Marriage:</strong> <br />
                      Attested documents may be required for marriage
                      registration in a foreign country.
                    </li>
                    <li className="text-secondary mb-2">
                      <strong>Adoption:</strong>
                      <br /> For international adoptions, attested documents may
                      be necessary to meet legal requirements.
                    </li>
                  </ul>
                  <h2 className="mb-3">
                    Governmental and Official Procedures:
                  </h2>
                  <ul className="mb-4">
                    <li className="text-secondary mb-2">
                      <strong>Government Jobs:</strong> <br />
                      If you are applying for a government job in a foreign
                      country, attested educational and professional
                      certificates may be required.
                    </li>
                    <li className="text-secondary mb-2">
                      <strong>Official Documentation:</strong>
                      <br /> Attested documents may be necessary for various
                      official purposes, such as obtaining a driver’s license,
                      opening a bank account, etc.
                    </li>
                  </ul>
                  <p className="my-4">
                    The specific requirements for certificate attestation can
                    vary depending on the destination country and also the type
                    of document. It’s advisable to check with the relevant
                    authorities or consulates of the country where the documents
                    are intended to be used for the most accurate and up-to-date
                    information.
                  </p>
                </div>
              </>
              
            </div>
            <div className="container mt-4">
      <div className="row mb-4">
        {/* UK Personal Documents Column */}
        <div className="col-md-4 border-end">
          <h3 className="text-dark mb-3">UK Personal Documents</h3>
          <ul className="list-unstyled">
            <li className="text-secondary mb-2">UK Birth Certificate Attestation</li>
            <li className="text-secondary mb-2">UK Marriage Certificate Attestation</li>
            <li className="text-secondary mb-2">UK Death Certificate Attestation</li>
            <li className="text-secondary mb-2">UK Medical Certificate Attestation</li>
            <li className="text-secondary mb-2">UK Transfer Certificate Attestation</li>
            <li className="text-secondary mb-2">UK Divorce Decree Attestation</li>
            <li className="text-secondary mb-2">UK Power of Attorney Attestation</li>
            <li className="text-secondary mb-2">UK Passport Attestation</li>
            <li className="text-secondary mb-2">UK Birth Certificate Issuance</li>
            <li className="text-secondary mb-2">UK Marriage Certificate Issuance</li>
          </ul>
        </div>

        {/* UK Commercial Documents Column */}
        <div className="col-md-4 border-end">
          <h3 className="text-dark mb-3">UK Commercial Documents</h3>
          <ul className="list-unstyled">
            <li className="text-secondary mb-2">Memorandum of Association</li>
            <li className="text-secondary mb-2">Shareholders Certificate</li>
            <li className="text-secondary mb-2">Articles of Association</li>
            <li className="text-secondary mb-2">Board Resolution Attestation</li>
            <li className="text-secondary mb-2">Certificate of Incumbency</li>
            <li className="text-secondary mb-2">Commercial Invoices</li>
            <li className="text-secondary mb-2">Certificate of Incorporation</li>
            <li className="text-secondary mb-2">Certificate of Good Standing</li>
            <li className="text-secondary mb-2">Agency Agreements, etc.</li>
          </ul>
        </div>

        {/* Educational Documents Attestation Column */}
        <div className="col-md-4">
          <h3 className="text-dark mb-3">Educational Documents Attestation</h3>
          <ul className="list-unstyled">
            <li className="text-secondary mb-2">UK Degree Attestation</li>
            <li className="text-secondary mb-2">UK Master Degree Attestation</li>
            <li className="text-secondary mb-2">UK Diploma Attestation</li>
            <li className="text-secondary mb-2">Membership Certificate</li>
            <li className="text-secondary mb-2">Transcripts Attestation</li>
            <li className="text-secondary mb-2">UK Pre Degree Attestation</li>
          </ul>
          <div className="d-flex gap-2 mt-4">
            <Link href="#" className="btn btn-outline-primary rounded-pill" role="button">
              Call Us
            </Link>
            <Link href="#" className="btn btn-outline-secondary rounded-pill" role="button">
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
