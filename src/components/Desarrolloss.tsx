"use client";
import React, { useState, useEffect } from "react";
import {
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Image,
  Button,
} from "@nextui-org/react";
import qs from "qs";
import { getStrapiURL } from "@/lib/utils";
import { StrapiImage } from "./StrapiImage";
import { cn } from "@/lib/utils";

async function loader() {
  const { fetchData } = await import("@/lib/fetch");
  const path = "/api/desarrollos";
  const baseUrl = getStrapiURL();

  const query = qs.stringify({
    populate: {
      id: {},
      nombre: {},
      miniatura: {
        fields: ["url", "alternativeText", "name"],
      },
      desarollador: {},
      amennidades: {},
      logo: {
        fields: ["url", "alternativeText", "name"],
      },
    },
  });

  const url = new URL(path, baseUrl);
  url.search = query;

  const data = await fetchData(url.href);
  console.log("Data received from API:", data);
  return data.data;
}

interface GridData {
  id: number;
  desarrollador: string;
  nombre: string;
  amenidades: string;
  logo: {
    url: string;
    alternativeText: string | null;
    name: string;
  };
  miniatura: {
    url: string;
    alternativeText: string | null;
    name: string;
  };
}

export function GridDisplay() {
  const [gridData, setGridData] = useState<GridData[] | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await loader();
      setGridData(data);
    };

    if (!gridData) {
      fetchData();
    }
  }, [gridData]);

  if (!gridData) return <div>Cargando...</div>;
  console.log("Data received from API:", gridData);
  return (
    <div
      id="desarrollos"
      className="flex flex-wrap gap-6 p-4 justify-center "
 
    >
      <div className="px-10 py-24 mx-auto max-w-7xl font-museo">
        <div className="w-full mx-auto text-left md:text-center">
          <h1 className="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight">
            Nuestros{" "}
            <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-niddoAmarillo to-niddoAmarillo filter brightness-90 lg:inline ">
              Desarrollos
            </span>{" "}
          </h1>
          <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24 font-museo">
            Cada uno de nuestros proyectos residenciales está pensado para
            ofrecer amenidades exepcionales, brindando una calidad de vida
            única.
          </p>
        </div>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {gridData.map((desarrollo) => (
          <div
            key={desarrollo.id}
            className="max-w-xs w-full group/card mx-auto"
          >
            <div
              className={cn(
                "cursor-pointer overflow-hidden relative card h-80 rounded-3xl shadow-xl max-w-xs mx-auto flex flex-col justify-between p-4 transition-all duration-300 hover:scale-110",
                "bg-cover"
              )}
              style={{
                backgroundImage: `url(${desarrollo.miniatura.url})`,
              }}
            >
              <div className="absolute w-full h-full top-0 left-0 transition duration-300 group-hover/card:bg-black opacity-60"></div>
              <div className="flex flex-row items-center space-x-4 z-10 transition-opacity duration-300 opacity-0 group-hover/card:opacity-100">
                <Image
                  src={desarrollo.logo.url}
                  className=" rounded-full border-2 object-cover "
                  width={50}
                  height={50}
                  alt={
                    desarrollo.miniatura.alternativeText ||
                    desarrollo.miniatura.name
                  }
                />

                <div className="flex flex-col">
                  <p className="font-normal text-base text-gray-50 relative z-10">
                    {desarrollo.desarrollador}
                  </p>
                </div>
              </div>
              <div className="text content transition-opacity duration-300 opacity-0 group-hover/card:opacity-100">
                <h1 className="font-bold text-xl md:text-2xl text-gray-50 relative z-10">
                  {desarrollo.nombre}
                </h1>
                <p className="font-normal text-sm text-gray-50 relative z-10 my-4">
                  {desarrollo.amenidades}
                </p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
