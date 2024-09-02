import React from "react";
import Image from "next/image";
import { Container } from "@/components/Container";
import { PlaceholdersAndVanishInput } from "./ui/placeholders-and-vanish-input";
import { CheckIcon } from "@heroicons/react/20/solid";
import { WobbleCard } from "./ui/wobble-card";
const placeholders = [
  "¿Tienes opciones en una zona segura y tranquila?",
  "¿Qué inmuebles están cerca de mi lugar de trabajo?",
  "¿Cuáles son las mejores opciones de casas en mi presupuesto?",
  "¿Cuáles son las mejores zonas para familias con niños?",
  "¿Puedes mostrarme casas con acceso a áreas verdes o naturales?",
];
const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
  console.log(e.target.value);
};
const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  console.log("submitted");
};
export function Benefits() {
  return (
    <Container className="flex flex-wrap mb-20 lg:gap-10 lg:flex-nowrap mt-20">
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full">
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-niddoEsmeralda min-h-[500px] lg:min-h-[600px] xl:min-h-[300px]">
          <div className="text-left">
            <div className="sm:px-28">
              <section className="relative flex items-center w-full">
                <div className="relative items-center w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
                  <div className="relative flex-col items-start m-auto align-middle">
                    <div className="grid grid-cols-1 gap-6 lg:grid-cols-2 lg:gap-24">
                      <div className="relative items-center gap-10 m-auto lg:inline-flex md:order-first">
                        <div className="max-w-xl text-center lg:text-left">
                          <div>
                            <p className="text-3xl font-semibold tracking-tight text-[#201515] sm:text-5xl">
                              Utilizo tecnología avanzada
                            </p>
                            <p className="max-w-xl mt-4 text-base tracking-tight text-gray-600">
                              y mi profundo conocimiento sobre el mercado
                              inmobiliario para ayudarte a encontrar la
                              propiedad perfecta.
                            </p>
                          </div>
                      
                        </div>
                      </div>
                      <div className="order-first block w-full mt-12 aspect-square lg:mt-0">
                        <Image
                          src="/img/amenidadesNiddia.png"
                          width={500}
                          height={500}
                          alt="Niddia Impulsada por inteligencia aritifical"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>

            <div className="mt-20" />

            <section></section>
          </div>

          <PlaceholdersAndVanishInput
            placeholders={placeholders}
            onChange={handleChange}
            onSubmit={onSubmit}
          />
        </WobbleCard>
      </div>
    </Container>
  );
}
