"use client";
import React from "react";
import { usePathname, useSearchParams, useRouter } from "next/navigation";
import { cn } from "@/lib/utils";
import { CurrentSlideData } from "../Niddia";

const FloatingDockMobile = ({
  items,
  currentSlideData,
  handleTabClick,
}: {
  items: { name: string; icon: string; index: number; value: string }[];
  currentSlideData: CurrentSlideData;
  handleTabClick: (index: number, value: string) => void;
}) => {
  return (
    <div className="fixed bottom-4 left-1/2 transform -translate-x-1/2 flex gap-3 items-center rounded-full bg-gray-900 text-white px-4 py-3 shadow-lg">
      {items.map(({ name, icon, index, value }) => (
        <button
          key={name}
          className={cn(
            "flex flex-col items-center gap-1 px-3 py-2 rounded-full transition-all duration-300",
            currentSlideData.index === index
              ? "bg-blue-500 text-white"
              : "bg-gray-700 text-gray-400 hover:text-white hover:bg-blue-600"
          )}
          onClick={() => handleTabClick(index, value)}
        >
          <img src={icon} alt={name} className="w-5 h-5" />
          <span className="text-xs font-medium">{name}</span>
        </button>
      ))}
    </div>
  );
};

export default FloatingDockMobile;
