"use client";
import React, { useEffect, useState } from "react";
import { useSearchParams } from "next/navigation";
import FloatingDockDesktop from "./FloatingDockDesktop";
import FloatingDockMobile from "./FloatingDockMobile";
import { CurrentSlideData, Data } from "../Niddia";

type Props = {
  currentSlideData: CurrentSlideData;
  sliderData: Data[];
  data: Data[];
  transitionData: Data;
  handleCurrentSlideData: React.Dispatch<
    React.SetStateAction<CurrentSlideData>
  >;
  handleTransitionData: React.Dispatch<React.SetStateAction<Data>>;
};

const tabItems = [
  { name: "Casas", icon: "img/icons/casas.svg", value: "casas" },
  { name: "Departamentos", icon: "img/icons/departamentos.svg", value: "departamentos" },
  { name: "Oficinas", icon: "img/icons/oficinas.svg", value: "oficinas" },
  { name: "Lotes", icon: "img/icons/lotes.svg", value: "lotes" },
];

const FloatingDockAdapted = ({
  currentSlideData,
  sliderData,
  transitionData,
  handleCurrentSlideData,
  handleTransitionData,
}: Props) => {
  const searchParams = useSearchParams();
  const [lastOption, setLastOption] = useState<string | null>(null);
  const [isVisible, setIsVisible] = useState(true); // Controla si el dock está visible

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY; // Obtiene la posición actual del scroll
      const documentHeight = document.documentElement.scrollHeight;
      const windowHeight = window.innerHeight;

      // Calcula si el scroll está a la mitad de la página
      const scrollFraction = scrollPosition / (documentHeight - windowHeight);

      // Oculta el dock cuando el scroll está a la mitad de la página
      if (scrollFraction >= 0.5) {
        setIsVisible(false); // Ocultar
      } else {
        setIsVisible(true); // Mostrar
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  useEffect(() => {
    const option = searchParams.get("option");
    if (option && option !== lastOption) {
      setLastOption(option);
      const index = tabItems.findIndex((item) => item.value === option);
      if (index !== -1) {
        updateSlide(index, option);
      }
    }
  }, [searchParams, lastOption]);

  const updateSlide = (index: number, value: string) => {
    handleCurrentSlideData({
      data: sliderData[index],
      index,
    });
    handleTransitionData(sliderData[index]);
  };

  const handleTabClick = (index: number, value: string) => {
    if (value !== lastOption) {
      window.location.href = `/niddia?option=${value}`; // Redirige solo si es necesario
    }
  };

  return (
    <div
      className={`relative flex justify-center items-center h-[35rem] w-full transition-opacity duration-500 ${
        isVisible ? "opacity-100" : "opacity-0 pointer-events-none"
      }`}
    >
      <FloatingDockDesktop
        items={tabItems.map((item, index) => ({
          ...item,
          index,
        }))}
        currentSlideData={currentSlideData}
        handleTabClick={handleTabClick}
      />
      <FloatingDockMobile
        items={tabItems.map((item, index) => ({
          ...item,
          index,
        }))}
        currentSlideData={currentSlideData}
        handleTabClick={handleTabClick}
      />
    </div>
  );
};

export default FloatingDockAdapted;
