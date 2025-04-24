import React from "react";
import styles from "./InputDesign.module.css";

const PropertyCard = ({ hotel }) => {
  return (
    <article className={styles.propertyCard} key={hotel.id}>
      <div className={styles.propertyImageContainer}>
        <img
          className={styles.propertyMainImage}
          src={hotel.images[0]}
          alt={`${hotel.name} main view`}
        />
        <div className={styles.thumbnailGrid}>
          {hotel.images.slice(1, 5).map((img, index) => (
            <img
              className={styles.thumbnailImage}
              src={img}
              alt={`${hotel.name} view ${index + 2}`}
              key={index}
            />
          ))}
        </div>
      </div>

      <div className={styles.propertyInfo}>
        <div className={styles.propertyHeader}>
          <h2 className={styles.propertyName}>{hotel.name}</h2>
          <div className={styles.propertyRating}>{hotel.rating}</div>
        </div>
        <p className={styles.propertyLocation}>{hotel.location}</p>
        <div className={styles.amenitiesList}>
          {hotel.amenities?.map((amenity, index) => (
            <span className={styles.amenityItem} key={index}>
              <span aria-hidden="true">✓</span>
              <span>{amenity}</span>
            </span>
          ))}
        </div>
      </div>

      <div className={styles.propertyPriceContainer}>
        <div className={styles.propertyPrice}>
          <span>$</span>
          <span>{hotel.price}</span>
        </div>
        <p className={styles.priceSubtext}>Per Night</p>
        <button className={styles.viewDetailsButton}>View Details</button>
      </div>
    </article>
  );
};

export default PropertyCard;
