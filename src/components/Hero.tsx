import { Download, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex items-center justify-center mt-15">
      <div className="max-w-4xl text-left md:text-center space-y-6">
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
          <a href="" target="" rel="noopener noreferrer">
            <Button variant="default" className="min-w-[120px] rounded-xl">
              CV
              <Download />
            </Button>
          </a>
          <a
            href="https://github.com/espinoza0"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Button variant="outline" className="min-w-[120px] rounded-xl">
              Github
              <Image
                width={20}
                height={20}
                src="/images/github-mark.png"
                alt="github"
                className="object-contain"
              />
            </Button>
          </a>
          <a href="mailto:gabriel.bascope005@gmail.com">
            <Button variant="default" className="min-w-[120px] rounded-xl">
              Contacto
              <Mail />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
