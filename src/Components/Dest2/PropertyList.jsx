import React from "react";
import styles from "./InputDesign.module.css";
import PropertyCard from "./PropertyCard";

const PropertyList = ({ hotels, totalProperties, searchLocation }) => {
  return (
    <main className={styles.propertiesContainer}>
      <section className={styles.propertiesHeader}>
        <h1 className={styles.propertiesTitle}>
          <span>{totalProperties}</span>
          <span> Properties in </span>
          <span>{searchLocation}</span>
        </h1>
      </section>

      <section className={styles.propertyList}>
        {hotels.map((hotel) => (
          <PropertyCard key={hotel.id} hotel={hotel} />
        ))}
      </section>
    </main>
  );
};

export default PropertyList;
