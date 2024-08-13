import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/Container";
import { getStrapiURL } from "@/lib/utils";
import qs from "qs";
import { StrapiImage } from "./StrapiImage";

async function loader() {
  const { fetchData } = await import("@/lib/fetch");

  const path = "/api/sections/1";
  const baseUrl = getStrapiURL();

  const query = qs.stringify({
    populate: "*",
  });

  const url = new URL(path, baseUrl);
  url.search = query;

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
  console.log("bg URL", bg.url); 
  if (!data) return null;

  return (
    <div
      className="bg-cover bg-center min-h-screen flex items-center"
      style={{
        
        backgroundImage:`url("http://localhost:1337/uploads/fondo_20amarillo_20web_901ea75763.png")`,
      }}
    >
      <Container className="flex flex-wrap h-full items-center">
        <div className="flex items-center w-full lg:w-1/2">
          <div className="max-w-2xl mb-8">
            <h1 className="text-4xl font-bold leading-snug tracking-tight text-gray-800 lg:text-4xl lg:leading-tight xl:text-6xl xl:leading-tight dark:text-white">
              {heading}
            </h1>
            <p className="py-5 text-xl leading-normal text-gray-500 lg:text-xl xl:text-2xl dark:text-gray-300">
              {text}
            </p>

            <div className="flex flex-col items-start space-y-3 sm:space-x-4 sm:space-y-0 sm:items-center sm:flex-row">
              <Link
                href={cta.href}
                target={cta.external ? "_blank" : "_self"}
                rel="noopener"
                className="px-8 py-4 text-lg font-medium text-center text-white bg-indigo-600 rounded-md "
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
