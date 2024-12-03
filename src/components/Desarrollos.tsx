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

import { cn } from "@/lib/utils";

/*async function loader() {
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
}*/

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

const mockData: GridData[] = [
  {
    id: 1,
    desarrollador: "by Bosque Real",
    nombre: "Ciento Ochenta",
    amenidades: "Desde 246m² a 627m² PREVENTA A PARTIR DE $14 mdp",
    logo: {
      url: "/img/logos/5.png",
      alternativeText: "Logo Proyecto A",
      name: "Logo1",
    },
    miniatura: {
      url: "/img/180.png",
      alternativeText: "Miniatura Proyecto A",
      name: "Miniatura1",
    },
  },
  {
    id: 2,
    desarrollador: "by Bosque Real",
    nombre: "Blue",
    amenidades: "Desde 155m² a 215m² PREVENTA A PARTIR DE $9.6 mdp",
    logo: {
      url: "/img/logos/2.png",
      alternativeText: "Logo Proyecto A",
      name: "Logo1",
    },
    miniatura: {
      url: "/img/blue.jpg",
      alternativeText: "Miniatura Proyecto A",
      name: "Miniatura1",
    },
  },
  {
    id: 3,
    desarrollador: "by Bosque Real",
    nombre: "Nox",
    amenidades: "Desde 152m² a 174m² PREVENTA A PARTIR DE $10.1 mdp",
    logo: {
      url: "/img/logos/4.png",
      alternativeText: "Logo Proyecto A",
      name: "Logo1",
    },
    miniatura: {
      url: "/img/nox.jpg",
      alternativeText: "Miniatura Proyecto A",
      name: "Miniatura1",
    },
  },
  {
    id: 4,
    desarrollador: "by Bosque Real",
    nombre: "Sky View",
    amenidades: "Desde 332m² a 736m² PREVENTA A PARTIR DE $19.9 mdp",
    logo: {
      url: "/img/logos/1.png",
      alternativeText: "Logo Proyecto A",
      name: "Logo1",
    },
    miniatura: {
      url: "/img/sky.jpg",
      alternativeText: "Miniatura Proyecto A",
      name: "Miniatura1",
    },
  },
  {
    id: 5,
    desarrollador: "by Bosque Real",
    nombre: "Nativ",
    amenidades: "Desde 114m² a 156.7m² PREVENTA A PARTIR DE 7.9 mdp",
    logo: {
      url: "/img/logos/7.png",
      alternativeText: "Logo Proyecto A",
      name: "Logo1",
    },
    miniatura: {
      url: "/img/nativ.jpg",
      alternativeText: "Miniatura Proyecto A",
      name: "Miniatura1",
    },
  },
  {
    id: 6,
    desarrollador: "by Bosque Real",
    nombre: "Ivy",
    amenidades: "Desde 255m² a 676m² ENTREGA INMEDIATA A PARTIR DE 17.9 mdp",
    logo: {
      url: "/img/logos/6.png",
      alternativeText: "Logo Proyecto A",
      name: "Logo1",
    },
    miniatura: {
      url: "/img/ivy.jpg",
      alternativeText: "Miniatura Proyecto A",
      name: "Miniatura1",
    },
  },

  // Añade más proyectos según sea necesario
];

export function GridDisplay() {
  const [gridData, setGridData] = useState<GridData[] | null>(null);

  useEffect(() => {
    // En lugar de llamar a una API, simplemente establecemos los datos simulados
    setGridData(mockData);
  }, []);

  if (!gridData) return <div>Cargando...</div>;
  return (
    <div
      id="desarrollos"
      className="flex flex-wrap gap-6 p-4 justify-center font-museo"
    >
      <div className="px-10 py-24 mx-auto max-w-7xl">
        <div className="w-full mx-auto text-left md:text-center">
          <h1 className="mb-6 text-5xl font-extrabold leading-none max-w-5xl mx-auto tracking-normal text-gray-900 sm:text-6xl md:text-6xl lg:text-7xl md:tracking-tight">
            Nuestros{" "}
            <span className="w-full text-transparent bg-clip-text bg-gradient-to-r from-niddoAmarillo to-niddoAmarillo filter brightness-90 lg:inline ">
              Desarrollos
            </span>{" "}
          </h1>
          <p className="px-0 mb-6 text-lg text-gray-600 md:text-xl lg:px-24">
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
                  className=" rounded-full border-2 object-fill"
                  width={40}
                  height={35}
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
