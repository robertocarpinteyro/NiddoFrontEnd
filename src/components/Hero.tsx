"use client";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { getStrapiURL } from "@/lib/utils";
import qs from "qs";
import { StrapiImage } from "./StrapiImage";
import { Player } from "@lottiefiles/react-lottie-player";
import React, { useState, useEffect } from "react";

async function loader() {
  const { fetchData } = await import("@/lib/fetch");

  const path = "/api/sections/3";
  const baseUrl = getStrapiURL();
  const query = qs.stringify({
    populate: "*",
  });

  const url = new URL(path, baseUrl);
  url.search = query;
  const data = await fetchData(url.href);
  return data;
}

interface HeroProps {
  data: {
    heading: string;
    text: string;
    cta: {
      href: string;
      text: string;
      external: boolean;
    };
    image: {
      url: string;
      alternativeText: string | null;
      name: string;
    };
    bg: {
      url: string;
      alternativeText: string | null;
      name: string;
    };
  };
}

export function Hero() {
  const [data, setData] = useState<HeroProps["data"] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await loader();
      setData(response);
    };
    
    if (!data) {
      fetchData();
    }
  }, [data]);

  if (!data) return null;

  const { heading, text, cta, image, bg } = data;

  return (
    <div
      className="bg-cover bg-center w-full flex items-center pt-20"
      style={{
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
        backgroundImage: `url("${bg.url}")`,
      }}
    >
      <Container className="flex flex-wrap justify-center items-center px-11">
        <div className="flex items-center w-full lg:w-1/2">
          <div
            className="max-w-2xl mb-8"
            style={{
              borderRadius: "200px",
              fontFamily: "MuseoModerno",
            }}
          >
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              {heading}
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
              {text}
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href={cta.href}
                target={cta.external ? "_blank" : "_self"}
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-niddoEsmeralda rounded-md "
              >
                {cta.text}
              </Link>
            </div>
          </div>
        </div>

        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="relative">
            <StrapiImage
              src={image.url}
              width={616}
              height={617}
              alt={image.alternativeText || "Hero Image"}
            />

            <div className="absolute inset-0 flex justify-center items-center">
              <Player
                autoplay
                loop
                src="/img/lottie/globos.json"
                style={{ width: "100%", height: "100%" }}
              />
            </div>
          </div>
        </div>
      </Container>
    </div>
  );
}
