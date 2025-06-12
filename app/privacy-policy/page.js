
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
                    <div className="sec-title mb_30 text-center">
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
                        Welcome to <strong>The Biz In Corp</strong>! Your privacy is our top priority. This Privacy Policy outlines how we collect, use, disclose, and protect your information when you visit our website{" "}
                        <Link href="https://www.thebizincorp.com" className="text-blue-600 hover:underline">
                          https://www.thebizincorp.com
                        </Link>{" "}
                        and engage with our services, ensuring compliance with applicable laws.
                      </p>
                      <p className="mb_30">
                        For any questions or concerns, contact us at{" "}
                        <Link href="mailto:support@thebizincorp.com" className="text-blue-600 hover:underline">
                          support@thebizincorp.com
                        </Link>.
                      </p>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
                        1. Information We Collect
                      </h3>
                      <p className="mb_20">
                        We collect only the minimum information necessary to provide our services and respond to your inquiries. This includes:
                      </p>
                      <h4 className="text-lg font-medium text-gray-700 italic mb_15 before:content-['-'] before:mr-2 before:text-blue-600">Personal Information:</h4>
                      <p className="mb_15">
                        We may collect the following when you voluntarily submit through contact forms, newsletter signups, or account creation:
                      </p>
                      <ul className="list-disc pl-6 mb_20">
                        <li>Full Name</li>
                        <li>Email Address</li>
                        <li>Phone Number</li>
                        <li>Company Name (if provided)</li>
                        <li>Payment Information (e.g., for service subscriptions)</li>
                        <li>Any other information you submit via forms</li>
                      </ul>
                      <h4 className="text-lg font-medium text-gray-700 italic mb_15 before:content-['-'] before:mr-2 before:text-blue-600">Non-Personal Information:</h4>
                      <p className="mb_15">
                        We automatically collect non-identifiable data to improve our website, such as:
                      </p>
                      <ul className="list-disc pl-6 mb_30">
                        <li>IP address</li>
                        <li>Browser type and version</li>
                        <li>Operating system</li>
                        <li>Pages visited and time spent on the site</li>
                        <li>Referring website</li>
                        <li>Device identifiers</li>
                      </ul>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
                        2. How We Use Your Information
                      </h3>
                      <p className="mb_20">
                        We use your information to enhance your experience and deliver our services, including:
                      </p>
                      <ul className="list-disc pl-6 mb_20">
                        <li>Responding to inquiries or contact requests</li>
                        <li>Providing requested services or information</li>
                        <li>Sending updates or marketing emails (with opt-in consent)</li>
                        <li>Improving website performance and user experience</li>
                        <li>Processing payments and managing subscriptions</li>
                        <li>Ensuring compliance with legal obligations</li>
                      </ul>
                      <p className="mb_30">
                        We use <strong className="text-blue-600">Zoho Mail</strong> and Zoho applications for secure email communications and form management.
                      </p>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
                        3. User Consent
                      </h3>
                      <p className="mb_20">
                        By using our website or services, you consent to the collection and use of your information as described in this Privacy Policy. You may:
                      </p>
                      <ul className="list-disc pl-6 mb_30">
                        <li>Provide explicit consent via forms (e.g., newsletter opt-in)</li>
                        <li>Withdraw consent at any time by contacting us</li>
                        <li>Manage cookie preferences through our cookie banner</li>
                      </ul>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
                        4. Sharing Your Information
                      </h3>
                      <p className="mb_20">
                        We <strong>do not sell, trade, or rent</strong> your personal information. We may share data under these conditions:
                      </p>
                      <h4 className="text-lg font-medium text-gray-700 italic mb_15 before:content-['-'] before:mr-2 before:text-blue-600">Third-Party Service Providers:</h4>
                      <p className="mb_15">
                        Trusted providers like <strong className="text-blue-600">Zoho Mail</strong> process inquiries, store data, and send communications. They are bound by confidentiality agreements.
                      </p>
                      <h4 className="text-lg font-medium text-gray-700 italic mb_15 before:content-['-'] before:mr-2 before:text-blue-600">Legal Requirements:</h4>
                      <p className="mb_30">
                        We may disclose information if required by law, court orders, or government investigations.
                      </p>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
                        5. International Data Transfers
                      </h3>
                      <p className="mb_20">
                        Your information may be transferred to and stored in countries outside India, where our service providers operate. We ensure:
                      </p>
                      <ul className="list-disc pl-6 mb_30">
                        <li>Compliance with data protection laws (e.g., GDPR, CCPA)</li>
                        <li>Use of Standard Contractual Clauses for secure transfers</li>
                        <li>Data encryption during transit</li>
                      </ul>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
                        6. Data Security
                      </h3>
                      <p className="mb_20">
                        We implement robust measures to protect your data, including:
                      </p>
                      <ul className="list-disc pl-6 mb_30">
                        <li>HTTPS/SSL encryption for form submissions</li>
                        <li>Access controls and multi-factor authentication</li>
                        <li>Trusted third-party platforms with industry-standard security</li>
                        <li>Regular security audits and vulnerability assessments</li>
                        <li>Data anonymization where possible</li>
                      </ul>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
                        7. Your Rights
                      </h3>
                      <p className="mb_20">
                        Under the <strong>Information Technology Act, 2000</strong>, GDPR, CCPA, and other laws, you have the right to:
                      </p>
                      <ul className="list-disc pl-6 mb_20">
                        <li><strong>Access</strong> your personal data</li>
                        <li><strong>Rectify</strong> inaccurate or outdated information</li>
                        <li><strong>Delete</strong> your data, subject to legal requirements</li>
                        <li><strong>Restrict</strong> processing of your data</li>
                        <li><strong>Portability</strong> to receive your data in a structured format</li>
                        <li><strong>Object</strong> to processing for marketing or profiling</li>
                      </ul>
                      <p className="mb_30">
                        Exercise these rights by contacting{" "}
                        <Link href="mailto:support@thebizincorp.com" className="text-blue-600 hover:underline">
                          support@thebizincorp.com
                        </Link>.
                      </p>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
                        8. Data Retention
                      </h3>
                      <p className="mb_30">
                        We retain your information only as long as necessary for service delivery, legal compliance, or business needs. Upon deletion request, we securely erase your data unless legally required to retain it.
                      </p>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
                        9. Cookies
                      </h3>
                      <p className="mb_20">
                        Our website uses cookies to enhance user experience, including:
                      </p>
                      <ul className="list-disc pl-6 mb_30">
                        <li>Essential cookies for site functionality</li>
                        <li>Analytics cookies to track usage</li>
                        <li>Marketing cookies for personalized ads (with consent)</li>
                      </ul>
                      <p className="mb_30">
                        Manage cookies via browser settings or our cookie banner. Disabling cookies may affect site functionality.
                      </p>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
                        10. Children’s Privacy
                      </h3>
                      <p className="mb_30">
                        Our services are not directed to individuals under 13. We do not knowingly collect personal information from children. If we learn such data has been collected, we will delete it promptly. Contact us if you believe we have collected a child’s data.
                      </p>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
                        11. Third-Party Links
                      </h3>
                      <p className="mb_30">
                        Our website may link to third-party sites with independent privacy policies. We are not responsible for their content or practices.
                      </p>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
                        12. Compliance with Laws
                      </h3>
                      <p className="mb_30">
                        We comply with the <strong>Information Technology Act, 2000</strong>, GDPR, CCPA, and other applicable data protection laws to ensure your privacy rights are protected.
                      </p>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
                        13. Changes to This Privacy Policy
                      </h3>
                      <p className="mb_30">
                        We may update this Privacy Policy periodically. Changes will be posted here with a revised effective date. Review this page regularly to stay informed.
                      </p>

                      <hr className="my-6 border-t border-gray-200" />

                      <h3 className="text-2xl font-semibold text-gray-800 mb_20 relative after:content-[''] after:absolute after:left-0 after:bottom-0 after:w-12 after:h-1 after:bg-blue-600">
                        Contact Us
                      </h3>
                      <p className="mb_20">
                        For questions or to exercise your privacy rights, contact:
                      </p>
                      <ul className="list-disc pl-6 mb_20">
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
