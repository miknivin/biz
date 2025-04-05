"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";
import { useState } from "react";
export default function Faq() {
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
    <section className="faq-section sec-pad">
      <figure className="image-layer">
        <img src="assets/images/resource/faq-1.png" alt="" />
      </figure>
      <div className="auto-container">
        <div className="sec-title centred mb_50">
          <span className="sub-title">FAQ'S</span>
          <h2>
            Do You Have Any Business <br />
            Questions?
          </h2>
        </div>
        <div className="row clearfix">
          <div className="col-xl-7 col-lg-12 col-md-12 offset-xl-5 content-column">
            <div className="content-box">
              <ul className="accordion-box">
                <li className="accordion block active-block">
                  <div
                    className={isActive.key == 1 ? "acc-btn active" : "acc-btn"}
                    onClick={() => handleToggle(1)}
                  >
                    <div className="icon-box">
                      <i className="icon-34"></i>
                    </div>
                    <h4>
                      How quickly can I obtain a UAE Resident Visa through your
                      services?
                    </h4>
                  </div>
                  <div
                    className={
                      isActive.key == 1 ? "acc-content current" : "acc-content"
                    }
                  >
                    <div className="content">
                      <div className="text">
                        <p>
                          We process UAE Resident Visa applications within 2-3
                          days, significantly faster than standard processing
                          times. Our streamlined approach and established
                          relationships with authorities enable this efficiency.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accordion block active-block">
                  <div
                    className={isActive.key == 2 ? "acc-btn active" : "acc-btn"}
                    onClick={() => handleToggle(2)}
                  >
                    <div className="icon-box">
                      <i className="icon-34"></i>
                    </div>
                    <h4>
                      What are the eligibility requirements for the Dubai Golden
                      Visa?
                    </h4>
                  </div>
                  <div
                    className={
                      isActive.key == 2 ? "acc-content current" : "acc-content"
                    }
                  >
                    <div className="content">
                      <div className="text">
                        <p>
                          Eligibility for the Dubai Golden Visa depends on your
                          profile. It's available for investors (minimum AED 2
                          million), entrepreneurs, exceptional talents,
                          scientists, professionals, outstanding students, and
                          humanitarian pioneers. Our team can assess your
                          eligibility and guide you through the specific
                          requirements for your category.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accordion block active-block">
                  <div
                    className={isActive.key == 3 ? "acc-btn active" : "acc-btn"}
                    onClick={() => handleToggle(3)}
                  >
                    <div className="icon-box">
                      <i className="icon-34"></i>
                    </div>
                    <h4>
                      Do your PRO Services include labor card renewals and
                      company documentation?
                    </h4>
                  </div>
                  <div
                    className={
                      isActive.key == 3 ? "acc-content current" : "acc-content"
                    }
                  >
                    <div className="content">
                      <div className="text">
                        <p>
                          Yes, our comprehensive PRO Services cover labor card
                          renewals, company license renewals, immigration
                          procedures, governmental transactions, and all
                          corporate documentation. We handle the entire
                          bureaucratic process so you can focus on running your
                          business.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accordion block active-block">
                  <div
                    className={isActive.key == 4 ? "acc-btn active" : "acc-btn"}
                    onClick={() => handleToggle(4)}
                  >
                    <div className="icon-box">
                      <i className="icon-34"></i>
                    </div>
                    <h4>
                      {" "}
                      What accounting standards do you follow for bookkeeping
                      services?
                    </h4>
                  </div>
                  <div
                    className={
                      isActive.key == 4 ? "acc-content current" : "acc-content"
                    }
                  >
                    <div className="content">
                      <div className="text">
                        <p>
                          Our Accounting and Bookkeeping services comply with
                          IFRS (International Financial Reporting Standards) and
                          UAE VAT regulations. We provide monthly financial
                          statements, VAT return filing, and comprehensive
                          reports that satisfy both local requirements and
                          international business standards.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accordion block active-block">
                  <div
                    className={isActive.key == 5 ? "acc-btn active" : "acc-btn"}
                    onClick={() => handleToggle(5)}
                  >
                    <div className="icon-box">
                      <i className="icon-34"></i>
                    </div>
                    <h4>
                      {" "}
                      Can you help set up specialised free zone companies in
                      specific industries?
                    </h4>
                  </div>
                  <div
                    className={
                      isActive.key == 5 ? "acc-content current" : "acc-content"
                    }
                  >
                    <div className="content">
                      <div className="text">
                        <p>
                          Absolutely. We specialise in business setup across all
                          UAE free zones, including industry-specific ones like
                          Dubai Media City, DMCC for commodities, DAFZA for
                          aviation, and specialized zones for healthcare,
                          education, and technology. We'll recommend the optimal
                          free zone based on your industry, budget, and business
                          activities.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accordion block active-block">
                  <div
                    className={isActive.key == 6 ? "acc-btn active" : "acc-btn"}
                    onClick={() => handleToggle(6)}
                  >
                    <div className="icon-box">
                      <i className="icon-34"></i>
                    </div>
                    <h4>
                      {" "}
                      What documents typically require attestation for business
                      operations in the UAE?
                    </h4>
                  </div>
                  <div
                    className={
                      isActive.key == 6 ? "acc-content current" : "acc-content"
                    }
                  >
                    <div className="content">
                      <div className="text">
                        <p>
                          Common documents requiring attestation include
                          educational certificates, marriage certificates, birth
                          certificates, commercial documents, and corporate
                          power of attorney. Our attestation services cover over
                          120 countries and include both origin country
                          attestation and UAE Ministry of Foreign Affairs (MOFA)
                          authentication.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accordion block active-block">
                  <div
                    className={isActive.key == 7 ? "acc-btn active" : "acc-btn"}
                    onClick={() => handleToggle(7)}
                  >
                    <div className="icon-box">
                      <i className="icon-34"></i>
                    </div>
                    <h4>
                      {" "}
                      Can I open a UAE bank account if I'm not physically
                      present in Dubai?
                    </h4>
                  </div>
                  <div
                    className={
                      isActive.key == 7 ? "acc-content current" : "acc-content"
                    }
                  >
                    <div className="content">
                      <div className="text">
                        <p>
                          While most banks require at least one in-person
                          meeting, our Bank Account Assistance service can
                          prepare all documentation and pre-approve your
                          application before your arrival. We can schedule bank
                          appointments to coincide with your brief visit,
                          minimising your time in the UAE while ensuring
                          successful account opening.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accordion block active-block">
                  <div
                    className={isActive.key == 8 ? "acc-btn active" : "acc-btn"}
                    onClick={() => handleToggle(8)}
                  >
                    <div className="icon-box">
                      <i className="icon-34"></i>
                    </div>
                    <h4>
                      {" "}
                      How do your business consultancy services help existing
                      companies optimize operations?
                    </h4>
                  </div>
                  <div
                    className={
                      isActive.key == 8 ? "acc-content current" : "acc-content"
                    }
                  >
                    <div className="content">
                      <div className="text">
                        <p>
                          Our Business Consultancy services provide operational
                          analysis, market entry strategies, restructuring
                          advice, and regulatory compliance guidance. We
                          identify efficiency opportunities, suggest technology
                          implementations, and help streamline processes to
                          reduce costs and increase profitability for
                          established businesses.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accordion block active-block">
                  <div
                    className={isActive.key == 9 ? "acc-btn active" : "acc-btn"}
                    onClick={() => handleToggle(9)}
                  >
                    <div className="icon-box">
                      <i className="icon-34"></i>
                    </div>
                    <h4>
                      {" "}
                      Can I get assistance with my business setup remotely?
                    </h4>
                  </div>
                  <div
                    className={
                      isActive.key == 9 ? "acc-content current" : "acc-content"
                    }
                  >
                    <div className="content">
                      <div className="text">
                        <p>
                          Yes, Biz InCorp offers fully remote support for
                          business setup, visa applications, and more. Our team
                          will guide you through every step, no matter where you
                          are.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
                <li className="accordion block active-block">
                  <div
                    className={isActive.key == 10 ? "acc-btn active" : "acc-btn"}
                    onClick={() => handleToggle(10)}
                  >
                    <div className="icon-box">
                      <i className="icon-34"></i>
                    </div>
                    <h4> Do you provide attestation services outside Dubai?</h4>
                  </div>
                  <div
                    className={
                      isActive.key == 10 ? "acc-content current" : "acc-content"
                    }
                  >
                    <div className="content">
                      <div className="text">
                        <p>
                          Yes, Biz InCorp provides attestation services for over
                          120 countries, including Dubai-based attestation. Our
                          global network ensures efficient processing regardless
                          of document origin or destination country.
                        </p>
                      </div>
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
          <div className="col-lg-6 col-md-12 col-sm-12 image-column">
            <div className="image_block_four">
              <div className="image-box ml_30">
                <div
                  className="image-shape"
                  style={{
                    backgroundImage: "url(assets/images/shape/shape-22.png)",
                  }}
                ></div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
