import Link from "next/link"

export default function Breadcrumb({ breadcrumbTitle }) {

    // Map each breadcrumb title to a background image path
    const backgroundImages = {
        "About Us": "assets/images/background/aboutus.jpg",
        "Dubai Golden Visa": "assets/images/background/DubaiGoldenVisa.jpg",
        "Certificate Attestation Services": "assets/images/background/CertificateAttestationServices.jpg",
        "UAE Resident Visa": "assets/images/background/UAEResidentVisa.jpg",
        "Business Setup": "assets/images/background/BusinessSetup.jpg",
        "PRO Services": "assets/images/background/PROServices.jpg",
        "Business Consultancy": "assets/images/background/BusinessConsultancy.jpg",
        "Bank Account Assistance": "assets/images/background/BankAccountAssistance.jpg",
        "Accounting and Bookkeeping": "assets/images/background/bokkeeping.jpg",
        // Add more as needed
    }

    // Fallback image if title doesn't match
    const bgImage = backgroundImages[breadcrumbTitle] || "assets/images/background/default.jpg";

    return (
        <section className="page-title p_relative centred">
            <div className="bg-layer" style={{ backgroundImage: `url(${bgImage})` }}></div>
            <div className="pattern-layer">
                <div className="pattern-1" style={{ backgroundImage: 'url(assets/images/shape/shape-14.png)' }}></div>
                <div className="pattern-2" style={{ backgroundImage: 'url(assets/images/shape/shape-14.png)' }}></div>
                <div className="pattern-3 rotate-me" style={{ backgroundImage: 'url(assets/images/shape/shape-15.png)' }}></div>
                <div className="pattern-4 float-bob-y" style={{ backgroundImage: 'url(assets/images/shape/shape-16.png)' }}></div>
            </div>
            <div className="auto-container">
                <div className="content-box">
                    <h1>{breadcrumbTitle}</h1>
                    <ul className="bread-crumb clearfix">
                        <li><Link href="/">Home</Link></li>
                        <li>{breadcrumbTitle}</li>
                    </ul>
                </div>
            </div>
        </section>
    )
}
