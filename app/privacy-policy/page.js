
"use client";
import Layout from "@/components/layout/Layout";
import Link from "next/link";

export default function PrivacyPolicy() {
  return (
    <>
      <Layout headerStyle={2} footerStyle={1} breadcrumbTitle="Privacy Policy">
        {/* privacy-policy-section */}
        <section className="about-style-two pt_120 pb_120">
          <div className="pattern-layer">
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
            <div className="row clearfix">
              <div className="col-lg-12 col-md-12 col-sm-12 content-column">
                <div className="content_block_one">
                  <div className="content-box bg-gray-50 p-8 rounded-lg shadow-sm">
                    <div className="sec-title mb_30 text-center wow fadeInUp animated" data-wow-delay="00ms" data-wow-duration="1500ms">
                      <span className="sub-title text-blue-600 font-medium">Privacy Policy</span>
                      <h2 className="relative text-4xl font-bold text-gray-800 pb-2 after:content-[''] after:absolute after:left-1/2 after:-translate-x-1/2 after:bottom-0 after:w-16 after:h-1 after:bg-gradient-to-r after:from-blue-500 after:to-blue-700">
                        The Biz In Corp
                      </h2>
                    </div>
                    <div className="text-box text-gray-700">
                      <p className="mb_20">
                        <strong>Effective Date:</strong> June 11, 2025
                      </p>
                      <p className="mb_20">
                        Welcome to <strong>The Biz In Corp</strong>! Your privacy is important to us. This Privacy Policy explains how we collect, use, disclose, and protect your information when you visit our website{" "}
                        <Link href="https://www.thebizincorp.com" className="text-blue-600 hover:underline">
                          https://www.thebizincorp.com
                        </Link>{" "}
                        and engage with our services.
                      </p>
                      <p className="mb_30">
                        If you have any questions or concerns about this Privacy Policy, please contact us at{" "}
                        <Link href="mailto:support@thebizincorp.com" className="text-blue-600 hover:underline">
                          support@thebizincorp.com
                        </Link>.
                      </p>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600 wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                        1. Information We Collect
                      </h3>
                      <p className="mb_20">
                        We collect only the minimum information required to respond to your inquiries and provide our services. This includes:
                      </p>
                      <h4 className="text-lg font-medium text-gray-700 italic mb_15 before:content-['-'] before:mr-2 before:text-blue-600">Personal Information:</h4>
                      <p className="mb_15">
                        We may collect the following personal details when you voluntarily submit them through contact forms or newsletter signups:
                      </p>
                      <ul className="list-style-one clearfix mb_20">
                        <li>Full Name</li>
                        <li>Email Address</li>
                        <li>Phone Number</li>
                        <li>Company Name (if provided)</li>
                        <li>Any other information you choose to submit via the contact form</li>
                      </ul>
                      <h4 className="text-lg font-medium text-gray-700 italic mb_15 before:content-['-'] before:mr-2 before:text-blue-600">Non-Personal Information:</h4>
                      <p className="mb_15">
                        We also collect non-identifiable information automatically when you visit our website, such as:
                      </p>
                      <ul className="list-style-one clearfix mb_30">
                        <li>IP address</li>
                        <li>Browser type and version</li>
                        <li>Operating system</li>
                        <li>Pages visited and time spent on the site</li>
                        <li>Referring website</li>
                      </ul>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600 wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                        2. How We Use Your Information
                      </h3>
                      <p className="mb_20">
                        We use the information collected for the following purposes:
                      </p>
                      <ul className="list-style-one clearfix mb_20">
                        <li>To respond to your inquiries or contact requests</li>
                        <li>To provide information or services that you request from us</li>
                        <li>To send updates or marketing emails (only if you opt-in)</li>
                        <li>To improve our website performance and user experience</li>
                        <li>To ensure compliance with legal obligations</li>
                      </ul>
                      <p className="mb_30">
                        We use <strong className="text-blue-600">Zoho Mail</strong> and associated Zoho applications to manage our email communications and contact forms securely.
                      </p>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600 wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                        3. Sharing Your Information
                      </h3>
                      <p className="mb_20">
                        We <strong>do not sell, trade, or rent</strong> your personal information to third parties. However, we may share information under the following conditions:
                      </p>
                      <h4 className="text-lg font-medium text-gray-700 italic mb_15 before:content-['-'] before:mr-2 before:text-blue-600">Third-Party Service Providers:</h4>
                      <p className="mb_15">
                        We use trusted third-party tools such as <strong className="text-blue-600">Zoho Mail</strong> to process inquiries, store contact data, and send communications. These providers are bound by confidentiality agreements and are only allowed to use your information to provide services on our behalf.
                      </p>
                      <h4 className="text-lg font-medium text-gray-700 italic mb_15 before:content-['-'] before:mr-2 before:text-blue-600">Legal Requirements:</h4>
                      <p className="mb_30">
                        We may disclose your information if required by law or in response to valid legal processes (e.g., court orders, government investigations).
                      </p>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600 wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                        4. Data Security
                      </h3>
                      <p className="mb_20">We take data protection seriously and implement the following measures:</p>
                      <ul className="list-style-one clearfix mb_30">
                        <li>Secure form submissions with HTTPS/SSL encryption</li>
                        <li>Access control and authentication for our systems</li>
                        <li>Use of trusted third-party platforms with industry-standard security protocols</li>
                        <li>Regular review of our systems for potential vulnerabilities</li>
                      </ul>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600 wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                        5. Your Rights
                      </h3>
                      <p className="mb_20">
                        In accordance with the <strong>Information Technology Act, 2000</strong> and applicable data protection laws, you have the right to:
                      </p>
                      <ul className="list-style-one clearfix mb_20">
                        <li><strong>Access</strong> the personal data we hold about you</li>
                        <li><strong>Rectify</strong> any inaccurate or outdated information</li>
                        <li><strong>Withdraw consent</strong> or request deletion of your information at any time, subject to legal or operational requirements</li>
                      </ul>
                      <p className="mb_30">
                        To exercise these rights, contact us at{" "}
                        <Link href="mailto:support@thebizincorp.com" className="text-blue-600 hover:underline">
                          support@thebizincorp.com
                        </Link>.
                      </p>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600 wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                        6. Data Retention
                      </h3>
                      <p className="mb_30">
                        We retain your contact information only for as long as necessary to fulfill your requests, follow up on services, or meet legal and business obligations. If you request deletion, we will securely erase your data from our systems unless retention is legally required.
                      </p>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600 wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                        7. Cookies
                      </h3>
                      <p className="mb_20">
                        Our website uses cookies to enhance your browsing experience. Cookies help us understand how visitors interact with the website and allow us to improve usability.
                      </p>
                      <p className="mb_30">
                        You may disable cookies through your browser settings. However, some features of the site may not function correctly if cookies are disabled.
                      </p>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600 wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                        8. Third-Party Links
                      </h3>
                      <p className="mb_30">
                        Our website may contain links to third-party websites for your convenience or information. These sites operate independently and have their own privacy policies. We are not responsible for the content or practices of these third-party sites.
                      </p>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600 wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                        9. Changes to This Privacy Policy
                      </h3>
                      <p className="mb_30">
                        We may update this Privacy Policy from time to time. Changes will be posted on this page, and the updated version will include a revised effective date. We recommend reviewing this page periodically to stay informed about how we protect your information.
                      </p>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600 wow fadeInUp animated" data-wow-delay="200ms" data-wow-duration="1500ms">
                        Contact Us
                      </h3>
                      <p className="mb_20">
                        For questions regarding this Privacy Policy, or to request access or deletion of your personal information, please contact:
                      </p>
                      <ul className="list-style-one clearfix mb_20">
                        <li>
                          📧{" "}
                          <Link href="mailto:support@thebizincorp.com" className="text-blue-600 hover:underline">
                            support@thebizincorp.com
                          </Link>
                        </li>
                        <li>
                          🌐{" "}
                          <Link href="https://www.thebizincorp.com" className="text-blue-600 hover:underline">
                            https://www.thebizincorp.com
                          </Link>
                        </li>
                      </ul>
                    
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
        {/* privacy-policy-section end */}
      </Layout>
    </>
  );
}
