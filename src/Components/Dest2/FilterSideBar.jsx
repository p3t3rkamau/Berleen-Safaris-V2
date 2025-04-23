import React from "react";
import styles from "./InputDesign.module.css";

const FilterSidebar = ({ filters, setFilters }) => {
  const propertyTypes = ["Hotel", "Apartment", "Villa", "Resort"];

  const handleMinPriceChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setFilters((prev) => ({
      ...prev,
      priceRange: {
        ...prev.priceRange,
        min: value,
      },
    }));
  };

  const handleMaxPriceChange = (e) => {
    const value = parseInt(e.target.value) || 0;
    setFilters((prev) => ({
      ...prev,
      priceRange: {
        ...prev.priceRange,
        max: value,
      },
    }));
  };

  const handlePropertyTypeChange = (type) => {
    setFilters((prev) => {
      const newPropertyType = [...prev.propertyType];
      if (newPropertyType.includes(type)) {
        return {
          ...prev,
          propertyType: newPropertyType.filter((t) => t !== type),
        };
      } else {
        return {
          ...prev,
          propertyType: [...newPropertyType, type],
        };
      }
    });
  };

  return (
    <aside className={styles.sidebar}>
      <section className={styles.filterContainer}>
        <h3 className={styles.filterTitle}>Select Filters</h3>

        <div className={styles.filterSection}>
          <h4 className={styles.filterSectionTitle}>Price Range</h4>
          <div className={styles.priceRangeInputs}>
            <input
              type="number"
              placeholder="Min"
              className={styles.priceInput}
              value={filters.priceRange.min || ""}
              onChange={handleMinPriceChange}
            />
            <span>to</span>
            <input
              type="number"
              placeholder="Max"
              className={styles.priceInput}
              value={filters.priceRange.max || ""}
              onChange={handleMaxPriceChange}
            />
          </div>
        </div>

        <div className={styles.propertyTypeSection}>
          <h4 className={styles.filterSectionTitle}>Property Type</h4>
          <div className={styles.checkboxList}>
            {propertyTypes.map((type) => (
              <label className={styles.checkboxLabel} key={type}>
                <input
                  type="checkbox"
                  checked={filters.propertyType.includes(type)}
                  onChange={() => handlePropertyTypeChange(type)}
                />
                <span>{type}</span>
              </label>
            ))}
          </div>
        </div>
      </section>
    </aside>
  );
};

export default FilterSidebar;
