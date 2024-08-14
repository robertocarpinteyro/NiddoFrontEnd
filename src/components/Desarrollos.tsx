import React from "react";
import { Card, CardFooter, Image, Button } from "@nextui-org/react";
import qs from "qs";
import { getStrapiURL } from "@/lib/utils";

async function loader() {
  const { fetchData } = await import("@/lib/fetch");
     const path = "/api/desarrollos"; 
  const baseUrl = getStrapiURL();

  const query = qs.stringify({
    populate: "*",
  });

  const url = new URL(path, baseUrl);
  url.search = query;

  const data = await fetchData(url.href);
  return data.data;
}

interface GridData {
    id: number;
    attributes: {
      title: string;
      image: {
        data: {
          attributes: {
            url: string;
            alternativeText: string;
          };
        };
      };
    };
  }
  export async function GridDisplay() {
    const gridData: GridData[] = await loader();
  
    return (
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4 p-4">
        {gridData.map((desarrollo) => (
          <Card key={desarrollo.id} isFooterBlurred radius="lg" className="border-none">
            <Image
              alt={desarrollo.attributes.image.data.attributes.alternativeText || desarrollo.attributes.title}
              className="object-cover"
              height={200}
              src={getStrapiURL() + desarrollo.attributes.image.data.attributes.url} // URL completa de la imagen
              width={200}
            />
            <CardFooter className="justify-between before:bg-white/10 border-white/20 border-1 overflow-hidden py-1 absolute before:rounded-xl rounded-large bottom-1 w-[calc(100%_-_8px)] shadow-small ml-1 z-10">
              <p className="text-tiny text-white/80">{desarrollo.attributes.title}</p>
              <Button className="text-tiny text-white bg-black/20" variant="flat" color="default" radius="lg" size="sm">
                Notify me
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    );
  }