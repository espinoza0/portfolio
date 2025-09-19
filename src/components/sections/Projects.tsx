"use client";

import icons from "@/components/icons/icons";
import ProjectCard from "../ProjectCard";
import { Proyecto } from "@/types/global.types";

const proyectos: Proyecto[] = [
  {
    category: "FULLSTACK",
    title: "FlowBoard",
    description:
      "FlowBoard es una herramienta de gestión de proyectos inspirada en Trello. Permite a los usuarios crear tableros personalizados, tareas y hacer seguimiento del progreso de sus proyectos de manera visual e intuitiva. Actualemnte se encuentra en desarrollo.",
    repoUrl: "https://github.com/espinoza0/Kanban-App",
    // demoUrl: "https://grand-cucurucho-515e7f.netlify.app/",
    tools: [
      icons.React,
      icons.Tailwind,
      icons.TypeScript,
      "JWT",
      "Shadcn UI",
      icons.VERCEL,
      "API",
      icons.NodeJS,
      icons.Express,
      icons.Sequelize
    ],
    image: "/images/projects/flowboard.webp",
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
    category: "FULLSTACK",
    title: "Memory Game",
    description:
      "Aplicación web que permite jugar al memory, autenticarse, hacer un seguimiento de tus partidas y ver un ranking de otros jugadores. Desarrollada utilizando Next.js, Typescript, Tailwind CSS y Laravel.",
    repoUrl: "https://github.com/espinozagabriel0/proyecto-memory",
    demoUrl: "https://proyecto-memory.vercel.app",
    tools: [
      icons.NextJS,
      icons.TypeScript,
      icons.Tailwind,
      icons.Laravel,
      "Shadcn UI",
      "JWT",
      "API",
      icons.MySQL,
      icons.VERCEL,
    ],
    image: "/images/projects/memory.webp",
  },
];

export default function Projects() {
  return (
    <section
      id="proyectos"
      className="text-white my-20 max-w-5xl mx-auto text-center pt-12 scroll-mt-7"
    >
      <h2 className="text-4xl mb-10 text-left md:text-center bg-gradient-to-t from-zinc-50 via-zinc-400 to-zinc-700/80 bg-clip-text text-transparent">
        Proyectos
      </h2>
      <div className="my-5">
        <div className="flex flex-col gap-13">
          {proyectos.map((project, index) => (
            <ProjectCard key={index} project={project} index={index} />
          ))}
        </div>
      </div>
    </section>
  );
}
