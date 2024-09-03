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
    img: "/img/slide/1.jpg",
  },
  {
    name: "Jill",
    id: "2",
    body: "I don't know what to say. I'm speechless. This is amazing.",
    img: "/img/slide/2.jpg",
  },
  {
    name: "John",
    id: "3",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/img/slide/3.jpg",
  },
  {
    name: "John",
    id: "4",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/img/slide/4.jpg",
  },
  {
    name: "John",
    id: "5",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/img/slide/5.jpg",
  },
  {
    name: "John",
    id: "6",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/img/slide/6.jpg",
  },
  {
    name: "John",
    id: "7",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/img/slide/7.jpg",
  },
  {
    name: "John",
    id: "8",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/img/slide/8.jpg",
  },
  {
    name: "John",
    id: "9",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/img/slide/9.jpg",
  },
  {
    name: "John",
    id: "10",
    body: "I'm at a loss for words. This is amazing. I love it.",
    img: "/img/slide/10.jpg",
  },
];

const firstRow = reviews.slice(reviews.length / 2);
const secondRow = reviews.slice(1, reviews.length / 2);

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
        "relative h-56 w-52 cursor-pointer overflow-hidden rounded-xl border p-4 font-museo",
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
    <div className="mx-auto my-10 w-screen max-w-screen-xl px-4 font-museo">
      <div className="flex items-center rounded-xl bg-gradient-to-r from-niddoAmarillo to-niddoAmarillo px-8 text-black shadow-lg">
        <div className="my-10 lg:my-8 lg:w-1/2">
          <h1
            className="text-3xl font-bold"
            
          >
            ¿Por qué elegirnos?
          </h1>
          <p className="mt-4 text-lg font-museo">
            Niddo es una plataforma inmobiliaria de lujo que utiliza
            inteligencia artificial y algoritmos avanzados para ofrecer
            recomendaciones personalizadas y eficientes en la búsqueda de
            propiedades. <br />
            Con la ayuda de Niddia, nuestra asistente virtual, disfrutarás de
            una experiencia ágil y adaptada a tus necesidades, asegurando que
            cada opción se alinee perfectamente con tus expectativas.
          </p>
        </div>
        <div className="hidden h-96 w-1/2 flex-shrink-0 justify-center lg:flex">
          <Marquee pauseOnHover vertical className="[--duration:60s]">
            {firstRow.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </Marquee>
          <Marquee reverse pauseOnHover vertical className="[--duration:60s]">
            {secondRow.map((review) => (
              <ReviewCard key={review.id} {...review} />
            ))}
          </Marquee>
        </div>
      </div>
    </div>
  );
}
