"use client";

import Hero from "@/components/Hero";
import { Button } from "@/components/ui/button";
import { cn } from "@/lib/utils";
import { Link } from "lucide-react";
import Image from "next/image";
import icons from "@/components/icons/icons";

export default function Home() {
  const experiences = [
    {
      date: "Octubre 2024 - Febrero 2025",
      title: "Prácticas de Desarrollo Web",
      company: "Rapitecnic S.L.",
      description: [
        "Participación en el desarrollo de una aplicación web interna para la empresa, enfocándome en la implementación de estilos y módulos funcionales.",
        "Desarrollo utilizando React, Tailwind CSS, Node.js con Express y SQL Server.",
        "Gestión y seguimiento del proyecto mediante Trello, facilitando la organización y priorización de tareas.",
        "Trabajo colaborativo en equipo bajo metodologías ágiles, incluyendo revisiones de código y comunicación constante.",
      ],
    },
  ];

  const proyectos = [
    {
      category: "FRONTEND",
      title: "EJEMPLO",
      description:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Ullam officiis a voluptate eaque. Sunt molestiae reprehenderit.",
      repoUrl: "https://github.com/usuario/ejemplo-frontend",
      demoUrl: "https://ejemplo-frontend.vercel.app",
      tools: [icons.React, icons.Tailwind, icons.SUPABSE, icons.VERCEL],
      image:
        "https://images.unsplash.com/photo-1526779259212-939e64788e3c?q=80&w=2674&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D",
    },
    {
      category: "FULLSTACK",
      title: "Gestor de Tareas",
      description:
        "Aplicación para gestionar tareas con autenticación y almacenamiento en la nube.",
      repoUrl: "https://github.com/usuario/gestor-tareas",
      demoUrl: "https://gestor-tareas.vercel.app",
      tools: [icons.React, icons.Tailwind, icons.SUPABSE, icons.VERCEL],
      image:
        "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?q=80&w=2674&auto=format&fit=crop",
    },
    {
      category: "FRONTEND",
      title: "Portafolio Personal",
      description:
        "Mi portafolio personal donde muestro mis proyectos y habilidades.",
      repoUrl: "https://github.com/usuario/portafolio",
      demoUrl: "https://portafolio-usuario.vercel.app",
      tools: [icons.React, icons.Tailwind, icons.SUPABSE, icons.VERCEL],
      image:
        "https://images.unsplash.com/photo-1506744038136-46273834b3fb?q=80&w=2674&auto=format&fit=crop",
    },
  ];

  return (
    <>
      <Hero />
      {/* experiencia */}
      <section id="experiencia" className="text-white text-center my-20 max-w-4xl mx-auto">
        <h2 className="text-4xl mt-5">Experiencia</h2>
        <div className="my-5 mx-auto">
          <ol className="relative border-s border-gray-200 dark:border-gray-700 text-left">
            {experiences.map((exp, index) => (
              <li key={index} className="mb-10 ms-4">
                <div className="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-gray-900 dark:bg-gray-700"></div>
                <div className="mx-5">
                  <time className="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">
                    {exp.date}
                  </time>
                  <h3 className="text-lg font-semibold text-white dark:text-white">
                    {exp.title}{" "}
                    <span className="block text-sm font-normal text-gray-400 dark:text-gray-500">
                      {exp.company}
                    </span>
                  </h3>
                  <ul className="mb-4 text-base font-normal text-gray-500 dark:text-gray-400 list-disc list-inside space-y-1">
                    {exp.description.map((item, i) => (
                      <li key={i}>{item}</li>
                    ))}
                  </ul>
                </div>
              </li>
            ))}
          </ol>
        </div>
      </section>
      {/* Proyectos */}
      <section id="proyectos" className="text-white my-20 max-w-5xl mx-auto text-center">
        <h2 className="text-4xl mb-10">Proyectos</h2>
        <div className="my-5">
          <div className="flex flex-col gap-13">
            {proyectos.map((project, index) => (
              <div
                key={index}
                className="grid grid-cols-1 md:grid-cols-2 gap-7 items-center p-5 rounded bg-black/20 isolate shadow-lg ring-1 ring-black/5"
              >
                <div className="text-left space-y-4">
                  <h2 className="text-sm text-blue-400/80">
                    {project.category}
                  </h2>
                  <h3 className="text-xl">{project.title}</h3>
                  <p className="text-gray-300">{project.description}</p>

                  <div className="flex gap-2 items-center">
                    <Button>
                      <Image
                        width={20}
                        height={20}
                        src="/images/github-mark.png"
                        alt="github"
                        className="object-contain"
                      />
                      Código
                    </Button>
                    <Button>
                      <Link />
                      Demo
                    </Button>
                  </div>

                  {/* tools */}
                  <div className="flex items-center gap-2">
                    {project.tools.map((tool, i) => (
                      <span key={i} className="rounded-xl px-3 bg-slate-900/50 text-sm flex items-center gap-1">
                        {tool.icon}
                        {tool.name}
                      </span>
                    ))}
                  </div>
                </div>
                <div
                  className={cn(
                    "w-full rounded-md overflow-hidden h-64 relative shadow-white/10 shadow-2xl",
                    index % 2 === 0 && "order-first"
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
    </>
  );
}
