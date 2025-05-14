"use client";

import { useRef } from "react";
import { cn } from "@/lib/utils";
import { Download, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";
import { useIsVisible } from "../../public/hooks/useIsVisible";

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const isVisible = useIsVisible(ref);

  return (
    <section className="flex items-center justify-center mt-15">
      <div
        ref={ref}
        className={cn(
          "max-w-4xl text-left md:text-center space-y-6",
          "transition duration-700 ease-in",
          isVisible ? "opacity-100 translate-y-0" : "opacity-0 translate-y-5"
        )}
      >
        <a
          href="https://linkedin.com/in/gabriel-bascope-espinoza-1a970235a"
          target="_blank"
          rel="noopener"
          className="flex items-center transition md:justify-center md:hover:scale-105"
        >
          <div className="flex items-center">
            <span className="relative inline-flex overflow-hidden rounded-full p-[1px]">
              <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#51E4B8_0%,#21554E_50%,#51E4B8_100%)]"></span>
              <div className="inline-flex items-center justify-center w-full px-3 py-1 text-sm  rounded-full cursor-pointerbg-gray-800 text-black/80 backdrop-blur-3xl whitespace-nowrap">
                Disponible para trabajar
              </div>
            </span>
          </div>
        </a>
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Hola, soy Gabriel
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Desarrolador web junior con gran interés en el desarrollo de una idea
          a un producto real. Aún estudiando y explorando nuevas tecnologías.
        </p>
        <div className="flex flex-wrap md:justify-center gap-4 mt-6 ">
          <Button
            asChild
            variant="default"
            className="min-w-[120px] rounded-xl"
          >
            <a href="" download aria-label="Descargar CV">
              CV
              <Download aria-hidden="true" />
            </a>
          </Button>
          <Button
            asChild
            variant="outline"
            className="min-w-[120px] rounded-xl"
          >
            <a
              href="https://github.com/espinoza0"
              target="_blank"
              rel="noopener noreferrer"
              aria-label="Ir al perfil de Github"
            >
              Github
              <Image
                width={20}
                height={20}
                src="/images/github-mark.png"
                alt="Logo de github"
                aria-hidden="true"
                className="object-contain"
              />
            </a>
          </Button>
          <Button
            asChild
            variant="default"
            className="min-w-[120px] rounded-xl"
          >
            <a
              href="mailto:gabriel.bascope005@gmail.com"
              aria-label="Enviar correo a Gabriel"
            >
              Contacto
              <Mail aria-hidden="true" />
            </a>
          </Button>
        </div>
      </div>
    </section>
  );
}
