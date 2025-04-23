"use client";
import React from "react";
import styles from"../styles/Destinations.module.css";

function InputDesign() {
  const tours = [
    {
      image: "https://images.pexels.com/photos/237272/pexels-photo-237272.jpeg",
      title: "Tropical Paradise",
      location: "Maldives",
      price: "$1,299",
    },
    {
      image:
        "https://images.pexels.com/photos/31718582/pexels-photo-31718582.jpeg",
      title: "Mountain Adventure",
      location: "Swiss Alps",
      price: "$899",
    },
    {
      image:
        "https://images.pexels.com/photos/31724665/pexels-photo-31724665.jpeg",
      title: "Cultural Journey",
      location: "Rome",
      price: "$799",
    },
    {
      image:
        "https://images.pexels.com/photos/31738928/pexels-photo-31738928.jpeg",
      title: "Safari Experience",
      location: "Kenya",
      price: "$1,499",
    },
    {
      image:
        "https://images.pexels.com/photos/5769410/pexels-photo-5769410.jpeg",
      title: "Ancient Wonders",
      location: "Cambodia",
      price: "$999",
    },
    {
      image:
        "https://images.pexels.com/photos/31730703/pexels-photo-31730703.jpeg",
      title: "Urban Explorer",
      location: "Tokyo",
      price: "$1,199",
    },
  ];

  return (
    <>
      <div>
        <SiteHeader />
        <main className={styles.main}>
          <h1 className={styles.h1}>Popular Tours & Destinations</h1>
          <section className={styles.div}>
            {tours.map((tour, index) => (
              <TourCard key={index} tour={tour} />
            ))}
          </section>
        </main>
      </div>
    </>
  );
}

function SiteHeader() {
  return (
    <header role="banner" className={styles.header}>
      <a href="/" className={styles.a}>
        <img
          alt="Logo"
          src="https://www.trivago.com/_static/images/logo_08112023.png"
          className={styles.img}
        />
      </a>
    </header>
  );
}

function TourCard({ tour }) {
  return (
    <article
      className={`${styles.div2} ${styles.builderC5e760f18ed24a6a818d72e42cfbfa5f}`}
    >
      <img className={styles.img2} src={tour.image} alt={tour.title} />
      <div className={styles.div3}>
        <h3 className={styles.h3}>{tour.title}</h3>
        <p className={styles.p}>{tour.location}</p>
        <div className={styles.div4}>
          <span className={styles.span}>{tour.price}</span>
          <button
            className={`${styles.button} ${styles.builderE135bb59a1724030b89bc941677007b4}`}
          >
            Book Now
          </button>
        </div>
      </div>
    </article>
  );
}

export default InputDesign;
