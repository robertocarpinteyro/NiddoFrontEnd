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
import { Testimonials } from "./Testimonials";
import { Image } from "@nextui-org/react";
import Slider from "./Slider";
export function SidebarDemo() {
  const links = [
    {
      label: "Niddo",
      href: "http://localhost:3000/",
      icon: (
        <IconBrandTabler className="text-neutral-700 dark:text-neutral-200 h-5 w-5 flex-shrink-0" />
      ),
    },
    {
      label: "Recorridos Virtuales",
      href: "http://localhost:3000/niddiaDesarrollos",
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
          <div className="col-span-2 p-6 rounded-2xl bg-gray-50 flex flex-col justify-between ">
            <Slider>
              <div className="min-w-full ">
                <Testimonials />
              </div>
              {/* Agrega más componentes dentro del slider aquí */}
              <div className="min-w-full h-full">
                <div className="h-full w-full">
                  <div
                    className={cn(
                      "h-full w-full p-6 rounded-2xl bg-gray-50 flex flex-col justify-between",
                      "group cursor-pointer overflow-hidden relative rounded-md shadow-xl border border-transparent dark:border-neutral-800",
                      "bg-[url(https://images.unsplash.com/photo-1476842634003-7dcca8f832de?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1650&q=80)] bg-cover",
                      "before:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)] before:fixed before:inset-0 before:opacity-0 before:z-[-1]",
                      "hover:bg-[url(https://i.giphy.com/media/v1.Y2lkPTc5MGI3NjExNWlodTF3MjJ3NnJiY3Rlc2J0ZmE0c28yeWoxc3gxY2VtZzA5ejF1NSZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/syEfLvksYQnmM/giphy.gif)]",
                      "hover:after:content-[''] hover:after:absolute hover:after:inset-0 hover:after:bg-black hover:after:opacity-50",
                      "transition-all duration-500"
                    )}
                  >
                    <div className="text relative z-50">
                      <h1 className="font-bold text-xl md:text-3xl text-gray-50 relative">
                        Background Overlays
                      </h1>
                      <p className="font-normal text-base text-gray-50 relative my-4">
                        This card is for some special elements, like displaying
                        background gifs on hover only.
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </Slider>
          </div>
        </div>
        {/* Second Row */}
      </div>
    </main>
  );
};
