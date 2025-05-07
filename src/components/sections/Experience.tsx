"use client";

import { ExperienceItem } from "../ExperienceItem";

const experiences = [
  {
    date: "Octubre 2024 - Febrero 2025",
    title: "Prácticas de Desarrollo Web",
    company: "Rapitecnic S.L.",
    description: [
      "Participación en el desarrollo de una aplicación web interna para la empresa, enfocándome en la implementación de estilos y módulos funcionales.",
      // "Desarrollo utilizando React, Tailwind CSS, Node.js con Express y SQL Server.",
      "Gestión y seguimiento del proyecto mediante Trello, facilitando la organización y priorización de tareas.",
      "Trabajo colaborativo en equipo bajo metodologías ágiles, incluyendo revisiones de código y comunicación constante.",
    ],
  },
];

export default function Experience() {
  return (
    <section
      id="experiencia"
      className="text-white text-center my-20 max-w-4xl mx-auto pt-10"
    >
      <h2
        className="text-4xl mt-5 bg-gradient-to-t from-white via-zinc-400 to-zinc-700/80 bg-clip-text text-transparent"
      >
        Experiencia
      </h2>
      <div className="my-5 mx-auto">
        <ol className="relative border-s border-gray-200 dark:border-gray-700 text-left max-w-[50rem] mx-auto">
          {experiences.map((exp, index) => (
            <ExperienceItem key={index} exp={exp} />
          ))}
        </ol>
      </div>
    </section>
  );
}
