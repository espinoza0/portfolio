"use client";

import icons from "@/components/icons/icons";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import Image from "next/image";


// Tipos para los iconos
type ToolIcon = {
  name: string;
  icon: React.ReactNode | null;
  category: string;
  className: string;
};

// El tipo para cada herramienta puede ser un ToolIcon o un string
type Tool = ToolIcon | string;

// Tipo para cada proyecto
type Proyecto = {
  category: string;
  title: string;
  description: string;
  repoUrl: string;
  demoUrl: string;
  tools: Tool[];
  image: string;
};

const proyectos: Proyecto[] = [
  {
    category: "FRONTEND",
    title: "Tip Calculator App",
    description:
      "Aplicación web sencilla para calcular propinas, usando HTML, CSS y Javascript.",
    repoUrl: "https://github.com/espinoza0/tip-calculator-app",
    demoUrl: "https://espinoza0.github.io/tip-calculator-app/",
    tools: [icons.HTML, icons.CSS, icons.JavaScript],
    image: "/images/projects/tip-calc.webp",
  },
  {
    category: "FRONTEND",
    title: "Job Listing Filter",
    description:
      "Aplicación web que permite filtrar una lista de ofertas de trabajo mediante tags.",
    repoUrl: "https://github.com/espinoza0/static-job-listing-filter",
    demoUrl: "https://grand-cucurucho-515e7f.netlify.app/",
    tools: [icons.React, icons.Tailwind, icons.Netlify],
    image: "/images/projects/job-listing.webp",
  },
  {
    category: "FRONTEND",
    title: "Product List with Cart",
    description:
      "Aplicación web que permite agregar productos a un carrito de compras y simular el proceso de pedido en un restaurante.",
    repoUrl: "https://github.com/espinoza0/product-list-with-cart",
    demoUrl: "https://lustrous-maamoul-4b44d8.netlify.app/",
    tools: [icons.React, icons.Tailwind, icons.Netlify, "Material UI"],
    image: "/images/projects/product-cart.webp",
  },
  {
    category: "FRONTEND",
    title: "IP Address Tracker",
    description:
      "Aplicación web que permite obtener información sobre una dirección IP y mostrar una ubicación en un mapa. Usa la API de IP Geolocation de IPify y la API de Leaflet para generar el mapa.",
    repoUrl: "https://github.com/espinoza0/ip-address-tracker",
    demoUrl: "https://ip-address-tracker-main-two.vercel.app/",
    tools: [icons.React, icons.Tailwind, icons.VERCEL, "API"],
    image: "/images/projects/ip-tracker.webp",
  },
  {
    category: "FRONTEND",
    title: "Movie/TV Discover App",
    description:
      "Aplicación web que permite buscar y descubrir películas y series de televisión. Usa la API de The Movie Database (TMDB) para la obtención de información del tíulo; actores, tráiler, dónde ver, etc.",
    repoUrl: "https://github.com/espinoza0/Movie-TV-Discover-App",
    demoUrl: "https://movie-discover.onrender.com/",
    tools: [icons.React, icons.Tailwind, icons.Render, "API", "Material UI"],
    image: "/images/projects/movie-tv-discover.webp",
  },
  {
    category: "FRONTEND",
    title: "Vimeo Copy",
    description:
      "Clon estático del sitio web de vimeo, en el que se integran animaciones, transiciones y diseño responsivo. El proyecto se realizó con HTML, CSS, SASS y Bootstrap.",
    repoUrl: "https://github.com/espinoza0/pr3-vimeo",
    demoUrl: "https://pr3-vimeo.onrender.com/",
    tools: [icons.HTML, icons.BOOTSTRAP, "SASS", icons.Render],
    image: "/images/projects/vimeo.webp",
  },
  {
    category: "FRONTEND",
    title: "Portafolio Personal",
    description:
      "Mi portafolio personal donde muestro mis proyectos y habilidades.",
    repoUrl: "https://github.com/espinoza0/portafolio",
    demoUrl: "https://portafolio-usuario.vercel.app",
    tools: [icons.React, icons.Tailwind, "Shadcn UI", icons.VERCEL],
    image:
      "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2674&auto=format&fit=crop",
  },
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="text-white my-20 max-w-5xl mx-auto text-center pt-12"
    >
      <h2 className="text-4xl mb-10">Proyectos</h2>
      <div className="my-5">
        <div className="flex flex-col gap-13">
          {proyectos.map((project, index) => (
            <div
              key={index}
              className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center p-5 rounded-md bg-black/30 isolate shadow-lg ring-1 ring-black/5"
            >
              <div className="text-left space-y-4">
                <h2 className="text-sm text-blue-400/80">{project.category}</h2>
                <h3 className="text-xl">{project.title}</h3>
                <p className="text-gray-300">{project.description}</p>

                <div className="flex gap-2 items-center">
                  <a
                    href={project.repoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md bg-slate-900/50 flex items-center gap-2"
                  >
                    <Image
                      width={20}
                      height={20}
                      src="/images/github-mark.png"
                      alt="github"
                      className="object-contain"
                    />
                    Código
                  </a>
                  <a
                    href={project.demoUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 rounded-md bg-slate-900/50 flex items-center gap-2"
                  >
                    <Link size={17} />
                    Demo
                  </a>
                </div>

                {/* tools */}
                <div className="flex items-center gap-2 flex-wrap">
                  {project.tools.map((tool, i) => (
                    <span
                      key={i}
                      className={cn(
                        "rounded-full px-3 py-[1.5px] bg-slate-900/50 text-sm flex items-center gap-1 relative overflow-hidden",
                        typeof tool === "object" && "className" in tool
                          ? tool.className
                          : ""
                      )}
                    >
                      <span className="absolute left-0 top-0 w-full h-full bg-black/75 pointer-events-none" />
                      {typeof tool === "string" ? (
                        <span className="relative z-10">{tool}</span>
                      ) : (
                        <span className="relative z-10 flex items-center gap-2 text-white">
                          {tool.icon}
                          {tool.name}
                        </span>
                      )}
                    </span>
                  ))}
                </div>
              </div>
              <div
                className={cn(
                  "w-full rounded-md overflow-hidden h-64 relative shadow-white/10 shadow-2xl",
                  index % 2 === 0 && "md:order-first"
                )}
              >
                <Image
                  src={project.image}
                  alt="proyecto"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
