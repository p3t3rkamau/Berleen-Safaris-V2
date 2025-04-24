"use client";
import * as React from "react";
import "./Cards.css"

export function TourCard({ image, title, location, price }) {
  return (
    <article className="overflow-hidden rounded-sm transition-all cursor-pointer bg-[white] duration-[0.3s] ease-[ease] shadow-[0_2px_4px_rgba(0,0,0,0.08)]">
      <img
        className="object-cover overflow-hidden w-full aspect-square h-[200px]"
        src={image}
        alt={title}
      />
      <div className="p-5">
        <h3 className="mb-2 text-xl text-cyan-600">{title}</h3>
        <p className="mb-4 text-sm text-gray-500">{location}</p>
        <div className="flex justify-between items-center">
          <span className="text-lg font-bold text-gray-500">{price}</span>
          <button className="px-3 py-3.5 text-sm font-bold leading-4 text-center text-white whitespace-nowrap bg-gray-500 rounded-sm cursor-pointer select-none border-[none] duration-[0.2s] ease-[ease] transition-[background-color] hover:bg-gray-600">
            Book Now
          </button>
        </div>
      </div>
    </article>
  );
}
