"use client";
import Isotope from "isotope-layout";
import { useCallback, useEffect, useRef, useState } from "react";

export default function PortfolioFilter1() {
  const isotope = useRef();
  const [filterKey, setFilterKey] = useState("*");

  const galleryItems = [
    {
      id: 1,
      image: "/assets/images/flags/egypt flag.jpg",
      categories: ["cat-1"],
      country: "us",
      title: "Company Formation USA",
      description: "Setup your LLC or Corporation easily.",
      content:
        "We help you register a business in the USA with complete support and documentation.",
    },
    {
      id: 2,
      image: "/assets/images/flags/india flag.jpg",
      categories: ["cat-1"],
      country: "us",
      title: "Company Formation USA",
      description: "Setup your LLC or Corporation easily.",
      content:
        "We help you register a business in the USA with complete support and documentation.",
    },
    {
      id: 3,
      image: "/assets/images/flags/kuwait flag.jpg",
      categories: ["cat-1"],
      country: "us",
      title: "Company Formation USA",
      description: "Setup your LLC or Corporation easily.",
      content:
        "We help you register a business in the USA with complete support and documentation.",
    },
    {
      id: 4,
      image: "/assets/images/flags/lebanon flag.jpg",
      categories: ["cat-1"],
      country: "us",
      title: "Company Formation USA",
      description: "Setup your LLC or Corporation easily.",
      content:
        "We help you register a business in the USA with complete support and documentation.",
    },
    {
      id: 5,
      image: "assets/images/flags/russia flag.jpg",
      categories: ["cat-1"],
      country: "us",
      title: "Company Formation USA",
      description: "Setup your LLC or Corporation easily.",
      content:
        "We help you register a business in the USA with complete support and documentation.",
    },
    {
      id: 6,
      image: "/assets/images/flags/sweden flag.jpg",
      categories: ["cat-1"],
      country: "us",
      title: "Company Formation USA",
      description: "Setup your LLC or Corporation easily.",
      content:
        "We help you register a business in the USA with complete support and documentation.",
    },
    {
      id: 7,
      image: "/assets/images/flags/switzerland flag.jpg",
      categories: ["cat-1"],
      country: "us",
      title: "Company Formation USA",
      description: "Setup your LLC or Corporation easily.",
      content:
        "We help you register a business in the USA with complete support and documentation.",
    },
    {
      id: 8,
      image: "/assets/images/flags/uk flag.jpg",
      categories: ["cat-1"],
      country: "us",
      title: "Company Formation USA",
      description: "Setup your LLC or Corporation easily.",
      content:
        "We help you register a business in the USA with complete support and documentation.",
    },
    {
      id: 9,
      image: "/assets/images/flags/usa flag.jpg",
      categories: ["cat-1"],
      country: "us",
      title: "Company Formation USA",
      description: "Setup your LLC or Corporation easily.",
      content:
        "We help you register a business in the USA with complete support and documentation.",
    },
    {
      id: 10,
      image: "/assets/images/flags/usa flag.jpg",
      categories: ["cat-1"],
      country: "us",
      title: "Company Formation USA",
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
          <div
            key={item.id}
            className={`col-lg-4 col-md-6 col-sm-12 masonry-item all ${item.categories.join(
              " "
            )}`}
          >
            <div className="gallery-block-one">
              <div className="inner-box">
                <figure className="image-box">
                  <img src={item.image} alt={`Gallery ${item.id}`} />
                </figure>
                <div className="content-box">
                  <div className="content-box">
                    {item.title && <h4 className="title">{item.title}</h4>}
                  </div>

                  <div className="link-box">
                    {/* <a href="project-details" className="lightbox-image" data-fancybox="gallery">
                                            <i className="icon-4"></i>
                                        </a> */}
                  </div>
                  {/* <div className="flag-box mt-2">
                                        <img
                                            src={`https://flagcdn.com/24x18/${item.country}.png`}
                                            alt={item.country}
                                            width={24}
                                            height={18}
                                        />
                                    </div> */}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
}
