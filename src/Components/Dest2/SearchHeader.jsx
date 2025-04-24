"use client";
import React from "react";
import styles from "./InputDesign.module.css";

const SearchHeader = ({ searchLocation, setSearchLocation }) => {
  return (
    <header className={styles.header}>
      <div className={styles.headerContent}>
        <div className={styles.searchInputsContainer}>
          <input
            type="text"
            placeholder="Location"
            className={styles.searchInput}
            value={searchLocation}
            onChange={(e) => setSearchLocation(e.target.value)}
          />
          <input type="date" className={styles.searchInput} />
          <input type="date" className={styles.searchInput} />
        </div>
        <button className={styles.searchButton}>Search</button>
      </div>
    </header>
  );
};

export default SearchHeader;
