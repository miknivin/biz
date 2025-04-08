// import PortfolioFilter1 from ""
import dynamic from "next/dynamic";
const PortfolioFilter1 = dynamic(
  () => import("@/components/elements/PortfolioFilter1"),
  {
    ssr: false,
  }
);

import Link from "next/link";
export default function Gallery() {
  return (
    <>
      <section className="gallery-section sec-pad">
        <div className="outer-container">
          <div className="sec-title centred mb_30">
            {/* <span className="sub-title">
              We are Experts in all types of Attestation Services
            </span> */}
            <h2>We are Experts in all types of Attestation Services</h2>
          </div>
          {/*Sortable Galery*/}
          <div className="sortable-masonry auto-container">
            {/*Filter*/}
            <PortfolioFilter1 />
          </div>
        </div>
      </section>
    </>
  );
}
