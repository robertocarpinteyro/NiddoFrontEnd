"use client";
import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { getStrapiURL } from "@/lib/utils";
import qs from "qs";
import { StrapiImage } from "./StrapiImage";

async function loader() {
  const { fetchData } = await import("@/lib/fetch");
  const path = "/api/desarrollos";
  const baseUrl = getStrapiURL();

  const query = qs.stringify({
    populate: "*",
  });

  const url = new URL(path, baseUrl);
  url.search = query;

  const data = await fetchData(url.href);
  console.log("Data received from API:", data);
  return data.data;
}

interface Logo {
  id: number;
  logo: {
    url: string;
    alternativeText: string | null;
    name: string;
  };
}

const LogoSlider: React.FC = () => {
  const [logos, setLogos] = useState<Logo[]>([]);
  console.log("Data received from API:", logos);
  useEffect(() => {
    const fetchLogos = async () => {
      const data = await loader();
      setLogos(data);
    };

    fetchLogos();
  }, []);

  if (logos.length === 0) return <p>Loading logos...</p>;
  return (
    <section className="bg-niddoEsmeralda text-white py-6">

      <div className="w-full inline-flex flex-nowrap overflow-hidden">
        <ul className="flex items-center [&_li]:mx-20 [&_img]:max-w-none animate-slide-left">
          {logos.concat(logos).map(
            (
              logo,
              index // Duplicamos los logos en un solo map
            ) => (
              <li key={`${logo.id}-${index}`}>
                <StrapiImage
                  key={logo.id + logos.length}
                  src={logo.logo.url}
                  alt={logo.logo.alternativeText || logo.logo.name}
                  width={200}
                  height={200}
                />
              </li>
            )
          )}
        </ul>
      </div>
    </section>
  );
};

export default LogoSlider;
