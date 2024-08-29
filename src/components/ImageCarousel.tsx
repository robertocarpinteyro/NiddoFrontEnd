"use client"
import { StrapiImage } from "./StrapiImage";
import { getStrapiURL } from "@/lib/utils";
import qs from "qs";

async function loader() {
  const { fetchData } = await import("@/lib/fetch");
  const path = "/api/sections/2";
  const baseUrl = getStrapiURL();

  const query = qs.stringify({
    populate: {
      imageSlider: {
        populate: "*"
      }
    },
  });
  const url = new URL(path, baseUrl);
  url.search = query;

  const data = await fetchData(url.href);
  console.log("Data received from API:", data);
  return data.data;
}

interface Image {
  id: number;
  url: string;
}

interface ImageSlider {
  id: number;
  images: {
    data: Image[];
  };
}

interface SectionData {
  id: number;
  imageSlider: ImageSlider;
}

export async function ImageCarousel() {
  const data = await loader();
  console.log("Data received from API:", data);

  // Aquí intentamos acceder a imageSlider solo si `data` existe y está definido
  const slides: Image[] = data?.imageSlider?.images?.data.url || [];

  console.log("Images for slider:", slides);

  return (
    <div
      id="carouselExampleSlidesOnly"
      className="relative"
      data-twe-carousel-init
      data-twe-ride="carousel"
    >
      <div className="relative w-full overflow-hidden after:clear-both after:block after:content-['']">
        {slides.map((slide, index) => (
          <div
            key={slide.id}
            className={`relative float-left -mr-[100%] w-full transition-transform duration-[600ms] ease-in-out motion-reduce:transition-none ${
              index === 0 ? "block" : "hidden"
            }`}
            data-twe-carousel-item
            data-twe-carousel-active={index === 0 ? true : undefined}
          >
            <StrapiImage
              key={slide.id}
              src={"http://localhost:3000/_next/image?url=http%3A%2F%2Flocalhost%3A1337%2Fuploads%2Fimagen_de_niddia_4f1fc2c816.png&w=640&q=75"}
              alt={`Slide ${index + 1}`}
              width={200}
              height={200}
            />
          </div>
        ))}
      </div>
    </div>
  );
}