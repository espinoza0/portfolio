import { Download, Mail } from "lucide-react";
import { Button } from "./ui/button";
import Image from "next/image";

export default function Hero() {
  return (
    <section className="flex items-center justify-center mt-15">
      <div className="max-w-2xl text-center space-y-6">
        <h1 className="text-5xl md:text-6xl font-bold text-white drop-shadow-lg">
          Hola, soy Gabriel
        </h1>
        <p className="text-lg md:text-xl text-gray-300">
          Desarrolador web junior con gran interés en el desarrollo de una idea
          a un producto real. Aún estudiando y explorando nuevas tecnolgías.
        </p>
        <div className="flex flex-wrap justify-center gap-4 mt-6">
          <a href="" target="" rel="noopener noreferrer">
            <Button variant="secondary" className="min-w-[120px]">
              CV
              <Download />
            </Button>
          </a>
          <a href="" target="" rel="noopener noreferrer">
            <Button variant="outline" className="min-w-[120px]">
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
          <a href="mailto:gabriel@email.com">
            <Button variant="default" className="min-w-[120px]">
              Contacto
              <Mail />
            </Button>
          </a>
        </div>
      </div>
    </section>
  );
}
