"use client";
import { galleryItems } from "@/app/data/attestation";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function PortfolioFilter1() {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");



  useEffect(() => {
    setTimeout(() => {
      isotope.current = new Isotope(".items-container", {
        itemSelector: ".masonry-item",
        percentPosition: true,
        masonry: {
          columnWidth: ".masonry-item",
        },
        animationOptions: {
          duration: 750,
          easing: "linear",
          queue: false,
        },
      });
    }, 1000);
  }, []);

  useEffect(() => {
    if (isotope.current) {
      filterKey === "*"
        ? isotope.current.arrange({ filter: `*` })
        : isotope.current.arrange({ filter: `.${filterKey}` });
    }
  }, [filterKey]);

  const handleFilterKeyChange = useCallback(
    (key) => () => {
      setFilterKey(key);
    },
    []
  );

  const activeBtn = (value) =>
    value === filterKey ? "filter active" : "filter";

  return (
    <>
      {/* Filter Buttons */}
      {/* 
            <div className="filters centred mb_60">
                <ul className="filter-tabs filter-btns clearfix">
                    <li className={activeBtn("*")} onClick={handleFilterKeyChange("*")}>All</li>
                    <li className={activeBtn("cat-1")} onClick={handleFilterKeyChange("cat-1")}>Visa Services</li>
                    <li className={activeBtn("cat-2")} onClick={handleFilterKeyChange("cat-2")}>Attestation</li>
                    <li className={activeBtn("cat-3")} onClick={handleFilterKeyChange("cat-3")}>Consulting</li>
                </ul>
            </div> 
            */}

      <div className="items-container row clearfix">
        {galleryItems.map((item) => (
          <Link
            href={`/attestation/${item.country}`}
            key={item.id}
            className={`col-lg-4 col-md-6 col-sm-12 masonry-item all ${item.categories.join(
              " "
            )}`}
            style={{ marginBottom: "20px" }} // Add gap between rows
          >
            <div className="gallery-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src={item.image} alt={`Gallery ${item.id}`} />
                </figure>
                <div className="content-box">
                  {item.title && <h4 className="title">{item.title}</h4>}
                  {item.isConsolate && <p>{"(Consolate attestation)"}</p>}
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>

      {/* Inline CSS for additional styling if needed */}
      <style jsx>{`
        .masonry-item {
          /* Optional: Ensure consistent spacing */
          padding: 0 10px; /* Adds horizontal gap between columns */
        }
        .items-container {
          margin: 0 10px; /* Counteract the padding on items */
        }
      `}</style>
    </>
  );
}
