import React, { useEffect, useState } from "react";
import { motion } from "framer-motion";
import { StrapiImage } from "./StrapiImage";
import { getStrapiURL } from "@/lib/utils";
import qs from "qs";

interface logoData {
  id: number;
  logo: {
    url: string;
    alternativeText: string | null;
    name: string;
  };
}

const SliderDesign2 = () => {
    const [gridData, setGridData] = useState<logoData[]>([]);

    useEffect(() => {
        const fetchData = async () => {
            const { fetchData } = await import("@/lib/fetch");
            const path = "/api/desarrollos";
            const baseUrl = getStrapiURL();

            const query = qs.stringify({
                populate: "*",
            });

            const url = new URL(path, baseUrl);
            url.search = query;

            const data = await fetchData(url.href);
            setGridData(data.data);
        };

        fetchData();
    }, []);

    const duplicatedSlides = [...gridData, ...gridData];

    return (
        <div className="relative h-full overflow-hidden py-12 bg-white mx-auto" style={{ width: "50%" }}>
            <div className="absolute inset-0 z-20 before:absolute before:left-0 before:top-0 before:w-1/4 before:h-full before:bg-gradient-to-r before:from-white before:to-transparent before:filter before:blur-3 after:absolute after:right-0 after:top-0 after:w-1/4 after:h-full after:bg-gradient-to-l after:from-white after:to-transparent after:filter after:blur-3"></div>

            <motion.div
                className="flex"
                animate={{
                    x: ['0%', '-100%'],
                    transition: {
                        ease: 'linear',
                        duration: 15,
                        repeat: Infinity,
                    }
                }}
            >
                {duplicatedSlides.map((desarrollo, index) => (
                    <div key={index} className="flex-shrink-0" style={{ width: `${100 / gridData.length}%` }}>
                        <div className="flex items-center justify-center h-full">
                            <StrapiImage
                                src={desarrollo.logo.url}
                                width={100}  // Ajusta el tamaño según lo necesites
                                height={100}
                                alt={desarrollo.logo.alternativeText || "Logo"}
                                className="object-contain"
                            />
                        </div>
                    </div>
                ))}
            </motion.div>
        </div>
    );
};

export default SliderDesign2;
