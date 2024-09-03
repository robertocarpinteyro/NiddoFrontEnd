"use client";
import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { getStrapiURL } from "@/lib/utils";
import qs from "qs";
import { StrapiImage } from "./StrapiImage";
import { Player } from "@lottiefiles/react-lottie-player";
import React, { useState, useEffect } from "react";
import { TextGenerateEffect } from "./ui/text-generate-effect";
import { PlayCircleIcon } from "@heroicons/react/20/solid";

async function loader() {
  const { fetchData } = await import("@/lib/fetch");

  const path = "/api/sections/3";
  const baseUrl = getStrapiURL();
  const query = qs.stringify({
    populate: {
      heading: {},
      image: {
        fields: ["url", "alternativeText", "name"],
      },
      cta: {
        populate: true,
      },
      text: {},
      bg: {
        populate: true,
      },
      imageRight: {},
    },
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
  const [showVideo, setShowVideo] = useState(false);

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
    <div id="inicio"
      className="bg-cover bg-center w-full flex items-center pt-40"
      style={{
        borderBottomLeftRadius: "50px",
        borderBottomRightRadius: "50px",
        backgroundImage: `url("${bg.url}")`,
      }}
    >
      <Container className="flex flex-wrap justify-center items-center px-11">
        <div className="flex items-center w-full lg:w-1/2">
          <div
            className="max-w-2xl mb-8 font-museo"
        
          >
            <h1>
              <TextGenerateEffect duration={5} filter={false} words={heading} />
            </h1>
            <p className="py-5 text-xl leading-normal text-black lg:text-xl xl:text-2xl">
              {text}
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href="https://www.niddo.ai/niddia"
                target={cta.external ? "_blank" : "_self"}
                rel="noopener"
                className="px-8 py-4 text-lg font-museo font-medium text-center text-white bg-niddoEsmeralda rounded-md "
              >
                {cta.text}
              </Link>
              <button onClick={() => setShowVideo(true)} className="h-12 w-12">
                <PlayCircleIcon />
              </button>
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

      {/* Video Modal */}
      {showVideo && (
        <div className="fixed inset-0 bg-black bg-opacity-75 flex justify-center items-center z-50">
          <div className="bg-black w-full h-full h-min-screen p-8 relative">
            <button
              onClick={() => setShowVideo(false)}
              className="absolute top-4 right-4 text-white text-2xl"
            >
              &times; {/* Esto es el símbolo de cerrar (X) */}
            </button>
            <div className="container m-auto">
              <div className="w-full z-0 relative md:min-h-[41rem]">
                <div className="w-full h-full relative z-0 rounded-2xl">
                
                  <video
                    className="relative z-[1] inline w-full h-full object-center object-cover rounded-2xl"
                    preload="metadata"
                    loop
                    playsInline
                    autoPlay
                    src="https://dl.dropboxusercontent.com/scl/fi/yjbc2zzdyrl23e5mw4n1k/niddiaVideo-1.mp4?rlkey=o81k5sk8mm58k9ipctkjf1su4&st=1kp3uvwc"
                  ></video>
                  <video
                    className="absolute top-0 left-0 w-full h-full transform-gpu translate-x-0 translate-y-0 z-0 inline object-center object-cover rounded-2xl blur-2xl"
                    preload="none"
                    loop
                    playsInline
                    autoPlay
                    src="https://dl.dropboxusercontent.com/scl/fi/yjbc2zzdyrl23e5mw4n1k/niddiaVideo-1.mp4?rlkey=o81k5sk8mm58k9ipctkjf1su4&st=1kp3uvwc"
                  ></video>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
