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
      href: "#",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Recorridos Virtuales",
      href: "#",
      icon: (
        <IconUserBolt className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
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
        <SidebarBody className="justify-between gap-10">
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
      href="#"
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
      href="#"
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

    const script = document.createElement("script");
    script.src = "https://api.mindstudio.ai/v1/embed.js";
    script.async = true;
    document.body.appendChild(script);

    return () => {
      document.body.removeChild(script);
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
      relative flex-1 h-full min-h-screen select-none overflow-auto text-white antialiased`}
    >
      <AnimatePresence>
        <BackgroundImage
          transitionData={transitionData}
          currentSlideData={currentSlideData}
        />
        <div className="  absolute z-20  h-full w-full">
          
          <div className=" flex h-full w-full grid-cols-10 flex-col md:grid">
            <div className=" col-span-4 mb-3 flex h-full flex-1 flex-col justify-end px-5 md:mb-0 md:justify-center md:px-10">
              <SlideInfo
                transitionData={transitionData}
                currentSlideData={currentSlideData}
              />
            </div>
            <div className=" col-span-6 flex h-full flex-1 flex-col justify-start p-4 md:justify-center md:p-10">
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
    img: "/img/casaAmbar.jpg",
    title: "Casa Ambar",
    description:
      "",
    location: "Bosque Real",
  },
  {
    img: "/img/skyview.jpg",
    title: "SkyView",
    description:
      "",
    location: "Bosque Real",
  },
  {
    img: "/img/ivy.jpg",
    title: "Ivy",
    description:
      "",
    location: "Bosque Real",
  },
  {
    img: "/img/blue.jpg",
    title: "Blue",
    description:
      "",
    location: "Bosque Real",
  },
];

const initData = sliderData[0];
