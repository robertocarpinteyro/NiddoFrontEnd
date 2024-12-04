"use client";
import React, { useEffect, useState, Suspense } from "react";
import { AnimatePresence } from "framer-motion";
import BgStatus from "./desarrollos/BgStatus";
import FloatingDockAdapted from "./desarrollos/NiddiaControls";
import Image from "next/image";
export type Data = {
  img: string;
  title: string;
  description: string;
  entrega: string;
  precioMinimo: string;
  precioMaximo: string;
  superficieMinima: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export function Niddia() {
  useEffect(() => {
    
    if (typeof window !== "undefined") {
      // Limpiar cookies relacionadas
      document.cookie.split(";").forEach((cookie) => {
        const eqPos = cookie.indexOf("=");
        const name = eqPos > -1 ? cookie.substr(0, eqPos) : cookie;
        document.cookie = `${name}=;expires=Thu, 01 Jan 1970 00:00:00 GMT;path=/`;
      });

      // Limpieza de localStorage y sessionStorage
      localStorage.clear();
      sessionStorage.clear();

      // Capturar query string desde el cliente
      const urlParams = new URLSearchParams(window.location.search);
      const selectedOption = urlParams.get("option") || "niddia"; // Valor predeterminado

      console.log("optionVariable", selectedOption);

      // Configurar MindStudioSettings con el valor capturado
      (window as any).MindStudioSettings = {
        publicToken: "pkd281a1076c773e9bd767063d6d923a5d",
        appId: "52b9bb60-13d4-45f2-93a0-bedc2ec9f07e",
        targetId: "mindstudio-frame",
        debugging: true,
        options: {
          autoFocus: true,
          disableThreads: false,
          minimizeThreadPanel: true,
          launchVariables: {
            option: selectedOption, // Pasa el valor de la query string
          },
        },
      };

      // Insertar el script del embeding
      const script = document.createElement("script");
      script.src = "https://api.mindstudio.ai/v1/embed.js";
      script.async = false;
      document.body.appendChild(script);

      // Limpieza del script al desmontar el componente
      return () => {
        document.body.removeChild(script);
      };
    }
  }, []); // No necesita dependencia, ya que `window.location` es global

  const [data, setData] = React.useState<Data[]>(sliderData.slice(1));
  const [transitionData, setTransitionData] = React.useState<Data>(
    sliderData[0]
  );
  const [currentSlideData, setCurrentSlideData] =
    React.useState<CurrentSlideData>({
      data: initData,
      index: 0,
    });

  return (
    <main className="relative flex-1 h-full min-h-screen select-none overflow-auto text-white antialiased font-museo">
      <AnimatePresence>
        <div className="relative isolate overflow-hidden bg-gray-900 py-24 sm:py-32">
          <div className="absolute inset-0 -z-10 size-full object-cover object-right md:object-center">
            <BgStatus
              transitionData={transitionData}
              currentSlideData={currentSlideData}
            />
          </div>

          <div
            aria-hidden="true"
            className="hidden sm:absolute sm:-top-10 sm:right-1/2 sm:-z-10 sm:mr-10 sm:block sm:transform-gpu sm:blur-3xl"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#6dffd3] to-[#000000] opacity-50"
            />
          </div>
          <div
            aria-hidden="true"
            className="absolute -top-52 left-1/2 -z-10 -translate-x-1/2 transform-gpu blur-3xl sm:top-[-28rem] sm:ml-16 sm:translate-x-0 sm:transform-gpu"
          >
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="aspect-[1097/845] w-[68.5625rem] bg-gradient-to-tr from-[#000000] to-[#000000] opacity-20"
            />
          </div>
          <div className="mx-auto max-w-7xl px-6 lg:px-8">
            <div className="mx-auto max-w-2xl lg:mx-0">
              <h2 className="text-5xl font-semibold tracking-tight text-white sm:text-7xl">
                {transitionData?.title}
              </h2>
              <p className="mt-8 text-pretty text-lg font-medium text-gray-300 sm:text-xl/8">
                {transitionData?.description}
              </p>
            </div>
            <div className="mx-auto mt-10 max-w-2xl lg:mx-0 lg:max-w-none">
              <dl className="mt-16 grid grid-cols-1 gap-8 sm:mt-20 sm:grid-cols-2 lg:grid-cols-4">
                <div className="flex flex-col-reverse gap-1">
                  <dd className="text-4xl font-semibold tracking-tight text-white">
                    {transitionData?.entrega}
                  </dd>
                  <dt className="text-base/7 text-gray-300">
                    Fecha de entrega desde
                  </dt>
                </div>
                <div className="flex flex-col-reverse gap-1">
                  <dd className="text-4xl font-semibold tracking-tight text-white">
                    {transitionData?.precioMinimo} mxn
                  </dd>
                  <dt className="text-base/7 text-gray-300">
                    {transitionData?.title} desde
                  </dt>
                </div>
                <div className="flex flex-col-reverse gap-1">
                  <dd className="text-4xl font-semibold tracking-tight text-white">
                    {transitionData?.superficieMinima} m²
                  </dd>
                  <dt className="text-base/7 text-gray-300">Superficie</dt>
                </div>
              </dl>
            </div>
          </div>
          <Suspense fallback={<div>Loading...</div>}>
            <FloatingDockAdapted
              currentSlideData={currentSlideData}
              data={data}
              transitionData={transitionData}
              handleTransitionData={setTransitionData}
              handleCurrentSlideData={setCurrentSlideData}
              sliderData={sliderData}
            />
          </Suspense>
        </div>
      </AnimatePresence>
      <div className="bg-black flex justify-center items-center h-20 w-full">
        <Image
          src="/img/niddiaLogo.png"
          alt="Separador"
          width={64} // Ajusta el ancho de la imagen
          height={64} // Ajusta la altura de la imagen
          className="filter invert contrast-200 brightness-200"
        />
      </div>

      <iframe
        className="h-full w-full rounded-lg bg-gray-100 dark:bg-neutral-800"
        id="mindstudio-frame"
        referrerPolicy="origin"
        style={{
          width: "100%",
          height: "85vh",
          border: "none",
          borderRadius: "8px",
          outline: "none",
          backgroundColor: "gray",
        }}
        title="Niddia"
        frameBorder="0"
      ></iframe>
    </main>
  );
}

const sliderData = [
  {
    img: "/img/casaAmbar.jpg",
    title: "Casas",
    description:
      "En Niddo, te ofrecemos la oportunidad de construir la casa de tus sueños en los lotes residenciales de Bosque Real. Diseña tu hogar a medida, con un estilo único y adaptado a tus necesidades. ",
    entrega: "Agosto 2025 + 6 meses de gracia.",
    precioMinimo: "$15 mdp",
    precioMaximo: "800",
    superficieMinima: "420",
  },
  {
    img: "/img/skyview.jpg",
    title: "Departamentos",
    description:
      "Descubre los departamentos en Bosque Real, donde la modernidad y la naturaleza se fusionan. Con opciones amplias y acogedoras, encontrarás espacios diseñados para tu comodidad y estilo de vida.",
    entrega: "Marzo 2025 + 6 meses de gracia.",
    precioMinimo: "$7,980,000",
    precioMaximo: "800",
    superficieMinima: "114.65",
  },
  {
    img: "/img/torreDesigno.jpg",
    title: "Oficinas",
    description:
      "Descubre nuestras oficinas en Bosque Real, un espacio ideal para el crecimiento de tu empresa. Este desarrollo moderno ofrece oficinas con diseño contemporáneo, amplias áreas de trabajo y vistas inigualables, todo en un entorno seguro y rodeado de áreas verdes.",
    entrega: "",
    precioMinimo: "$5,178,218.34",
    precioMaximo: "800",
    superficieMinima: "52.946",
  },
  {
    img: "/img/Reserva.jpeg",
    title: "Lotes",
    description:
      "Cada lote está diseñado con una urbanización de alta calidad y sistemas de seguridad avanzados. En Niddo, te ofrecemos la oportunidad de construir la casa de tus sueños en los exclusivos lotes residenciales",
    entrega: "",
    precioMinimo: "$4,823,070",
    precioMaximo: "800",
    superficieMinima: "229.67",
  },
];

const initData = sliderData[0];
