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
    <Container className="flex justify-center items-center mb-20 mt-20 font-museo">
      <div
        id="acerca"
        className="grid grid-cols-1 lg:grid-cols-3 gap-4 max-w-7xl mx-auto w-full"
      >
        <WobbleCard containerClassName="col-span-1 lg:col-span-3 bg-whitte min-h-[500px] lg:min-h-[600px] xl:min-h-[300px] flex justify-center items-center">
          <div className="text-center">
            <div className="sm:px-24">
              <section className="flex items-center justify-center w-full">
                <div className="relative w-full px-5 mx-auto md:px-12 lg:px-16 max-w-7xl">
                  <div className="flex flex-col lg:flex-row items-center gap-10 justify-center">
                    <div className="max-w-xl text-center lg:text-left">
                      <p className="text-3xl sm:text-2xl font-museo text-[#201515] leading-snug">
                        Utilizo{" "}
                        <span className="font-bold">tecnología avanzada</span>
                      </p>
                      <p className="text-xl sm:text-2xl font-museo text-[#201515] leading-snug">
                        y mi profundo conocimiento sobre el mercado inmobiliario
                        para ayudarte a encontrar la
                        <span className="font-bold"> propiedad perfecta.</span>
                      </p>
                    </div>
                    <div className=" w-full aspect-square flex justify-center items-center">
                      <Image
                        src="/img/amenidadesNiddia.png"
                        width={500} // Aumenta el tamaño aquí
                        height={500} // Aumenta el tamaño aquí
                        alt="Niddia Impulsada por inteligencia artificial"
                        className="object-contain"
                      />
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
