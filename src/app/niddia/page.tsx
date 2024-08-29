import { Container } from "@/components/Container";
import { Hero } from "@/components/Hero";
import { SectionHeading } from "@/components/SectionHeading";
import { Benefits } from "@/components/Benefits";
import { ContentWithImage } from "@/components/ContentWithImage";
import { Video } from "@/components/Video";
import { Testimonials } from "@/components/Testimonials";
import { Faq } from "@/components/Faq";
import { Cta } from "@/components/Cta";
import Niddia from "@/components/Niddia";
import { NextUIProvider } from "@nextui-org/react";
import { GridDisplay } from "@/components/Desarrollos";
export default function Home() {
  return (
    <NextUIProvider>
      <Container>
        <Niddia />
      </Container>
    </NextUIProvider>
  );
}



