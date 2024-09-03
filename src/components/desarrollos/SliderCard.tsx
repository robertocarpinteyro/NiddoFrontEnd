import Image from "next/image";
import React, { useEffect, useRef } from "react";

const MarqueeComponent: React.FC = () => {
  const contentRef = useRef<HTMLDivElement>(null);
  const itemRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (contentRef.current && itemRef.current) {
      const clone = itemRef.current.cloneNode(true) as HTMLDivElement;
      contentRef.current.appendChild(clone);
    }
  }, []);

  return (
    <div className="relative w-full bg-niddoEsmeralda gray-900 container-block">
      <div className="relative w-full py-3 mx-auto overflow-hidden text-lg italic tracking-wide text-white uppercase bg-niddoEsmeralda max-w-7xl sm:text-xs md:text-sm lg:text-base xl:text-xl 2xl:text-2xl">
        <div className="absolute left-0 z-20 w-40 h-full bg-gradient-to-r from-niddoEsmeralda to-transparent"></div>
        <div className="absolute right-0 z-20 w-40 h-full bg-gradient-to-l from-niddoEsmeralda to-transparent"></div>
        <div ref={contentRef} className="flex animate-marquee2">
          <div
            ref={itemRef}
            className="flex items-center justify-around flex-shrink-0 w-full py-2 space-x-2 text-white"
          >
            <Image
              src="/img/logos/1.png"
              alt="Imagen 1"
              width={100}
              height={100}
              className="w-36 h-auto"
            />
            <Image
              src="/img/logos/2.png"
              alt="Imagen 2"
              width={100}
              height={100}
              className="w-36 h-auto"
            />
            <Image
              src="/img/logos/3.png"
              alt="Imagen 2"
              width={100}
              height={100}
              className="w-36 h-auto"
            />
            <Image
              src="/img/logos/4.png"
              alt="Imagen 2"
              width={100}
              height={100}
              className="w-36 h-auto"
            />
            <Image
              src="/img/logos/5.png"
              alt="Imagen 2"
              width={100}
              height={100}
              className="w-36 h-auto"
            />
            <Image
              src="/img/logos/6.png"
              alt="Imagen 2"
              width={100}
              height={100}
              className="w-36 h-auto"
            />
            <Image
              src="/img/logos/7.png"
              alt="Imagen 2"
              width={100}
              height={100}
              className="w-36 h-auto"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarqueeComponent;
