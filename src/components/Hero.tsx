import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { getStrapiURL } from "@/lib/utils";
import qs from "qs";
import { StrapiImage } from "./StrapiImage";
import { Open_Sans } from "next/font/google";
async function loader() {
  const { fetchData } = await import("@/lib/fetch");

  const path = "/api/sections/3";
  const baseUrl = getStrapiURL();
  console.log("Data received from API:", baseUrl); // Log de los datos recibidos
  const query = qs.stringify({
    populate: "*",
  });

  const url = new URL(path, baseUrl);
  url.search = query;
  console.log("Data received from API:", url.href);
  const data = await fetchData(url.href);
  console.log("Data received from API:", data); // Log de los datos recibidos
  return data;
}

interface HeroProps {
  data: {
    heading: string;
    text: string;
    cta: {
      href: string;
      text: string;
      external: boolean;
    };
    image: {
      url: string;
      alternativeText: string | null;
      name: string;
    };
    bg: {
      url: string;
      alternativeText: string | null;
      name: string;
    };
  };
}

export async function Hero() {
  const data = (await loader()) as HeroProps["data"];
  const { heading, text, cta, image, bg } = data;
  console.log("cta", cta.href); 
  if (!data) return null;

  return (
    <div
      className="bg-cover bg-center w-full flex items-center pt-20"
      style={{
        borderBottomLeftRadius: '50px', 
        borderBottomRightRadius: '50px',
        backgroundImage:`url("http://localhost:1338/uploads/fondo_20amarillo_20web_36161123af.png")`,
      }}
    >
      <Container className="flex flex-wrap justify-center items-center px-11">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8" style={{
           borderRadius: '200px',
           fontFamily: "MuseoModerno",
         }}>
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight">
              {heading}
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl">
              {text}
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href={cta.href}
                target={cta.external ? "_blank" : "_self"}
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-niddoEsmeralda rounded-md "
              >
                {cta.text}
              </Link>
            </div>
          </div>
        </div>
        <div className="flex items-center justify-center w-full lg:w-1/2">
          <div className="">
            <StrapiImage
              src={image.url}
              width={616}
              height={617}
              className={"object-cover"}
              alt={image.alternativeText || "Hero Image"}
            />
          </div>
        </div>
      </Container>
    </div>
  );
}
