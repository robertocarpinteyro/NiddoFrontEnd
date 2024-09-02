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
    <div className="bg-white py-24 sm:py-32">
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        <div className="mx-auto grid max-w-2xl grid-cols-1 items-start gap-x-8 gap-y-16 sm:gap-y-24 lg:mx-0 lg:max-w-none lg:grid-cols-2">
          <div className="lg:pr-4">
            <div className="relative flex h-[600px] w-full flex-row items-center justify-center overflow-hidden rounded-lg border bg-background md:shadow-xl">
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
          <div>
            <div className="text-base leading-7 text-gray-700 lg:max-w-lg">
              <p className="text-base font-semibold leading-7 text-yellow-400">
                Nosotros
              </p>
              <h1 className="mt-2 text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Niddo es una plataforma inmobiliaria de lujo 
              </h1>
              <div className="max-w-xl">
                <p className="mt-6">
                que combina tecnología avanzada con atención personalizada 
                para ofrecerte una experiencia única y eficiente en la búsqueda de propiedades. 
                Nuestra tecnología avanzada incluye inteligencia artificial y algoritmos de aprendizaje automático que analizan 
                tus preferencias y necesidades para ofrecerte recomendaciones precisas y personalizadas. 
                </p>
                <p className="mt-8">
                Con Niddia, nuestra asistente virtual, disfrutarás de una búsqueda ágil y adaptada a tus requerimientos específicos, 
                segurando que cada propiedad cumpla con tus expectativas.Try dividing your life days into equal times and do every
               
                </p>
              </div>
            </div>
            <dl className="mt-10 grid grid-cols-2 gap-8 border-t border-gray-900/10 pt-10 sm:grid-cols-4">
              
            </dl>
            
          </div>
        </div>
      </div>
    </div>
  );
}
