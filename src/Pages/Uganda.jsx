"use client";
import React, { useState } from "react";
import styles from "../styles/InputDesign.module.css";
import SearchHeader from "../Components/Dest2/SearchHeader";
import FilterSidebar from "../Components/Dest2/FilterSidebar";
import PropertyList from "../Components/Dest2/PropertyList";

function Uganda() {
  const [searchLocation, setSearchLocation] = useState("Mumbai");
  const [totalProperties, setTotalProperties] = useState(305);

  const [filters, setFilters] = useState({
    priceRange: {
      min: 0,
      max: 1000,
    },
    sortBy: "Popular",
    amenities: [],
    propertyType: [],
    rating: null,
  });

  const [hotels, setHotels] = useState([
    {
      id: 1,
      name: "Lakeside Chalet Marriott Executive Apartments",
      location: "Powai",
      rating: 4.3,
      type: "Entire Apartment",
      price: 352,
      images: [
        "https://images.pexels.com/photos/10812974/pexels-photo-10812974.jpeg",
        "https://images.pexels.com/photos/16113326/pexels-photo-16113326.jpeg",
        "https://images.pexels.com/photos/6603475/pexels-photo-6603475.jpeg",
        "https://images.pexels.com/photos/12663190/pexels-photo-12663190.jpeg",
        "https://images.pexels.com/photos/6138094/pexels-photo-6138094.jpeg",
        "https://images.pexels.com/photos/2504911/pexels-photo-2504911.jpeg",
      ],
      amenities: ["Free Cancellation", "Breakfast Included"],
      luxe: true,
    },
    {
      id: 2,
      name: "The Orion Premium Suites",
      location: "Santacruz East",
      rating: 4.2,
      type: "Room In An Apartment",
      price: 140,
      images: [
        "https://images.pexels.com/photos/6466496/pexels-photo-6466496.jpeg",
        "https://images.pexels.com/photos/11701152/pexels-photo-11701152.jpeg",
        "https://images.pexels.com/photos/6580228/pexels-photo-6580228.jpeg",
        "https://images.pexels.com/photos/3315291/pexels-photo-3315291.jpeg",
        "https://images.pexels.com/photos/2873951/pexels-photo-2873951.jpeg",
        "https://images.pexels.com/photos/189295/pexels-photo-189295.jpeg",
      ],
    },
  ]);

  return (
    <div className={styles.container}>
      <SearchHeader
        searchLocation={searchLocation}
        setSearchLocation={setSearchLocation}
      />

      <div className={styles.mainContent}>
        <FilterSidebar filters={filters} setFilters={setFilters} />

        <PropertyList
          hotels={hotels}
          totalProperties={totalProperties}
          searchLocation={searchLocation}
        />
      </div>
    </div>
  );
}

export default Uganda;
