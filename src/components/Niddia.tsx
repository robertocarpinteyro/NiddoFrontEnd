"use client";
import React, { useEffect, useState } from "react";
import { Sidebar, SidebarBody, SidebarLink } from "./ui/sidebar";
import { useRouter } from "next/router"; 
import {
  IconArrowLeft,
  IconBrandTabler,
  IconSettings,
  IconUserBolt,
} from "@tabler/icons-react";
import Link from "next/link";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";
import Testimonials from "./Testimonials";
import ThreeColTestimonials from "./TestimonialCollection";
import Slider from "./Slider";
import { Card, CardHeader, Image, CardBody } from "@nextui-org/react";
export function SidebarDemo() {
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
        "rounded-md flex flex-col md:flex-row bg-gray-100 dark:bg-neutral-800 w-full flex-1 max-w-7xl mx-auto border border-neutral-200 dark:border-neutral-700 overflow-visible",
        "h-screen"
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





  return (
    <main className="container mx-auto py-4 font-museo">
  
      <div className="flex flex-col space-y-8">
        {/* First Row */}
        <div className="grid grid-cols-1 md:grid-cols-4 xl:grid-cols-5 px-4 xl:p-0 gap-y-4 md:gap-6">
          <div className="md:col-span-2 xl:col-span-3 bg-white p-6 rounded-2xl border border-gray-50">
            <div className="flex flex-col space-y-6 md:h-full md:justify-between">
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
            </div>
          </div>
          <div className="col-span-2 p-6 rounded-2xl bg-gray-50 flex flex-col justify-between h-full font-museo">
            
            <Slider>
              
              {/* Image with hover effect */}
              <div className="relative h-full w-full group">
                
                <img
                  src="/img/Niddia_Terraza2.jpg"
                  alt="Your Image"
                  className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                />

                
              </div>
              <div className="relative h-full w-full group">
                <img
                  src="/img/niddia/Niddia_8.png"
                  alt="BosqueReal"
                  className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                />
              </div>

              <div className="relative h-full w-full group">
                <img
                  src="/img/niddia/Niddia_1.jpg"
                  alt="Niddia_BosqueReal"
                  className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                />
              </div>

              <div className="relative h-full w-full group">
                <img
                  src="/img/niddia/Niddia_2.jpg"
                  alt="Niddia_Blue"
                  className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                />
              </div>

              <div className="relative h-full w-full group">
                <img
                  src="/img/niddia/Niddia_7.png"
                  alt="BosqueReal"
                  className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                />
              </div>

              <div className="relative h-full w-full group">
                <img
                  src="/img/niddia/Niddia_3.jpg"
                  alt="Niddia_Ivy"
                  className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                />
              </div>

              <div className="relative h-full w-full group">
                <img
                  src="/img/niddia/Niddia_4.jpg"
                  alt="Niddia_Ivy"
                  className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                />
              </div>

              <div className="relative h-full w-full group">
                <img
                  src="/img/niddia/Niddia_5.jpg"
                  alt="Niddia_Ivy"
                  className="absolute inset-0 h-full w-full object-cover rounded-2xl"
                />
              </div>
            </Slider>
            
          </div>
        </div>
        {/* Second Row */}
      </div>
    </main>
  );
};
