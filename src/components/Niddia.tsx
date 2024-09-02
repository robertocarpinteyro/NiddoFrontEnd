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
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

import { Image } from "@nextui-org/react";

export function SidebarDemo() {
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
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-visible",
        "h-screen"
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

  return (
    <main className="container mx-auto py-4">
      <div className="flex flex-col space-y-8">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 px-4 xl:p-0 gap-y-4 md:gap-6">
          <div className="md:col-span-2 xl:col-span-3 bg-white p-6 rounded-2xl border border-gray-50">
            <div className="flex flex-col space-y-6 md:h-full md:justify-between">

              <iframe
                className="h-full w-full rounded-lg  bg-gray-100 dark:bg-neutral-800"
                id="mindstudio-frame"
                referrerPolicy="origin"
                style={{
                  width: "100%",
                  height: "85vh",
                  border: "5px solid rgba(253,255,72,0.8)",
                  borderRadius: "8px",
                  outline: "none",
                  backgroundColor: "rgba(253,255,72,0.8)",
                }}
                title="Niddia"
                frameBorder="0"
              ></iframe>

            </div>
          </div>
          <div className="col-span-2 p-6 rounded-2xl bg-gradient-to-r from-blue-500 to-blue-800 flex flex-col justify-between">
            <div className="flex flex-col">
              <p className="text-white font-bold">Lorem ipsum dolor sit amet</p>
              <p className="mt-1 text-xs md:text-sm text-gray-50 font-light leading-tight max-w-sm">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio
                soluta saepe consequuntur facilis ab a. Molestiae ad saepe
                assumenda praesentium rem dolore? Exercitationem, neque
                obcaecati?
              </p>
            </div>
            <div className="flex justify-between items-end">
              <a
                href="#"
                className="bg-blue-800 px-4 py-3 rounded-lg text-white text-xs tracking-wider font-semibold hover:bg-blue-600 hover:text-white"
              >
                Learn More
              </a>
              <Image
                src="/calendar.png"
                alt="calendar"
                width={96}
                height={96}
                className="w-auto h-24 object-cover"
              />
            </div>
          </div>
        </div>
        {/* Second Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 px-4 xl:p-0 gap-4 xl:gap-6">
          <div className="bg-white p-6 rounded-xl border border-gray-50">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <p className="text-xs text-gray-600 tracking-wide">
                  Foods & Beverages
                </p>
                <h3 className="mt-1 text-lg text-blue-500 font-bold">$ 818</h3>
                <span className="mt-4 text-xs text-gray-500">
                  Last Transaction 3 Hours ago
                </span>
              </div>
              <div className="bg-blue-500 p-2 md:p-1 xl:p-2 rounded-md">
                <Image
                  src="/dish-2.png"
                  alt="icon"
                  width={32}
                  height={32}
                  className="w-auto h-8 md:h-6 xl:h-8 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-50">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <p className="text-xs text-gray-600 tracking-wide">Groceries</p>
                <h3 className="mt-1 text-lg text-green-500 font-bold">
                  $ 8,918
                </h3>
                <span className="mt-4 text-xs text-gray-500">
                  Last Transaction 3 Days ago
                </span>
              </div>
              <div className="bg-green-500 p-2 md:p-1 xl:p-2 rounded-md">
                <Image
                  src="/grocery.png"
                  alt="icon"
                  width={32}
                  height={32}
                  className="w-auto h-8 md:h-6 xl:h-8 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-50">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <p className="text-xs text-gray-600 tracking-wide">Gaming</p>
                <h3 className="mt-1 text-lg text-yellow-500 font-bold">
                  $ 1,223
                </h3>
                <span className="mt-4 text-xs text-gray-600">
                  Last Transaction 4 Days ago
                </span>
              </div>
              <div className="bg-yellow-500 p-2 md:p-1 xl:p-2 rounded-md">
                <Image
                  src="/gaming.png"
                  alt="icon"
                  width={32}
                  height={32}
                  className="w-auto h-8 md:h-6 xl:h-8 object-cover"
                />
              </div>
            </div>
          </div>
          <div className="bg-white p-6 rounded-xl border border-gray-50">
            <div className="flex justify-between items-start">
              <div className="flex flex-col">
                <p className="text-xs text-gray-600 tracking-wide">
                  Trip & Holiday
                </p>
                <h3 className="mt-1 text-lg text-indigo-500 font-bold">
                  $ 5,918
                </h3>
                <span className="mt-4 text-xs text-gray-500">
                  Last Transaction 1 Month ago
                </span>
              </div>
              <div className="bg-indigo-500 p-2 md:p-1 xl:p-2 rounded-md">
                <Image
                  src="/holiday.png"
                  alt="icon"
                  width={32}
                  height={32}
                  className="w-auto h-8 md:h-6 xl:h-8 object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};
