"use client";
import Isotope from "isotope-layout";
import Link from "next/link";
import { useCallback, useEffect, useRef, useState } from "react";

export default function PortfolioFilter1() {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  const galleryItems = [
    {
      id: 1,
      image: "/assets/images/flags/egypt flag.jpg",
      categories: ["cat-1"],
      country: "egypt",
      title: "Egypt",
      isConsolate: true,
      description: "Egypt Certificate Attestation for UAE",
      content:
        "We help you register a business in the USA with complete support and documentation.",
    },
    {
      id: 2,
      image: "/assets/images/flags/india flag.jpg",
      categories: ["cat-1"],
      country: "india",
      title: "India",
      isConsolate: false,
      description: "Setup your LLC or Corporation easily.",
      content:
        "We help you register a business in the USA with complete support and documentation.",
    },
    {
      id: 3,
      image: "/assets/images/flags/kuwait flag.jpg",
      categories: ["cat-1"],
      country: "kuwait",
      title: "Kuwait",
      description: "Setup your LLC or Corporation easily.",
      content:
        "We help you register a business in the USA with complete support and documentation.",
    },
    {
      id: 4,
      image: "/assets/images/flags/lebanon flag.jpg",
      categories: ["cat-1"],
      country: "lebanon",
      isConsolate: true,
      title: "Lebanon",
      description: "Setup your LLC or Corporation easily.",
      content:
        "We help you register a business in the USA with complete support and documentation.",
    },
    {
      id: 5,
      image: "assets/images/flags/russia flag.jpg",
      categories: ["cat-1"],
      country: "russia",
      isConsolate: true,
      title: "Russia",
      description: "Setup your LLC or Corporation easily.",
      content:
        "We help you register a business in the USA with complete support and documentation.",
    },
    {
      id: 6,
      image: "/assets/images/flags/sweden flag.jpg",
      categories: ["cat-1"],
      country: "sweden",
      title: "Sweden",
      description: "Setup your LLC or Corporation easily.",
      content:
        "We help you register a business in the USA with complete support and documentation.",
    },
    {
      id: 7,
      image: "/assets/images/flags/switzerland flag.jpg",
      categories: ["cat-1"],
      country: "switzerland",
      title: "Switzerland",
      description: "Setup your LLC or Corporation easily.",
      content:
        "We help you register a business in the USA with complete support and documentation.",
    },
    {
      id: 8,
      image: "/assets/images/flags/uk flag.jpg",
      categories: ["cat-1"],
      country: "uk",
      title: "United Kingdom",
      description: "Setup your LLC or Corporation easily.",
      content:
        "We help you register a business in the USA with complete support and documentation.",
    },
    {
      id: 9,
      image: "/assets/images/flags/usa flag.jpg",
      categories: ["cat-1"],
      country: "us",
      title: "USA",
      description: "Setup your LLC or Corporation easily.",
      content:
        "We help you register a business in the USA with complete support and documentation.",
    },
    {
      id: 10,
      image: "/assets/images/flags/qatar.jpeg",
      categories: ["cat-1"],
      country: "us",
      title: "Qatar",
      description: "Setup your LLC or Corporation easily.",
      content:
        "We help you register a business in the USA with complete support and documentation.",
    },
  ];

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
          margin: 0 -10px; /* Counteract the padding on items */
        }
      `}</style>
    </>
  );
}
