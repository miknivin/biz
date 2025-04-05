import Link from "next/link"


export default function Features() {
    return (
        <>
           <section className="feature-section pb_90">
            <div className="auto-container">
                <div className="row clearfix">
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one">
                            <div className="inner-box">
                                {/* <div className="icon-box"><i className="icon-9"></i></div> */}
                                <div className="icon-box">
            <img src="assets/icons/business.png" alt="Business Setup Icon" /></div>
                                <h3>Seamless Business Setup</h3>
                                <p>Start your company effortlessly with our expert guidance throughout the UAE's free zones and mainland options.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one">
                            <div className="inner-box">
                            <div className="icon-box">
                            <img src="assets/icons/passport.png" alt="Golden Visa" /></div>
                                <h3>Golden Visa & Residency Solutions</h3>
                                <p>Secure your long-term future in the UAE with our streamlined Dubai Golden Visa and resident visa processing services.
</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one">
                            <div className="inner-box">
                            <div className="icon-box">
                            <img src="assets/icons/documents.png" alt="Golden Visa
Global Certificate Attestation" /></div>
                            
                                 <h3>Global Certificate Attestation
</h3>
                                <p>Fast and reliable document authentication services covering more than 120 countries for all your international business needs.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-3 col-md-6 col-sm-12 feature-block">
                        <div className="feature-block-one">
                            <div className="inner-box">
                            <div className="icon-box">
                            <img src="assets/icons/customer-service.png" alt="Global Certificate Attestation
Comprehensive Business Support" /></div>
                                <h3>Comprehensive Business Support
</h3>
                                <p>Complete business solutions including accounting, PRO services, consultancy, and bank account assistance to ensure your venture thrives in the UAE market.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
        </>
    )
}
