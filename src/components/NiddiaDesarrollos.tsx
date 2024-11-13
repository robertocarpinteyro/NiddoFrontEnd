"use client";
import React, { useEffect, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { AnimatePresence } from "framer-motion";
import { cn } from "@/lib/utils";
import { Image } from "@nextui-org/react";
import Header from "./desarrollos/Header";
import BackgroundImage from "./desarrollos/BackgroundImage";
import Slides from "./desarrollos/Slides";
import SlideInfo from "./desarrollos/SlideInfo";
import Controls from "./desarrollos/Controls";

export type Data = {
  img: string;
  title: string;
  description: string;
  location: string;
};

export type CurrentSlideData = {
  data: Data;
  index: number;
};

export function NiddiaDesarrollos() {
  const links = [
    {
      label: "Niddo",
      href: "https://www.niddo.ai/",
      icon: (
        <svg
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 256 256"
          width="24px"
          height="24px"
        >
          <path
            fill="#000000"
            d="M224 115.55V208a16 16 0 0 1-16 16H48a16 16 0 0 1-16-16v-92.45a16 16 0 0 1 5.17-11.78l80-75.48l.11-.11a16 16 0 0 1 21.53 0a1.14 1.14 0 0 0 .11.11l80 75.48a16 16 0 0 1 5.08 11.78"
          />
        </svg>
      ),
    },
    {
      label: "Chat",
      href: "https://www.niddo.ai/niddia",
      icon: (
        <svg
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 512 512"
          width="24px"
          height="24px"
        >
          <path
            fill="#000000"
            d="M160 368c26.5 0 48 21.5 48 48v16l72.5-54.4c8.3-6.2 18.4-9.6 28.8-9.6H448c8.8 0 16-7.2 16-16V64c0-8.8-7.2-16-16-16H64c-8.8 0-16 7.2-16 16v288c0 8.8 7.2 16 16 16zm48 124l-.2.2l-5.1 3.8l-17.1 12.8c-4.8 3.6-11.3 4.2-16.8 1.5s-8.8-8.2-8.8-14.3v-80H64c-35.3 0-64-28.7-64-64V64C0 28.7 28.7 0 64 0h384c35.3 0 64 28.7 64 64v288c0 35.3-28.7 64-64 64H309.3z"
          />
        </svg>
      ),
    },
    {
      label: "Recorridos Virtuales",
      href: "https://www.niddo.ai/niddiaDesarrollos",
      icon: (
        <svg
          role="img"
          xmlns="http://www.w3.org/2000/svg"
          viewBox="0 0 24 24"
          width="24px"
          height="24px"
        >
          <path
            fill="#000000"
            d="m15 17l-2-2h-2l-2 2H7a2 2 0 0 1-2-2V9a2 2 0 0 1 2-2h10a2 2 0 0 1 2 2v6a2 2 0 0 1-2 2zm7-3a1 1 0 0 1-2 0v-4a1 1 0 0 1 2 0zM4 14a1 1 0 0 1-2 0v-4a1 1 0 1 1 2 0z"
          />
        </svg>
      ),
    },
  ];
  const [open, setOpen] = useState(false);
  return (
    <div
      className={cn(
        "rounded-md flex flex-col md:flex-row bg-black dark:bg-neutral-800 w-full max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700",
        "h-full min-h-screen"
      )}
    >
      <Sidebar open={open} setOpen={setOpen}>
        <SidebarBody className="justify-between gap-10 z-10">
          <div className="flex flex-col flex-1 overflow-y-auto overflow-x-hidden">
            {open ? <Logo /> : <LogoIcon />}
            <div className="mt-8 flex flex-col gap-2">
              {links.map((link, idx) => (
                <SidebarLink key={idx} link={link} />
              ))}
            </div>
          </div>
        </SidebarBody>
      </Sidebar>
      <Dashboard />
    </div>
  );
}

export const Logo = () => {
  return (
    <Link
      href="https://www.niddo.ai/niddia"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        src="/img/niddiaLogo.png"
        width="auto"
        height="auto"
        alt="Niddia Impulsada por inteligencia aritifical"
      />
    </Link>
  );
};

export const LogoIcon = () => {
  return (
    <Link
      href="https://www.niddo.ai/niddia"
      className="font-normal flex space-x-2 items-center text-sm text-black py-1 relative z-20"
    >
      <Image
        src="/img/app-icon.png"
        width="auto"
        height="auto"
        alt="Niddia Impulsada por inteligencia aritifical"
      />
    </Link>
  );
};

// Dummy dashboard component with content
const Dashboard = () => {
  useEffect(() => {
    // Definir las configuraciones iniciales
    (window as any).MindStudioSettings = {
      publicToken: "pkd281a1076c773e9bd767063d6d923a5d",
      appId: "52b9bb60-13d4-45f2-93a0-bedc2ec9f07e",
      targetId: "mindstudio-frame",
      debugging: true,
      options: {
        autoFocus: true,
        disableThreads: false,
        minimizeThreadPanel: true,
      },
    };

    // Crear e insertar el script
    const script = document.createElement("script");
    script.src = "https://api.mindstudio.ai/v1/embed.js";
    script.async = true;
    document.body.appendChild(script);

    // Forzar la recarga después de un pequeño retraso
    const retryLoadScript = setTimeout(() => {
      // Eliminar el script actual
      document.body.removeChild(script);

      // Crear un nuevo script e insertar nuevamente
      const newScript = document.createElement("script");
      newScript.src = "https://api.mindstudio.ai/v1/embed.js";
      newScript.async = true;
      document.body.appendChild(newScript);
    }, 200); // Retraso de 200ms para asegurar la carga completa

    // Limpiar ambos scripts cuando el componente se desmonte
    return () => {
      document.body.removeChild(script);
      clearTimeout(retryLoadScript);
    };
  }, []);
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
    <main
      className={`
      relative flex-1 h-full min-h-screen select-none overflow-auto text-white antialiased font-museo`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="  absolute z-20  h-full w-full">
          <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10 font-museo">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10 font-museo">
              <Slides data={data} />
              <Controls
                currentSlideData={currentSlideData}
                data={data}
                transitionData={transitionData}
                initData={initData}
                handleData={setData}
                handleTransitionData={setTransitionData}
                handleCurrentSlideData={setCurrentSlideData}
                sliderData={sliderData}
              />
            </div>
          </div>
        </div>
      </AnimatePresence>
    </main>
  );
};

const sliderData = [
  {
    img: "/img/skyview.jpg",
    title: "SkyView",
    description: "https://sky-kappa-one.vercel.app",
    location: "Bosque Real",
  },
  {
    img: "/img/ivy.jpg",
    title: "Ivy",
    description: "https://niddoivy-niddo-team.vercel.app/",
    location: "Bosque Real",
  },
  {
    img: "/img/blue.jpg",
    title: "Blue",
    description: "https://blue-brown-six.vercel.app/",
    location: "Bosque Real",
  },
  {
    img: "/img/nox.jpg",
    title: "Nox",
    description: "https://storage.net-fs.com/hosting/7171698/34/",
    location: "Bosque Real",
  },
  {
    img: "/img/nativ.jpg",
    title: "Nativ",
    description: "https://jxnglobal.com/vr/gbr/propiedades/nativ_765a5b52/",
    location: "Bosque Real",
  },
];

const initData = sliderData[0];
