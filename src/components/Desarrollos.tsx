"use client"
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

  return (
    <div className="flex flex-wrap gap-6 p-4 justify-center">
      {gridData.map((desarrollo) => (
        <Card
          key={desarrollo.id}
          isFooterBlurred
          className="w-full sm:w-1/2 lg:w-1/3 h-[300px] flex-shrink-0"
        >
          <CardHeader className="absolute z-10 top-1 flex-col items-start">
            <p className="text-tiny text-white/60 uppercase font-bold">
              {desarrollo.desarrollador}
            </p>
            <h4 className="text-white/90 font-medium text-xl">
              {desarrollo.nombre}
            </h4>
          </CardHeader>
          <StrapiImage
            src={desarrollo.miniatura.url}
            width={616}
            height={617}
            className="z-0 w-full h-full object-cover"
            alt={desarrollo.miniatura.alternativeText || "Hero Image"}
          />
          <CardFooter className="absolute bg-ni/40 bottom-0 z-10 border-t-1 border-default-600 dark:border-default-100">
            <div className="flex flex-grow gap-2 items-center">
              <div className="rounded-full w-10 h-11">
                <StrapiImage
                  src={desarrollo.logo.url}
                  width={616}
                  height={617}
                  className="w-full h-full bg-niddoEsmeralda"
                  alt={desarrollo.miniatura.alternativeText || "Hero Image"}
                />
              </div>

              <div className="flex flex-col">
                <p className="text-tiny text-white/60">
                  {desarrollo.nombre} {desarrollo.desarrollador}
                </p>
                <p className="text-tiny text-white/60">
                  {desarrollo.amenidades}
                </p>
              </div>
            </div>
            <Button radius="full" size="sm">
              Amenidades
            </Button>
          </CardFooter>
        </Card>
      ))}
    </div>
  );
}
