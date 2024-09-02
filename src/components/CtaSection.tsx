import React from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { CheckIcon } from "@heroicons/react/20/solid";
import { WobbleCard } from "./ui/wobble-card";
import { cn } from "@/lib/utils";
import Marquee from "./magicui/marquee";

const reviews = [
  {
    name: "Jack",
    id: "1",
    body: "I've never seen anything like this before. It's amazing. I love it.",
    img: "/img/amenidadesNiddia.png",
  },
  {
    name: "Jill",
    id: "2",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/img/amenidadesNiddia.png",
  },
  {
    name: "John",
    id: "3",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/img/amenidadesNiddia.png",
  },
];

const firstRow = reviews.slice(0, reviews.length / 2);
const secondRow = reviews.slice(reviews.length / 2);

const ReviewCard = ({
  img,
  name,
  body,
}: {
  img: string;
  name: string;
  body: string;
}) => {
  return (
    <figure
      className={cn(
        "relative h-40 w-36 cursor-pointer overflow-hidden rounded-xl border p-4",
        // light styles
        "border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05]",
        // dark styles
        "dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]"
      )}
    >
      <div className="relative h-full w-full">
        <Image
          src={img}
          alt={name}
          layout="fill"
          objectFit="cover"
          className="rounded-xl"
        />
      </div>
    </figure>
  );
};

export function Ctasection() {
  return (
      <div className="bg-white py-6 sm:py-8 lg:py-12">
        <div className="mx-auto max-w-screen-2xl px-4 md:px-8">
          <div className="flex flex-col overflow-hidden rounded-lg bg-[#ffdf00] sm:flex-row md:h-50">
            <div className="flex w-full flex-col  sm:w-1/2 sm:p-8 lg:w-2/5">
              <h2 className="mb-4 text-xl font-bold text-black md:text-2xl lg:text-4xl">
              ¿Por qué elegirnos?
                <br />
              </h2>

              <p className="mb-8 max-w-md text-black">
              Niddo es una plataforma inmobiliaria de lujo que combina tecnología avanzada con atención personalizada para ofrecerte una experiencia única y eficiente en la búsqueda de propiedades. Nuestra tecnología avanzada incluye inteligencia artificial y algoritmos de aprendizaje automático que analizan tus preferencias y necesidades para ofrecerte recomendaciones precisas y personalizadas. 
              Con Niddia, nuestra asistente virtual, disfrutarás de una búsqueda ágil y adaptada a tus requerimientos específicos, asegurando que cada propiedad cumpla con tus expectativas.
              </p>

            
            </div>

            <div className="order-first h-48 w-full bg-[#ffdf00] sm:order-none sm:h-auto sm:w-1/2 lg:w-3/5">
              <div className="relative flex h-[500px] w-full flex-row items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
                <Marquee pauseOnHover vertical className="[--duration:20s]">
                  {firstRow.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                  ))}
                </Marquee>
                <Marquee
                  reverse
                  pauseOnHover
                  vertical
                  className="[--duration:20s]"
                >
                  {secondRow.map((review) => (
                    <ReviewCard key={review.id} {...review} />
                  ))}
                </Marquee>
                <div className="pointer-events-none absolute inset-x-0 top-0 h-1/3 bg-gradient-to-b from-white dark:from-background"></div>
                <div className="pointer-events-none absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-white dark:from-background"></div>
              </div>
            </div>
          </div>
        </div>
      </div>

  );
}
