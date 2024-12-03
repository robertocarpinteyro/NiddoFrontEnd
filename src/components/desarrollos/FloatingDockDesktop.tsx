"use client";
import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, MotionValue } from "framer-motion";
import { cn } from "@/lib/utils";
import { CurrentSlideData } from "../Niddia";

const FloatingDockDesktop = ({
  items,
  currentSlideData,
  handleTabClick,
}: {
  items: { name: string; icon: string; index: number; value: string }[];
  currentSlideData: CurrentSlideData;
  handleTabClick: (index: number, value: string) => void;
}) => {
  const mouseX = useMotionValue<number>(Infinity); // Define explícitamente el tipo de mouseX como MotionValue<number>

  return (
    <motion.div
      onMouseMove={(e) => mouseX.set(e.pageX)} // Actualiza el valor de mouseX al mover el mouse
      onMouseLeave={() => mouseX.set(Infinity)} // Resetea mouseX al salir
      className="fixed bottom-8 mx-auto flex gap-6 items-center rounded-xl bg-gray-900 text-white px-6 py-4 shadow-lg"
    >
      {items.map(({ name, icon, index, value }) => (
        <TabIcon
          key={name}
          title={name}
          icon={icon}
          index={index}
          isSelected={currentSlideData.index === index}
          onClick={() => handleTabClick(index, value)}
          mouseX={mouseX}
        />
      ))}
    </motion.div>
  );
};

const TabIcon = ({
  title,
  icon,
  index,
  isSelected,
  onClick,
  mouseX,
}: {
  title: string;
  icon: string;
  index: number;
  isSelected: boolean;
  onClick: () => void;
  mouseX: MotionValue<number>; // Define mouseX como MotionValue<number>
}) => {
  const ref = useRef<HTMLDivElement>(null);

  const distance = useTransform(mouseX, (val: number) => {
    // Asegúrate de que val es un número
    const bounds = ref.current?.getBoundingClientRect() ?? { x: 0, width: 0 };
    return val - bounds.x - bounds.width / 2;
  });

  const width = useSpring(useTransform(distance, [-150, 0, 150], [40, 80, 40]), {
    mass: 0.1,
    stiffness: 150,
    damping: 12,
  });

  const height = useSpring(
    useTransform(distance, [-150, 0, 150], [40, 80, 40]),
    {
      mass: 0.1,
      stiffness: 150,
      damping: 12,
    }
  );

  return (
    <motion.div
      ref={ref}
      style={{ width, height }}
      onClick={onClick}
      className={cn(
        "aspect-square rounded-full flex flex-col items-center justify-center cursor-pointer transition-all duration-300",
        isSelected ? "text-blue-500 bg-blue-500" : "text-gray-400 bg-gray-700"
      )}
    >
      <img src={icon} alt={title} className="w-6 h-6 mb-1" />
      <span className="text-xs font-medium">{title}</span>
    </motion.div>
  );
};

export default FloatingDockDesktop;
